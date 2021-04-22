// interfaces y clases

interface Iempleado{
    legajo:number;
    nombre:string;
    salario:number;
    antiguedad:number;

    mostrarDatos():void
    aumentarSalario(extra:number):void

}

class Empleados implements Iempleado{

    legajo: number;
    nombre: string;
    salario: number;
    antiguedad: number;

    constructor(legajo:number,nombre:string,salario:number,antiguedad:number){
        this.legajo = legajo,
        this.nombre = nombre,
        this.salario = salario,
        this.antiguedad = antiguedad
    }

    mostrarDatos(): void {
    
        console.log("Legajo:",this.legajo,"Nombre:",this.nombre,"Salario:",this.salario,"Antiguedad:",this.antiguedad)
    }
    aumentarSalario(extra: number): void {
        let salaFinal = this.salario + extra;
        console.log("salario con aumento:",salaFinal)
    }
    
}

//objetos

let empleado1:Empleados = new Empleados(4643,"juan",5000,1);
empleado1.mostrarDatos();
empleado1.aumentarSalario(45);