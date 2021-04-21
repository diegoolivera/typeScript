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





