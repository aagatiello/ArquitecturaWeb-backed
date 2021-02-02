import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";    // Consulta archivo env

// Definimos esquema: estructura de cada documento de Mongo
interface CharacterSchema {
    _id: { $oid: string };    // Propio de Mongo, esta siempre
    id: number,               // id propio
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: number,
    location: number,
    image: string,
    episode: number[],
}

interface LocationSchema {
    _id: { $oid: string };
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: number[];
}

interface EpisodeSchema {
    _id: { $oid: string };
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: number[];
}

interface IData {
    info: {
        next?: string;
    }
    results: Array<{ [key: string]: string | number | string[] | { [key: string]: string } }>
}

// Objeto con las tres variables
const url = {
    characters: "https://rickandmortyapi.com/api/character",
    episodes: "https://rickandmortyapi.com/api/episode",
    locations: "https://rickandmortyapi.com/api/location",
};

// Funcion para coger datos, asincrona, devuelve promesa con un array de objetos
const fetchData = async (url: string): Promise<Array<{ [key: string]: string | number | string[] | { [key: string]: string } }>> => {
    let response = await fetch(url);
    let data: IData = await response.json();
    const results = [...data.results];

    while (data.info.next) {
        response = await fetch(data.info.next);
        data = await response.json();
        results.push(...data.results);
    }
    return results;
};

try {
    // Array de promesas
    const dataPromises = [
        fetchData(url.characters),
        fetchData(url.episodes),
        fetchData(url.locations),
    ];

    const data = await Promise.all(dataPromises);

    // Convierte array en objeto 
    const results = {
        characters: data[0],
        episodes: data[1],
        locations: data[2],
    }

    // Url y nombre de BD las coja de variables de entorno. 
    // Variables de entorno: para meter datos secretos (como contraseñas). En deno se guardan en un archivo .env 
    const DB_URL = Deno.env.get("DB_URL");
    const DB_NAME = Deno.env.get("DB_NAME");
    
    if (!DB_URL || !DB_NAME) {
        throw Error("Please define DB_URL and DB_NAME on .env file");
    }

    // Conectamos a la BD, si la bd o coleccion no existen las crea
    const client = new MongoClient();
    client.connectWithUri(DB_URL);
    const db = client.database(DB_NAME);
    const charactersCollection = db.collection<CharacterSchema>("CharactersCollection");
    const episodesCollection = db.collection<EpisodeSchema>("EpisodesCollection");
    const locationsCollection = db.collection<LocationSchema>("LocationsCollection");

    await Promise.all([
        charactersCollection.deleteMany({}),
        episodesCollection.deleteMany({}),
        locationsCollection.deleteMany({}),
    ]);

    // Tranformamos datos de la API: eliminamos lo que no queremos, pasamos url -> numeros
    const charsToInsert = results.characters.map((character) => {
        delete character["url"];
        delete character["created"];
        return {
            ...character,
            origin: Number((character.origin as { [key: string]: string }).url.split("/").slice(-1)[0]),
            location: Number((character.location as { [key: string]: string }).url.split("/").slice(-1)[0]),
            episode: (character.episode as string[]).map(ep => Number(ep.split("/").slice(-1)[0])),
        }
    });
    
    /*
     * Después de hacer split el array quedaría: ["http", "www", "ep", 
     * "1"] y slice(-1) se queda con el último elemento. Como queremos 
     * acceder al elemento y no al array se pone [0]. Al principio de la 
     * linea se pone Number para convertir el string a numero. 
     */
    
    const episodesToInsert = results.episodes.map((episode) => {
        delete episode["url"];
        delete episode["created"];
        return {
            ...episode,
            characters: (episode.characters as string[]).map(ch => Number(ch.split("/").slice(-1)[0])),
        }
    });

    const locationsToInsert = results.locations.map((location) => {
        delete location["url"];
        delete location["created"];
        return {
            ...location,
            residents: (location.residents as string[]).map(res => Number(res.split("/").slice(-1)[0])),
        }
    });

    await Promise.all([
        charactersCollection.insertMany(charsToInsert),
        episodesCollection.insertMany(episodesToInsert),
        locationsCollection.insertMany(locationsToInsert),
    ]);

    console.info("Yay!, done!");

} catch (e) {
    console.error(e);
}
    
