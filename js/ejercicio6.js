"use strict";
class Empleado {
    constructor(legajo, nombre, sueldo, antiguedad) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.antiguedad = antiguedad;
        //propiedades/atributos
        this.legajo = legajo,
            this.nombre = nombre,
            this.sueldo = sueldo,
            this.antiguedad = antiguedad;
    }
    //metodos
    descripcion() {
        console.log("Legajo:", this.legajo, "Nombre Empleado:", this.nombre, "Sueldo:", this.sueldo, "Antiguedad:", this.antiguedad);
    }
    aumentarSueldos(extra) {
        console.log("sueldo final es:", this.sueldo + extra);
    }
}
//instacias / creacion Objetos
//obj1
let E1 = new Empleado(7422, "juan", 5000, 1);
E1.descripcion(); //Legajo: 7422 Nombre Empleado: juan Sueldo: 5000 Antiguedad: 1
E1.aumentarSueldos(100); //sueldo final es: 5100
//ob2
let E2 = new Empleado(4532, "Daniela", 23000, 3);
E2.descripcion(); //Legajo: 4532 Nombre Empleado: Daniela Sueldo: 23000 Antiguedad: 3
E2.aumentarSueldos(700);
//# sourceMappingURL=ejercicio6.js.map