import "./styles.css";

//NTRADA Y SALIDA DE DATOS

let edad = prompt("Tu edad es ...");

console.log("Has declarado tener " + edad);

console.warn("Este es un console.warn" + "tu edad es  " + edad);

/// TIPO DE DATOS (typeof)

let numero: number = 123;

console.log("el tipo de numero es " + typeof numero);

let numero: string = "123";

console.log("el tipo de numero es " + typeof numero);

let flag:  = true;

console.log("el tipo de numero es " + typeof flag);

let flag:  = null;

console.log("el tipo de numero es " + typeof flag);

let flag = undefined;

console.log("el tipo de numero es " + typeof flag);

////// AHORA USAMOS LAS COMILLAS IMPLES INCLINADAS HACIA LA 
// IZQUIERDA PARA AGREGAR ALGUN TIPO DE DISENIO. LO QUE
// VA ENTRE COMILLAS SE LLAMA UN TEMPLATE STRING.
let mensaje = `La edad del sujeto es
...
...
 ${edad}`;

 console.log(mensaje);
 

//AHORA VEREMOS ARRAYS. SE DEFINEN LAS VARIABLES Y LOS
//ARRAYS SE PNEN ENTRE CORCHETES [].

let datos = [1,2,3,4,5, "TEXT", true ];

console.log(datos);
console.log(datos[0])
console.log(datos[3])
console.log(datos[2])
console.log(datos[5])


let personas = [
  {nombre: "Agustin",
   apellido: "Garcia"
  }

  {nombre: "Alberto",
   apellido: "Fernandez"
  }

  {nombre: "Oscar",
   apellido: "Garofalo"
  }
]

console.log(personas[0]);
console.log(personas[1]);
console.log(personas[2]);
