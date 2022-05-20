//Crear un script en JS qe solicite al usuario ingresar un dato. Luego con JS realizar operaciones matematicas o de 
//concatenacion sobre las entradas teniendo en cuenta el tipo de dato. 
//Al finalizar mostrar el resultado con alert() o console.log


let nombre;
let apellido;
let edad; 
let fnac;
let aActal;
let calculo;
let today = new Date();

nombre = prompt ("Ingrese Nombre");
apellido = prompt ("Ingrese Apellido");
//edad = prompt ("Ingrese Edad");
fnac = prompt ("Ingrese Año Nacimiento");
aActal = 2022//prompt ("Ingrese Año Actual");
calculo = (aActal - fnac);

//console.log (nombre);
//console.log (apellido);
//console.log (edad);
//console.log (fnac);
//console.log (calculo);
console.log ("La Hora y Fecha actual es: " + today);

console.log ("Hola " + nombre + " " + apellido + ", calculo que tu edad es: " + calculo );
alert("Hola " + nombre + " " + apellido + ", calculo que tu edad es: " + calculo ) ;
