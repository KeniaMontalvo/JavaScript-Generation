console.log("Hola Kenia");

/*
 *Flujo de control

Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo, izq/der). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.

La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante).

    Condicionales

Las condicionales son palabras reservadas que nos permiten evaluar si una condición se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partirán de un true o false.

Tengo la camisa limpia?
    Sí: voy a la fiesta
    No: Me quedo en casita

Tengo esta variable?
    Sí: ejecuto la línea 57 de mi código
    No: ejecuto la línea 88 de mi código

Condicional if (si)
    If nos sirve para validad si una condición se cumple o no. Si se cumple, entonces ejecutamos un bloque de código que está dentro del if. Si no se cumple, entonces no hacemos nada.

    Nota: Es la condicional más sencilla, para la más limitante porque solo nos da una opción.

    if (condición) {
        //bloque de código que se ejecuta si la condición es verdadera (se cumple)
    }

 */

// Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir.

if (camisaLimpia = true) { //siempre tiene que ser true para que se ejecute el código
    console.log("Felipe va a la fiesta");
}



/*
 * else (de otro modo, de lo contrario, si no)

    if (condición detonante){
        //bloque de código que se ejecuta si la condición es verdadera
    } else {
        //bloque de código que se ejecuta si la condición es falsa
    }

 */

if (camisaLimpia = false) {
    console.log("Felipe va a la fiesta"); //true
} else {
    console.log("Felipe se queda en su casa"); //false
}


/*
 * else if 

Esta condición nos ayuda a jugar con más opciones y más detonantes, para tener muchas posibilidades en el mismo código. Para lograr esto, vamos a unir el else con el if

if (condición detonante) {
    //bloque de código si la condición es verdadera
} else if (condición detonante 2){
    //bloque de código si la condición 1 es falsa y la condición 2 es verdadera
} else {
    //bloque de código si las dos condiciones son falsas
}

 */

//Ejemplo 2: Felipe tiene hambre y quiere comer chilaquiles verdes 
/*
if(hambre=true) {
    console.log ("Felipe tiene hambre");
} else if (chilaquiles = verdes) {
    console.log ("Felipe come chilaquiles");
} else {
    console.log("Felipe no come chilaquiles");
}
*/

//Ejemplo 3: Escribe un porgrama que muestre 3 mensajes diferentes. 
//El primer mensaje se muestra si son las 13:00 hrs, y debería imprimir "vamos a descanso". 
//El segundo mensaje se muestra si son las 14:30 y deberá imprimir "vamos a comer". 
//El tercer mensaje se muestra si no se cumple nada de lo anterior y deberá imprimir "Lo siento mi ciela, seguimos programando"

////////////////////////////////////////////////////
//Ejemplo
////////////////////////////////////////////////////

/*
let hora = prompt("Ingrese una hora");

if (hora == 13) {
    console.log("vamos a descanso");
} else if (hora == 14) {
    console.log("vamos a comer");
} else {
    console.log("lo siento mi ciela, seguimos programando");
} 
*/


/*
 * switch (cambiar o intercambiar / según sea el caso)

Esta condición nos permite hacer múltiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

Evalúa una expresión comparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida general.

Expresión con un valor.
    switch (expresión) {
        case 1:
            //bloque de código que se ejecuta si la opción seleccionada es igual a 1
            break;
        case 2:
            //bloque de código que se ejecuta si la opción seleccionada es igual a 2
            break;
        case 3:
            //bloque de código que se ejecuta si la opción seleccionada es igual a 3
            break;

        default:
            //bloque de código que se ejecuta si ninguna opción coincide
    }  

 */

////////////////////////////////////////////////////
//Ejemplo
////////////////////////////////////////////////////
/*
    let pisoSwitch = parseInt(prompt("A qué piso vas"));

    //let pisoSwitchOriginal = prompt("A qué piso vas");
    //pisoSwitch = parseInt(pisoSwitchOriginal);

    switch (pisoSwitch) {
        case 1:
            console.log("Llegaste al piso 1");
            break;
        case 2:
            console.log("Llegaste al piso 2");
            break;
        case 3:
            console.log("Llegaste al piso 3");
            break;

        default:
            console.log("Opción no es válida");
    }  
*/

////////////////////////////////////////////////////
//Ejemplo
////////////////////////////////////////////////////

    let edad = 17;
    let permiso = edad>=18;

    if(permiso) {
        console.log("Puedes comprar alcohol");
    } else {
        console.log("Mejor compra un jugo");
    }


//Funciones aplicables a un consultorio dental

//Función calcular costo de una consulta (condicionales)

//Variables para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoConsulta (tipoServicio, tiempoConsulta,emergencia, promocion, clienteFrecuente){

    //Datos que necesito para mí función
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    let costoTotal = costo - promocion;

    //Condicional para saber si agrego otra promoción por ser cliente frecuente

    if(clienteFrecuente == true){
        costoTotal*promocionClienteFrecuente;
    }
}


//Otro ejemplo

function calcularCostoConsultaDos(duracionMinutos, costoMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos*costoMinuto;

    if (clienteFrecuente ) {
        costoTotalDescuento = costoTotal*.9;
        return costoTotalDescuento;
    } else {
        console.log(costoTotal);
    }
}

console.log(calcularCostoConsultaDos(45,15,false));


////////////////////
/*
function registrarPaciente (){

}

function guardarPaciente(){

}

if (pacienteRegistrado = true){
    console.log("Paciente con registro previo");
} else {
    function guardarPaciente();
}
*/
////////////////////
