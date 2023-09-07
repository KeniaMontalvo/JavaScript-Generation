/*

    Condiciones: alterar el orden natural del código
    Estructura de control: controlar la ejecución del código

Ciclos o bucles (loops)

    También conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida hasta que se cumple una condición específica. 

Es importante usar ciclos para automatizar tareas repetitivas.

En JS existen los siguientes ciclos:

    - while
    - do while
    - for

Iterar: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles.

*/



/*while: Ejecuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. La condición se evalúa antes de cada iteración. 

while (condición) {
    //condición que se ejecuta
} 

*/

// while (miCrushMeQuiere) {
//     console.log("Seré feliz");
// }

/*
Analogía: Seguir una receta para preparar sopa

Lista de ingredientes:
    - Zanahoria
    - Papas
    - Chayote
    - Limón
    - Agua

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.
Paramos cuando ya no tengamos ingredientes. 

*/

//Ejemplo de un consultorio dental

/*
let capacidadPacientes = 10;
let pacientesEnConsultorio = 1;

//mientras 15 sea menor que 50...
while (pacientesEnConsultorio < capacidadPacientes){
    //seguiré dando servicio
    console.log("Seguimos dando servicio");
    //y aumento en uno en uno a mis pacientes
    pacientesEnConsultorio++;
}
*/

//Mientras sea verdadero, se ejecuta la instrucción.



/* Do while (hacer mientras)

    Se ejecuta la instrucción, mientras sea verdadero. (Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar).

    El bucle do while se diferencia del while ya que aquí se ejecuta la instrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no. 

do {
    //código a ejecutar
} while (condición);

Analogía: Cuando preparamos un pastel 

*/

//Ejemplo de un consultorio dental 
/*
var contadorPacientes = 0;

do {
    var nombre = prompt("Ingresa el nombre del paciente");
    if (contadorPacientes < 15) {
        console.log("Se ha registrado con éxito a " + nombre);
        contadorPacientes++;
    } else {
        console.log("Límite excedido de pacientes");
        break;
    }
} while (confirm("¿Desea registrar otro paciente?"));
    

console.log("Número total de pacientes: " , contadorPacientes);
*/

/*
var contadorPacientes = 0;

do {
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (nombre && contadorPacientes<15) {
        contadorPacientes ++;
        console.log("Se registró a: " + nombre);
    } else {
        console.log("Límite excedido de registros")
        break;
    }
}while (confirm("Desea registrar otro paciente?"));


console.log("Numero total de pacientes: " , contadorPacientes);
*/



/* For (para)

    Se utiliza cuando conocemos el número exacto de iteraciones que vamos a realizar.
    Consiste en 3 partes fundamentales:

    - inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio).
    - condición: es el detonante que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera).
    - expresión de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

for (inicialización; condición; expresión de iteración) {
    //bloque de código a ejecutar
}

*/

//Crea un código que imprima los números del 0 al 4

for (var valorInicial = 0; valorInicial<5;valorInicial++){
    console.log(valorInicial);
}

//Versión más "comercial"

for(var i=0; i<5; i++){
    console.log(i);
}

//Si quisiera que sea de 5 en 5

for(var i=0; i<15; i+=5){
    console.log(i);
}

//Consultorio dental registro de citas con un for

let cantidadDeCitasDiarias = 5;

for (let i=1; i<=cantidadDeCitasDiarias; i++){
    var nombre = prompt("Ingrese el nombre del paciente " + i);
    console.log("Paciente " + nombre + " con cita " + i);
}