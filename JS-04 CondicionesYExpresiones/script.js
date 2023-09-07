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

    Suma (+)
    Resta (-)
    Multiplicación (*)
    División (/)
    Residuo/Módulo (%)
    Exponenciación (**)
    Incremento (++)
    Decremento (--)

*/

//Variables
let numeroUno = 10;
let numeroDos = 2;
let numeroTres = "5";

//Operaciones
suma = numeroUno + numeroDos;//22
resta = numeroUno - numeroDos;//8
multiplicacion = numeroUno * numeroDos;
division = numeroUno / numeroDos;
residuo = numeroUno % numeroDos;
exponenciacion = 10 **2;//es obsoleto porque ya hay un método para esto

console.log("Valor del número 1 antes del incremento: ", numeroUno);
//Los valores si se pueden reasignar
incremento = numeroUno++;//11
decremento = numeroDos--;//1

//Forma extensa de un incremento
numeroUno = numeroUno = 1;

console.log("Valor del número 1 después del incremento: ", numeroUno);

//Incremento de 10 en 10
numeroUno += 10;//20 suma y reasigna al mismo tiempo
numeroUno = 10 +10

//Ejemplo
//operacionCompleja = 10+5 / 2(5-6);

//Impresiones en pantalla
console.log("Suma de 10 + 2 = ", suma);//1 forma de mostrar la suma
console.log("Suma de 10 + 2 = ", numeroUno + numeroDos);//segunda forma
console.log("Suma de 10 + 2 = ", 10 + 2);//tercera forma

console.log("Resta de 10 - 2 = ", resta)

/*
Operaciones de comparación

    Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true a false)

    - mayor que (>)
    - menor que (<)
    - mayor o igual que (>=)
    - menor o igual que (<=)
    - igual (==)
    - estrictamente igual (===)
    - no es igual (!=)
    - no es estrictamente igual (!==)

    Igual (==)
    Sirve para comparar que dos valores sean iguales
*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

//13 == "13"//true
//13 === "13"//false
//23 > 12 true
//23 < 12 false

let edadFelipe = 18;
if (edadFelipe >= 18) {
    console.log("Puedes ir a la fiesta");
} else {
    console.log("Te quedas en casa");
}

//Dos negaciones es una afirmación
//!vamos a comer (no vamos a comer)
//!no me gusta Java (no no me gusta java)


/*
Operadores de asignación

    Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =

    let edad = 31;
    let saldo = 0;

*/


/*
Operadores lógicos

    Nos devuelve un resultado a partir de que se cumpla (o no) una condición, el resultado es booleano (true o false).

    - AND &&: Sirve para determinar si dos expresiones son verdaderas. 
    Si ambas son verdaderas, el resultado es verdadero. 
    Si alguna de ellas es falsa, todo el resultado es falso. 
    Si ambas son falsas, todo es falso.

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere) {
    console.log("Estoy feliz");
} else {
    console.log("Háganse a un lado que me quiero automorir");
}


/*
OR ||: Sirve para determinar si dos expresiciones son falsas, Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso.
*/

if (hayChilaquiles || hayCarneEnSuJugo) {
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}


/*
NOT (!): Regresa lo contrario de lo que evaluamos
*/

//Este código está incompleto, puede causar errores (explicación de anidación de operadores lógicos)

/*
let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0);
let escenario2 = (edadFelipe >=18 && amigosQueInvitan = true);

if (escenario1 || escenario2) {

}
*/

/* 
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
*/
