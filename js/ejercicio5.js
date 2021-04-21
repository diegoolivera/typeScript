"use strict";
//vectores/arrays
//vector de numeros
let numeros = [0, 1, 2, 3, 4];
// o
let pares = [2, 4, 6, 8, 10];
//vector de strings
let frutas = ["naranja", "manzana", "limon"];
//o
let personas = ["juan", "pedro"];
//valores mixto
let mixtos = ["pepe", 23, "manzana", 42];
//o
let mixtos2 = ["Diego", 24, "Daniela", 21, 324, 23, "j"];
//o
let mixtos3 = ["joaquin", 232, "rocky", 2];
//utilizando los arrays
//para mostrar los vectores
let mostrar = (arr) => console.log(arr);
//eliminar 0 de los vectores
let eliminarCero = numeros.filter(i => i > 0);
mostrar(eliminarCero); //[ 1, 2, 3, 4 ]
//ordenar vector
let vectOrdenado = frutas.sort();
mostrar(vectOrdenado); //[ 'limon', 'manzana', 'naranja' ]
//# sourceMappingURL=ejercicio5.js.map