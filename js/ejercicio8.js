"use strict";
// interfaces y clases
class Empleados {
    constructor(legajo, nombre, salario, antiguedad) {
        this.legajo = legajo,
            this.nombre = nombre,
            this.salario = salario,
            this.antiguedad = antiguedad;
    }
    mostrarDatos() {
        console.log("Legajo:", this.legajo, "Nombre:", this.nombre, "Salario:", this.salario, "Antiguedad:", this.antiguedad);
    }
    aumentarSalario(extra) {
        let salaFinal = this.salario + extra;
        console.log("salario con aumento:", salaFinal);
    }
}
//objetos
let empleado1 = new Empleados(4643, "juan", 5000, 1);
empleado1.mostrarDatos();
empleado1.aumentarSalario(45);
//# sourceMappingURL=ejercicio8.js.map