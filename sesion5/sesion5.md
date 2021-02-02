 ## Sesión 5
 
### Mongo:
_Página Mongo:_ https://www.mongodb.com/

Cada documento dentro de mongo tiene un formato JSON no relacionados entre sí, a no ser que el programador lo haga manualmente:

<p align="center">
  <img src="https://stevenziu.github.io/images/mongo-structure.jpg" width="400" alt="MongoDB Schema">
</p>

1. Comenzamos creando un proyecto.
2. Una vez hecho, creamos un cluster, es decir, una máquina virtual que funcionará como base de datos.
3. Podemos crear Colecciones (bases de datos) e insertar documentos.

_Mongo y Deno:_ https://github.com/manyuanrong/deno_mongo

Para que funcione, en Deno hay que importar la librería de Mongo:
```
import { MongoClient } from "https://deno.land/x/mongo@v0.13.0/mod.ts";
```
Siempre hay que poner la versión ya que Deno está en desarrollo.

Lo siguiente es definir las interfaces y conectarse a la base de datos. Si no ésta no existiese, la crea.

_Ejemplos:_ https://github.com/manyuanrong/deno_mongo/blob/master/EXAMPLES.md
