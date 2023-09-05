//Funciones

/* Una función es un bloque de código que realiza una tarea específica, que realiza cuando se le llama.

Cada función de JavaScript es un objetivo que se llama función*/

function saludar() {
    console.log("Hola soy una función");
}

saludar();

/*
Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones.
*/


//Declarar funciones

/* 
La palabra reservada function, nos indica que estamos definiendo una función.

El nombre de la función, depende de la acción a realizar. 

Y un par de paréntesis () después del nombre, puede contener parámetros pero en este caso no tenemos ninguno. 

Seguido de un juego de llaves para cerrar el bloque de código.

Dependiendo de las instrucciones dentro del cuerpo de la función y del propósito de la misma, se determina si la función retorna un valor.
*/

//Llamamos una función y le vamos a almacenar un resultado

function suma (a,b) {
    return a + b;
}

var resultado = suma(5,3); //Almacenar función en una variable
console.log(resultado);
/* La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Función que muestra un mensaje en la consola
function saludo (nombre){
    console.log("Hola, " + nombre + "!");
}
//Llamamos a la función saludo a alguien

saludo("Kenia");//Imprime el resultado

/* La función saludo toma un argumento (nomnbre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama */


//Hoisting

/* Yo puedo invocar una función antes de siquiera declararla.

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
*/

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;

//Scope = Alcance: hace referencia al alcance de una variable en nuestro código de JS.

/*
Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código. 

    var: no recomendable, por el comportamiento de la variable y la poca adaptabilidad.

    let: es preferible e incluso más segura de utilizar porque además de funcionar de manera global, también puede ser utilizada de manera local.

    const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado. 
*/


//Variable local
function funcionConVariableLocal(){
    var mensaje = "Este es una variable local";
    console.log(mensaje);
}

//funcionConVariableLocal();

// var mensaje = "Esta es una variable global"
// console.log(mensaje);


/**
 * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función- Si intentamos acceder a ella fuera de la función, obtendremos un error. 
 */


//Variable Global
var mensajeGlobal = "Esta es una variable global";

function funcionConVariableGlobal () {
    console.log (mensajeGlobal);
}

funcionConVariableGlobal();
/*
 *En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. 
 */



/////////////////////////////////////////////////
//Funciones anónimas
/////////////////////////////////////////////////

/*
 * Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parámetros en otras funciones.

La diferencia principal de estas funciones es que declaran sin un nombre.
 */

// function () {
//     console.log("Hola vida"); //Función anónima
// }

const saludos = function () {
    console.log("Hola, esta es una función anónima");
}

saludos(); 

/////////////////////////////////////////////////
//Funciones flecha
/////////////////////////////////////////////////

/*
 * Una forma más concisa de definir funciones anónimas. Se le llama flecha debido a su sintaxis que utiliza (=>)

Básicamente, se trata de reemplazar la palabra function y añadir => antes de abrir nuestras llaves.
 */

const resta = (a,b) => a-b;
/*
Esta función flecha es una forma más corta de:

    const resta = function (a,b) {
        return a -b
    }

*/
console.log(resta(5,3));

/*
 * 3 Tipos de funciones principales
 * Anónimas, flecha y tradicionales
 */