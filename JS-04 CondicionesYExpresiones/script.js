console.log("Estoy vivaaaaaaaaaa");

/*
Operador

Un elemento que nos permite realizar una operación erntre dos o más elementos.

- Operadores ariméticos (+, -, *, /)
- Operadores de asignación (= / asignación)
- Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
- Operadores lógicos (&&, ||, !)
- Operadores de comparación (<, >, <=, >=, ==, === / igualdad, igualdad extrica)
*/


/*
Operadores aritméticos

    Son operadores que nos permiten tomar valores numéricos como sus operandos y retornar un valor numérico único, corresponde a operaciones matemáticas. 
*/

//Suma (+): Se utiliza para sumar dos números
let resultado = 5 + 3; //resultado contendrá el valor 8

//Resta (-): Se utiliza para restar un número de otro.
let resultado1 = 10 - 4; //resultado contendrá el valor 6

//Multiplicación (*): Se utiliza para multiplicar dos números
let resultado2 = 6 * 3; //resultado contendrá el valor 18

//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valor especial llamado "Infinity" (infinito)
let resultado3 = 15 / 3; //resultado contendrá el valor 5

//Módulo (%): Se utliza para obtener el resto de una división entre dos números
let resultado4 = 10 % 3; //resultado contendrá el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable
let numero = 5;
numero++;
//ahora numero contendrá el valor 6

//Decremento (--): Se utiliza para disminuiir en 1 el valor de una variable
let numero1 = 8;
numero1--;
//ahora numero1 contendrá el valor 7


//Operadores de comparación

//Doble igual - igualdad abstracta
5 == "5"; //true, ya que JavaScriptt convierte la cadena "5" a un número antes de la comparación

//Triple igual - igualdad estricta
5 === "5";//false, porque no son del mismo tipo y los tipos también difieren


//Ejercicio: Convertir grados Celsious a Fahrenheit
function convertirFahrenheit (gradosCelsious) {
    let conversion = (gradosCelsious*1.8) + 32;
    return conversion;
}
console.log(convertirFahrenheit(38));

//Método de compañero Antonio
let elegirConversion = parseInt(prompt("Elije la conversión que desea realizar. 1. Celsious a F°, 2. Fahrenheit a C°"));

if (elegirConversion == 1) {
    let gradosCelsious = parseInt(prompt("Ingresa los grados Celsious que deseas convertir a Fahrenheit"));
    let conversionCelsiousAFahrenheit = (gradosCelsious*1.8) + 32;
    console.log(conversionCelsiousAFahrenheit);
} else if (elegirConversion == 2) {
    let gradosFahrenheit = parseInt(prompt("Ingrese los grados Fahrenheit que deseas convertir a Celsious"));
    let conversionFahrenheitACelsious = (gradosFahrenheit-32) / 1.8;
    console.log(conversionFahrenheitACelsious);
} else {
    console.log("No existe valor ingresado");
}