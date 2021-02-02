## Sesión 6

### API REST: 
API que se queda esperando a que le pidan cosas.

Una API publica **endpoints** disponibles. En caso de Rick y Morty serían /episodios, /character, /location, /location/1 ...

Para crear nuestra propia API-REST basándonos en https://rickandmortyapi.com/ tenemos que pedir los datos a la API Rick y Morty y guardarlas en nuestro Mongo. En las Colecciones queremos guardar los ids de cada documento, no con las urls.

El front controla cómo se muestra la info y el usuario interacciona con ella. Dichos datos los sirve una API, que se almacenan en BD, discos duros, otras APIs... 

Modos de servir la información:
- API REST: clásico, lo tiene la mayoría de las paginas webs. Tiene endpoints, es decir, url + colecciones: paginaweb/episodes. Estos pueden tener parámetros: paginaweb/episodes/1.
- GraphQL: lo sacó Facebook hace relativamente poco. Solo tiene un endpoint, se hacen llamadas concretas a datos.
