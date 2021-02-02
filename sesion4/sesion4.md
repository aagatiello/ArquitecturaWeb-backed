 ## Sesión 4
 
### Programación asíncrona:
Se lanzan unas instrucciones que se ejecutan en otro momento, al acabar el programa principal. Si una web se programase de forma síncrona se quedaría bloqueada cada vez que realiza una petición.

_Capítulo programación asíncrona:_ https://eloquentjavascript.net/11_async.html

_Programar deno online:_ https://repl.it/

Modos de hacerlo:
- **Callback**: se ejecuta algo y al terminar se llama a la función. En JS la función setTimeout ejecuta una instrucción pasado un tiempo. Si dentro del programa hay un bucle como while, no se llega a ejecutar el callback hasta que el programa principal termine. Se verifica al final.
```
console.log("empiezo");
setTimeout( () => console.log("Han pasado 3 segundos") , 3000);
console.log("sigo");

// Se pueden enlazar:
setTimeout(
  () => setTimeout( () => console.log("Cuanto"), 30000)
  ,2000);    
```

- **Promise**: se da una orden, se lanza promesa y cuando se cumple, se ejecuta la función. Igual que callback con sintaxis distinta. La promesa se resuelve (cumplirla) o rechaza (no cumplirla si la BD da un error). La mayoría de peticiones se hacen con promesas.
```
let a = 5;
const promesa = new Promise((resolve, reject) => {
  if(a === 1) resolve();
  else reject();
})

promesa.then( () => {
  console.log("Promesa resuelta");
}).catch( () => {
  console.log("Promesa rechazada.");
})
```

- **Async/Await**: otro modo de hacer then/chatch. Todo lo que se pone debajo del await es como si estuviese anidado dentro del then.
```
try{
  const response = await text;
  console.log(response);
}catch(e){
  console.log("error");
}
```

### Deno:
_Página Deno:_ https://deno.land/ 

**Cómo usar deno:**
1. Programar el codigo TS en Visual Studio Code
2. Desde el terminal ejecutar el .ts haciendo deno run nombre.ts

**Cómo debuggear un programa en deno:**
1. Ejecutar: deno run --inspect-brk nombre.ts 
2. En chrome abrir: chrome://inspect
3. Se puede usar: deno run --watch --unstable --allow-read nombre.ts  para autoejecutar mientras se hacen cambios

Acceder a archivos:
```
const text = Deno.readTextFile("./ruta.txt");

text.then( (response) => {
  console.log(response);
})
```
Esto devuelve una promesa porque la lectura de un archivo no es inmediata. Se cumple al abrir y leer el archivo.

### Pedir datos online (fetch data):
_Página API Rick y Morty:_ https://rickandmortyapi.com/

```
const json = fetch("https://rickandmortyapi.com/api/");

json.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});
```

### Ejercicio: 
Sacar por pantalla todos los personajes que se llamen Rick
```
const json = fetch("https://rickandmortyapi.com/api/character/?name=rick");

json.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});

console.log("cargando...");
```
