## Sesión 7

Una arquitectura típica se compone de: FRONT (lo que ve el usuario) + BACK (manejo de datos) + DDBB + STORAGE (disco duro en la nube).

Oak publica endpoints, es decir, peticiones del front (Postman), y el back gestiona la petición y da una respuesta. El backend no tiene que tener datos, hace peticiones y lee los datos o los modifica y los devuelve a la DDBB. 

Es más efectivo hacer una query (filtro/criterio de búsqueda) porque la DDBB está optimizada para hacerlo, en vez de bajarse toda la base de datos en local y hacerlo en TS. La API tiene poco procesamiento, tiene que tener poco algoritmo y muchas peticiones a bases de datos.

Cuando se hace una petición se recibe un objeto que se mete en context con dos campos: request y response
- Request: .body -> Payload
- Response: .body .status .headers
