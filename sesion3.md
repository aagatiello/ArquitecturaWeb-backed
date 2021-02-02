 ## Sesión 3
 
Recordamos: en JS todas las variables son referencias. Nunca se pasan las cosas por valor sino por referencia, salvo los tipos básicos: number, string y boolean. 
```
let a = [1,2,3,4];

const f = (b:number []) :number [] => {
    b.push(5);
    return b;
}

let c = f(a);  
```

_Capítulo sobre estructuras: objetos y arrays:_ https://eloquentjavascript.net/04_data.html

_Página sobre interfaces:_ https://www.typescriptlang.org/docs/handbook/interfaces.html

### Arrays:
**Desestructurar** un array es cuando este genera otro array con cada uno de sus elementos. Separa cada elemento y los saca del array.
```
const a = [1,2,3];
const b = [...a];
const c = [...a, ...b]; // -> [1,2,3,1,2,3]
const d = [0, ...a, 5]; // -> [0,1,2,3,5]

const max = (...numbers:number []) :number => {
    let num = 0;
    for(let i of numbers) {
        if(i > num) num = i;
    }
    return num;
}

max(1,2,3,4,5,6); 
```

Funciones **forEach**, **map** y **filter**, como se usan en la realidad:
```
const a:number [] = [1,2,3,4,5];

a.forEach( (value,index) => {
    console.log(2*value + index);
})

a.forEach( (value) => {
    if(value % 2 === 0) console.log(value);
})

const b:number [] = a.map(value => 2*value);

const c:number [] = a.filter(value => value > 3);
```

### Objetos:
JavaScript es un lenguaje basado en datos. Hay un modelo llamado JSON que asocia claves a valores. 
```
const persona = {
    nombre: "Agus",
    edad: 24,
    amigos: [
        {
            nombre: "Pepe",
            edad: 12,
        },
        {
            nombre: "Maria",
            edad: 19,
        }
    ],
}

const printConsole = (obj) => {
    console.log(`nombre: ${obj.nombre}`);
    console.log(`edad: ${obj.edad}`);
    console.loh("amigos: ");
    obj.amigos.forEach( amigo =>
        console.log(`nombre: ${amigo.nombre}`);
        console.log(`edad: ${amigo.edad}`);
    })
}
```

Utilidades:
```
const a = {
    nombre: "Agus",
    edad: 28,
}

const b = {...a, altura: 190, edad: 19}; // -> Alberto, edad: 19, altura: 190
const {nombre, edad} = {...a};
```

Copias por referencia y reasignaciones:
```
const a = {
    nombre: "Agus",
    edad: 28,
    cena: [
        "lentejas",
        "pera"
    ]
}

const b = {...a};
b.name = "Bruno";

b.cena.push("coliflor"); // mantiene referencia
b.cena === a.cena; // -> true

b.cena = [...b.cena, "coliflor"]; // crea nueva referencia
b.cena === a.cena; // -> false
```

Propiedades:
- Es lo mismo b.name que b["name"]
- Se pueden poner varias palabras como clave:
```
const c = {
    "nombre y apellidos": "Agus Tina",
}

// Para acceder a ella hay que poner todo el nombre en array:
c["nombre y apellidos"]
```
- Para recorrer un objeto se puede utilizar **keys** para las claves, devolviendo un array:
```
Object.keys(persona).forEach(key => {
    console.log(`${key}: ${persona[key]}`);
})
```
- Para saber si algo es un objeto o un array:
```
if(typeof persona === "object")
if(Array.isArray(nombreArray))
```

### Interfaces:
Se crean para tipar los objetos.
```
interface IPersona {
    nombre: string;
    edad: number;
    coche?: boolean;  // Se pone interrogacion cuando puede o no tener el objeto
    amigos: string[];
    perro: {
        nombre: string,
        edad: number,
    }
}

// Si un objeto no tiene todos los campos se pone Partial<>

interface persona1:IPersona = {
    nombre: "Agus",
    edad: 21,
    coche:true
}

interface persona2:Partial<IPersona> {
    nombre: "Bruno",
    edad: 20,
}
```
### Ejercicio:
Elementos de un array que sea el resultado de aplicar sobre otro los mayores de 10 del resultado que sean multiplicados x2.
```
const a:number [] = [1,2,3,4,5];

a.map(value => 2*value)
    .filter(value => value > 10)
    .forEach(value => console.log(value));
```
