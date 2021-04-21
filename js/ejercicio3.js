"use strict";
let num1 = 20;
let num2 = 3;
//determinar el mayor
if (num1 > num2) {
    console.log("el mayor es:", num1);
}
else {
    console.log("el mayor es:", num2);
}
// condicion ? TRUE : FALSE
let num3 = 3;
let num4 = 5;
num3 > num4 ? console.log("el mayor:", num3) : console.log("el mayor es:", num4);
// si lenguaje no es null ni undefined, hace lo q esta despues del ?
let lenguaje = "javaScript";
let x = lenguaje === null || lenguaje === void 0 ? void 0 : lenguaje.replace(lenguaje, "typeScript");
console.log("el lenguaje que estoy utilizando:", x);
// si es null o undefined devuelve lo que esta despues de ?? sino lo q esta antes
let nombreUsuario;
nombreUsuario = "Diego";
let y = nombreUsuario !== null && nombreUsuario !== void 0 ? nombreUsuario : "incio sesion";
console.log(y);
let valorNulo = null;
let z = valorNulo !== null && valorNulo !== void 0 ? valorNulo : "incio sesion";
console.log(z);
//# sourceMappingURL=ejercicio3.js.map