
let num1:number = 20;
let num2:number = 3;

//determinar el mayor
if (num1 > num2) {

    console.log("el mayor es:",num1)    
} 
else {
    console.log("el mayor es:",num2)  
}

// condicion ? TRUE : FALSE
let num3:number = 3;
let num4:number = 5;
num3 > num4 ? console.log("el mayor:",num3) : console.log("el mayor es:",num4);


// si lenguaje no es null ni undefined, hace lo q esta despues del ?
let lenguaje:string = "javaScript";
let x:string = lenguaje ?.replace(lenguaje,"typeScript");
console.log("el lenguaje que estoy utilizando:",x)

// si es null o undefined devuelve lo que esta despues de ?? sino lo q esta antes
let nombreUsuario:string ;

nombreUsuario = "Diego";
let y:string = nombreUsuario ?? "incio sesion";
console.log(y);  // muestra "Diego"

let valorNulo:null = null;
let z:string = valorNulo ?? "incio sesion";
console.log(z) // muestra "inicio sesion"









