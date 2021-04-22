"use strict";
//clase herencia
class Vehiculo {
    constructor(cantRuedas, color, marca) {
        this.cantRuedas = cantRuedas,
            this.color = color,
            this.marca = marca;
    }
    mostrarDatos() {
        console.log("---------------");
        console.log("Marca:", this.marca);
        console.log("Cantidad Ruedas:", this.cantRuedas);
        console.log("Color:", this.color);
    }
    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
    }
}
class Moto extends Vehiculo {
    constructor(cantRuedas, color, marca, cantAsientos, cantFocos) {
        super(cantRuedas, color, marca);
        this.cantAsientos = cantAsientos,
            this.cantFocos = cantFocos;
    }
    mostrarDatos() {
        super.mostrarDatos();
        console.log("Cantidad de asientos:", this.cantAsientos);
        console.log("Cantidad Focos:", this.cantFocos);
    }
}
class Auto extends Vehiculo {
    constructor(cantRuedas, color, marca, cantAsientos, cantFocos) {
        super(cantRuedas, color, marca);
        this.cantAsientos = cantAsientos,
            this.cantFocos = cantFocos;
    }
    mostrarDatos() {
        super.mostrarDatos();
        console.log("Cantidad de asientos:", this.cantAsientos);
        console.log("Cantidad Focos:", this.cantFocos);
    }
}
let moto1 = new Moto(2, "negro", "Harley", 1, 1);
let auto1 = new Auto(4, "azul", "forgoneta", 5, 4);
moto1.mostrarDatos();
auto1.mostrarDatos();
moto1.cambiarColor("verde");
moto1.mostrarDatos();
//# sourceMappingURL=ejercicio7.js.map