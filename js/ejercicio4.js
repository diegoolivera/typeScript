"use strict";
//funciones
function mayor(a, b) {
    return a > b ? a : b;
}
let resultado = mayor(1, 5);
console.log("el mayor es:", resultado);
//funciones anonimas
let menor = function (c, d) {
    return c > d ? d : c;
};
console.log("el menor es:", menor(12, 4));
//funcion flecha
let multiplica = (x, y) => x * y;
console.log("la multiplicacion es:", multiplica(2, 56));
//funcion con parametro opcional y por defecto
//un parametro con ? significa que puede venir un valor o no
function mensaje(nombre, apellido, pais = "Argentina") {
    if (apellido)
        return nombre + " " + apellido + " es de " + pais;
    else
        return nombre + " " + "es de" + " " + pais;
}
console.log(mensaje("Diego")); //Diego es de Argentina
console.log(mensaje("Diego", "olivera", "brasil")); //Diego olivera es de brasil
console.log(mensaje("Diego", "olivera")); //Diego olivera es de Argentina
//# sourceMappingURL=ejercicio4.js.map