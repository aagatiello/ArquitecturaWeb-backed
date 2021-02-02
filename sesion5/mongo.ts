import { MongoClient } from "https://deno.land/x/mongo@v0.13.0/mod.ts";

try {
const client = new MongoClient();
client.connectWithUri("mongodb+srv://");

// Definir la interfaces
interface UserSchema{
    _id:{$oid:string};
    name:string;
    pwd:string;
};

interface CoursesSchema{
    _id?:{$oid:string};
    name:string;
    year:number;
}

// Conectarse a la DB:
const db = client.database("backend");
// Elegir Coleccion:
const courses = db.collection<CoursesSchema>("CoursesCollection");

// Operaciones:
const course = {
    name: "Estructuras de Datos y Algoritmos",
    year: 1,
};

const insertCourse = await courses.insertOne(course);

} catch(e) {
    console.log(e);
} 
