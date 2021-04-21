//funciones

function mayor(a:number,b:number):number{

    return a > b ? a : b;
}

function saludar(nom:string):void{
    console.log("hola",nom)
}

saludar("invitado")

let resultado = mayor(1,5);
console.log("el mayor es:",resultado)

//funciones anonimas

let menor = function(c:number,d:number):number{

    return c > d ? d : c;
}

console.log("el menor es:",menor(12,4))

//funcion flecha

let multiplica = (x:number,y:number) => x * y
console.log("la multiplicacion es:",multiplica(2,56))


//funcion con parametro opcional y por defecto
//un parametro con ? significa que puede venir un valor o no
function mensaje (nombre:string,apellido?:string,pais ="Argentina"){

    if (apellido) return nombre +" "+ apellido + " es de "+ pais;
    else return nombre +" " + "es de" +" "+ pais;
    
}
console.log(mensaje("Diego")) //Diego es de Argentina
console.log(mensaje("Diego","olivera","brasil")) //Diego olivera es de brasil
console.log(mensaje("Diego","olivera")) //Diego olivera es de Argentina
