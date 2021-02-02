 ## Sesión 1
 
**Backend**: el lenguaje de programación da igual (Java, PHP, Python,Ruby...) Usaremos JavaScript con Typescript (JS/TS).

JavaScript se inventó para el Frontend, surgió Node.js que permitía programar el Backend en JS. Ahora todo el stack (back y front) se puede programar en JS.

Usaremos:
-    JS/TS moderno (a partir de ES6 de 2015)
-    Node.js -> Deno.js (el intérprete) no se usa demasiado actualmente, pero parece que va a ser el futuro.
-    Mongo (base de datos) es NoSQL, es decir no relacional (más moderno y ágil).
-    GraphQL: En back como servidor y en front como cliente.

JS necesita mantener retrocompatibilidad. TS es JS tipado (Ej: JS a = 5, en TS a:number=5).
El transpilador traduce código a JS y comprueba que todos los tipos están bien puestos, pero el código que se ejecuta es de TS. Es decir, TS es JS asegurándose de que los tipos están bien puestos.
JSON es un formato de objeto de texto que permite almacenar cualquier tipo de información. Mongo guarda en JSON.

_Libros:_

- https://eloquentjavascript.net/index.html

- https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started

_Página de referencia:_

- https://www.typescriptlang.org/docs/handbook/intro.html

### Tipos básicos:
**Obsoleto:** var

Las variables se declaran con let y const:
- Const: si no se reasigna un nuevo valor a la variable, se declara constante. Siempre tiene que ser const, salvo cuando no se pueda, para definir que la referencia va a ser la misma siempre.

### Referencias:
a == b : compara si los valores son iguales. Malo si los datos son muy grandes.
a === b : compara, no que sea el mismo valor, sino que apunten a lo mismo. Inmediato, modo más habitual.

Tipado en TypeScript:
- Number
- String
- Boolean
- Any
- Undefined: útil para cuando no sabemos si va a devolver el tipo que le estamos pidiendo. Ej: 
```
let image:Image|undefined = getImage();
let fecha:string = getFecha();
```
- String: se pueden hacer de las siguientes formas:
```
let a:string = "hola"; -> La más común
                'hola';
                '''ho la''' -> "ho /n la"
                `hola ${name}` -> "hola" + name
```

Los **condicionales** if, for  y while son igual que en C++. JavaScript no tiene nada que ver con Java, solo lleva su nombre por branding, éste está basado en C++. Los ; son opcionales en JS.

### Funciones:
Las primeras funciones eran igual que en C++: 
```
function foo(a,b,c){
    return a+b+c;
}

// En TS se tipa la funcion y las variables. No es lo más usado.
function foo(a:number) :number {
}

// Ahora se suele asignar la función a una variable:
const suma = function (a,b) {
    return a+b;
}

// Tiene sentido para componer funciones -> Funciones landa
const op = function (a,b,f) { 
    return f(a,b);
}
op(3,4,suma);

```

Formas de inicializarlas:
```
const f = function( ) { }
const f = ( ) => { }

// Si dentro de {} solo hay una linea de retorno se pone directamente:
const f = (a,b) => a+b;
```

### Ejercicios:
_Programar TS online:_ https://www.typescriptlang.org/play

_Enunciados:_ https://eloquentjavascript.net/02_program_structure.html
