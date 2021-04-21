"use strict";
//tipos de datos 
let nombre = "Diego";
let edad = 24;
//toma cualquier tipo
let altura = 1.75;
let bandera = false;
console.log("mi nombre es:", nombre, "mi edad es:", edad, "mi altura es:", altura, "cm");
//devuelve los indice
var tipoTarjeta;
(function (tipoTarjeta) {
    tipoTarjeta[tipoTarjeta["debito"] = 0] = "debito";
    tipoTarjeta[tipoTarjeta["credito"] = 1] = "credito";
})(tipoTarjeta || (tipoTarjeta = {}));
console.log(tipoTarjeta.credito);
//se le puede cambiar el valor indice
var asistencia;
(function (asistencia) {
    asistencia[asistencia["ausente"] = 23] = "ausente";
    asistencia[asistencia["presente"] = 24] = "presente";
})(asistencia || (asistencia = {}));
console.log(asistencia.ausente);
//# sourceMappingURL=ejercicio1.js.map