// alert("Hola mundo");

//Este es un comentario

/*Este 
es un 
comentario 
con varias 
líneas*/

/*var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "shampoo";

console.log(frasco);*/

/* Tipos de datos primitivos y no primitivos -----------

string
number
boolean
undefined
null
symbol
object (no es primitivo)
*/

//string es una cadena de texto, que siempre debe ir entre comillas simples o comillas dobles
// var vaso = "leche";

//number no lleva comillas, y se refiere a un número con el cual podemos hacer operaciones
// var edad = 24;

//boolean solamente tiene dos salidad que es true or false
// var cuentasPremium = false;

//undefined es un tipo de dato que existe pero que no está definido o inicializado
// var proximaCita
// console.log(proximaCita);

//null es un valor que no tenemos pero declaramos
// var asistenciaInvitado = null;


/* EJERCICIO ------------------------------------------- */

//string
var nombrePaciente = "Kenia";
var apellidoPaciente = "Montalvo";
var telefonoPaciente = "123456789";
var codigoDescuento = "123";

var telefonoPacienteNumber = parseInt(telefonoPaciente);
console.log(telefonoPacienteNumber);
console.log(typeof(telefonoPacienteNumber));
var codigoDescuentoNumber = parseInt(codigoDescuento);
console.log(codigoDescuentoNumber);
console.log(typeof(codigoDescuentoNumber));

//number
var edadPaciente = 24;
var costoLimpieza = 280; 

var edadPacienteTexto = edadPaciente.toString();
console.log(edadPacienteTexto);
console.log(typeof(edadPacienteTexto));

var costoLimpiezaTexto = costoLimpieza.toString();
console.log(costoLimpiezaTexto);
console.log(typeof(costoLimpiezaTexto));

/*
//boolean
var pacienteRegistrado = true;
var tratamientoPrevio = false;

//undefined
var diaDisponible
var costoTotal

//null
var genero = null;
var seguroMedico = null;
*/


//typeOf es una palabra reservada que nos ayuda a saber qué tipo de dato tenemos
var edad = "31";
var peso = 66;

console.log(peso);
console.log(typeof(peso)); //nos mostrará que es un string

//var es una variable con alcance global (tiene mayor alcance)
//let es una variable con alcance local (solo se utiliza dentro de un bloque de código)
//const es una constante, es decir que es una variable que no cambia

//.toString() para convertir un Number a string
var pesoCadena = peso.toString();
console.log(pesoCadena);
console.log(typeof(pesoCadena));
console.log(`La variable peso era ${typeof(peso)} pero ahora es ${typeof(pesoCadena)}`);


//parseInt para convertir un string a Number
var edadNumero = parseInt(edad);
console.log(edadNumero);
console.log(typeof(edadNumero));
console.log(`La variable edad era ${typeof(edad)} pero ahora es ${typeof(edadNumero)}`);