 ## Sesión 2
 
Recordamos:
- Backend: accede a datos persistentes a una base de datos. Nosotros trabajaremos con Mongo. Comunica lo que hay en el navegador con la base de datos. Se puede programar en cualquier lenguaje de programación.
- Frontend: lo que se ve en el navegador. Solo se programa en HTML, CSS y JavaScript.

TypeScript tipa el JavaScript para evitar errores. El entorno de programación/librería que usaremos es Deno, que se encarga de su interpretación.

Cada vez se usa menos la programación orientada a objetos (java) para pasar a programación funcional.

_Libro sobre programación funcional:_ https://github.com/getify/Functional-Light-JS

### Funciones I:
Lo actual es hacerla siempre como variable, tipicamente constante. Si no se respetan los tipos, TS dará un error.
```
const suma = (a:number|string, b:number) :number|string => {
    return a+b;
}

suma("hola",3); -> "hola3"
```

También existen funciones que devuelven funciones (**closure**):
```
const multiplyBy = (n:number) => {
    return (a:number) :number => n*a
}

const double = multiplyBy(2);
double(3); -> 6
```

### Arrays:
Inicialización:
```
const a:number [] = [1,2,3,4,3];
```

Función que recorra un array y la imprima por pantalla (*for_each*):
```
const imprimirPantalla = (num:number) :void => console.log(num);

const for_each = (arr:number [], f:Function) => {
    for(let i=0; i<arr.length; i++){
        f(arr[i]);
    }
}

for_each(a, imprimirPantalla);

// Función que recorra todo el array e imprima solo los pares, sin modificar for_each
for_each(a, (num:number) => {
    if(num % 2 === 0) console.log(num);
});
```

for_each ya existe y se implementa de esta forma. Recorre cada elemento de un array y hace una operación sobre él.
```
a.forEach((num:number) => console.log(num));
```

Otras funciones de los arrays son **map** y **filter**.

map: si tienes un array genera otro del mismo tamaño aplicando una transformación. (Ej: multiplicar cada elementro x2, hacer que los pares valgan 0 y los impares 1...)
```
const a:number [] = [1,2,3,4,5];

const map = (arr: any[], f:Function): any[] => {
    const returnArr= [];  
    for(let i=0; i<arr.length; i++) {
        returnArr.push(f(arr[i]));
  }
  return returnArr;
};

const b:number [] = map(a, (num:number) => 2 * num); // -> [2,4,6,8,10]
const c:string [] = map(a, (num:number) => {
    if(num % 2 === 0) return "flip";
    return "flop";
});                                                  // -> ["flop", "flip", "flop", "flip", "flop"]
```

filter: de un array inicial, en función de un criterio devolverá otro array con un subconjunto. (Ej: los pares, >3, múltiplos de 3...). El tamaño siempre será igual o menor que el array inicial.
```
const a:number [] = [1,2,3,4,5];

const filter = (arr:any [], f:Function) :any [] => {
    const result = [];
    for(let i=0; i<arr.length; i++) {
        if(f(arr[i])) result.push(arr[i]);
    }
    return result;
}

const b = filter(a, (num:number) => num > 3);         // -> [4,5]
const c = filter(a, (num:number) => num % 2 === 0);   // -> [2,4]

// Si queremos que la función pueda recibir valor e indice dentro del for modificaremos. (En b y c se puede
// ignorar si no se utiliza, pero no es aplicable al primero asi que siempre tienes que pasar arr[i])
    if(f(arr[i], i)) result.push(arr[i]);

const d = filter(a, (num:number, index:number) => {
    return (num > 3 && index % 2 === 0); 
})
```

### Funciones II:
Una función nunca debe modificar sus parámetros. Para evitarlo, hay que duplicar los valores y crear una nueva referencia. Esto se conoce como **inmutabilidad**.
```
const a = [1,2,3];

const double = (arr:number[]) => {
    const b = a.slice();
    for(let i=0; i<arr.length; i++) {
       b[i] = 2 * a[i];
    }

const c = double(a);

// Si queremos modificar 'a' pasa a ser let: let a = ...
```

### Ejercicio: función generadora de traducciones
```
const greetInLang = (greet:string) :Function => {
    return (name:string) :string => {
        return greet + name;
    }
}

const greetInItalian = greetInLang("Ciao ");
const greetInEnglish = greetInLang("Hello ");

const saludo:string = greetInItalian("Agus");
console.log(saludo);
```

_Los const no es obligatorio tiparlos ya que al no modificar su valor TS ya entiende qué tipo es._
