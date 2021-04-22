//vectores/arrays

//vector de numeros
let numeros:number[]=[0,1,2,3,4];

// o

let pares:Array<number> = [2,4,6,8,10];

//vector de strings

let frutas:string[] = ["naranja","manzana","limon"];

//o

let personas:Array<string> = ["juan","pedro"];

//valores mixto

let mixtos:any[] = ["pepe",23,"manzana",42];

//o

let mixtos2:(string|number)[] = ["Diego",24,"Daniela",21,324,23,"j"];

//o

let mixtos3:Array<string|number> = ["joaquin",232,"rocky",2];



//utilizando los arrays

//para mostrar los vectores
let mostrar = (arr:any) => console.log(arr);

//eliminar 0 de los vectores
let eliminarCero = numeros.filter(i => i > 0);
mostrar(eliminarCero) //[ 1, 2, 3, 4 ]

//ordenar vector
let vectOrdenado = frutas.sort();
mostrar(vectOrdenado) //[ 'limon', 'manzana', 'naranja' ]

// Agregar una nueva fruta
frutas.push("mandarina");
mostrar(frutas) //[ 'limon', 'manzana', 'naranja', 'mandarina' ]

//unir los arrays frutas y personas
let numYper = frutas.concat(personas);
mostrar(numYper) //[ 'limon', 'manzana', 'naranja', 'mandarina', 'juan', 'pedro' ]

//del mixto2 mostrar la posicion donde se encuentra el 21
let indice = mixtos2.indexOf(21);
console.log("la posicion en la que se encuentra el 21 es:",indice)

//todas peras, cambia todos los valores de el vector frutas por peras
let peras = frutas.fill("peras")
mostrar(peras) //[ 'peras', 'peras', 'peras', 'peras' ]

//devolver el primer par del vector pares
let primerPar = pares.shift();
console.log("el primer par de vector pares:",primerPar)//2

//obtener los 3 primeros elementos de mixtos2

let tresPrimeros = mixtos2.slice(0,3);
mostrar(tresPrimeros) //[ 'Diego', 24, 'Daniela' ]


//separar los numeros con -

let separado = numeros.join("-")
mostrar(separado) //0-1-2-3-4









