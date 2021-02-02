## Sesión 9

### GraphQL:
Hasta ahora en una API Rest se publicaba un numero de endpoints que servian una serie de datos. El cliente hace la petición, la cual lleva un playload que es devuelta por la API. Según el endpoint la API espera una serie de datos y devuelve la misma serie de datos.

En GraphQL la API solo tiene un endpoint, pero el cliente al hacer la petición dice lo que quiere y la API lo devuelve. Se podría decir que la API tiene una serie de funciones que el cliente llama. Permite concretar más, por ejemplo: al hacer una petición como getCharacters puedes pedir que solo devuelva el campo de nombre en vez de todos, sin necesidad de hacer la gestión manualmente.

GraphQL está muy vinculado con los modelos de datos, lo primero que se hace es definir la base de datos (esquema de mongo) y el modelo de datos (esquema de usuario). Si se tiene datos relacionados, de un modo mucho más sencillos que API Rest, hace la construcción.

Funciones:
- **Query**: pide datos.
- **Mutaciones**: pide que se modifiquen datos.

_Librería:_ https://deno.land/x/oak_graphql
