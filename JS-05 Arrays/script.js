/*

Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes pero con un mismo contexto)


*/

//Variables que están "sueltas"
let nombre = "Kenia";
let edad = 24;
let puesto = "Participante";


// Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "José Ángel", "Marco", "Evelyn", "Alejandro"];

console.log(typeof(personasDeLaCH31));

let cosasRandom = ["Pelota", 31, true, undefined, null];

console.log(typeof(cosasRandom));
//Al imprimir el tipo de dato de nuestro arreglo obtenemos un object porque los arrays son objetos (después veremos que tenemos muchos tipos de objetos)

//Los arreglos, al ser objetos cuentan con métodos que nos permiten manipularlos 

//Ya que tengo mi arreglo, cómo podemos acceder a esa información
//Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un método llamado Length

//Método Length para mostrar los elementos de un array
console.log(personasDeLaCH31.length);

//declarar un array 
[5,4,3,2,1]

//Inicializar un array
let cuentaRegresiva = [5,4,3,2,1];

//Acceder a un elemento en específico utilizando los índices
console.log(personasDeLaCH31[0]); //Imprime Felipe
console.log(personasDeLaCH31[25]); //Imprime undefined porque es un elemento que aún no existe

//También podemos acceder a un elemento de mi arreglo por medio de una variable

//Declaro el índice en una variable
let index = 4;

//Paso esta variable como índice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro

//Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. García", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos

dentistas[3] = "Similares"
console.log(dentistas); 
//['Dr. Smith', 'Dra. García', 'Dr. House', 'Similares']


dentistas[8] = "Dr. Strange"
console.log(dentistas);
//['Dr. Smith', 'Dra. García', 'Dr. House', 'Similares', vacío × 4, 'Dr. Strange']

console.log(typeof(dentistas[7])); //undefined

//Ejercicio
/*
let buscadorPacientes = parseInt(prompt("Ingrese el número de paciente (1-4)"));
let nombresPacientes = [
    "Kenia",
    "Lizbeth",
    "Ellie",
    "Betty"
]

function listaPacientes(){
    let buscador = nombresPacientes[buscadorPacientes-1];
    return buscador;
}

console.log(listaPacientes());
*/

//Función para imprimir una separación en la información de mi consola
function imprimirSeparacion(){
    console.log("---------------Otro tema-----------------")
}
//Invocación de la función
imprimirSeparacion();


//Métodos de arrays

let listaDelSuper = ["Gansitos", "Coca-colas", "Arroz", "Atún", "Verduritas"];

//Método length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Método push() para poner elementos al final de mi array
listaDelSuper.push("Jabón para ropa", "Jabón para trastes");
console.log(listaDelSuper);

//Método pop() para eliminar elementos del final del array
listaDelSuper.pop();
console.log(listaDelSuper);

//Agregar un elemento al principio del array con el método unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array con el método shift()
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posición de "Verduritas", se utiliza el método indexOf
console.log(listaDelSuper.indexOf("Verduritas")); //4

//Método splice para agregar, eliminar o reemplazar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar,elementoInsertar1, elementoAInsertar2,...)
listaDelSuper.splice(2,0,"Cacahuates", "Manzana");
console.log(listaDelSuper);
//['Gansitos', 'Coca-colas', 'Cacahuates', 'Manzana', 'Arroz', 'Atún', 'Verduritas', 'Jabón para ropa']

listaDelSuper.splice(5,2,"Platano");
console.log(listaDelSuper);
//['Gansitos', 'Coca-colas', 'Cacahuates', 'Manzana', 'Arroz', 'Platano', 'Jabón para ropa']

//Método .map()
let numeros = [1,2,3,4,5];

//Crear otro arreglo con los números multiplicados x2 [2,4,6,8,10]

let numerosPorDos = numeros.map(
    function(numero){
        return numero*2;
    }
)

console.log(numerosPorDos);

/*

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre y edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente y si la edad es mayor a 40 años, el paciente necesita una atención especial. 

    Aspectos a considerar
        - 2 arreglos (original y el modificado)
        - Condición if
        - función para agregar el nuevo dato a cada elemento
        - método map()

*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fátima",
        edad: 26,
    },
    {
        nombre: "Jesús",
        edad: 51,
    }
]

//Función para agregar el texto "Necesita atención especial"

function agregarEstadoSalud(paciente){
    let estado = "Saludable";

    //Si el paciente tiene más de 40 años
    if (paciente.edad >=40) {
        estado = "Necesita atención especial";
    } 
    return {
        ...paciente,
        estadoSalud :estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//Vamos a aplicar la función en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(
    agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);

imprimirSeparacion();

//Ejercicio Individual - Carreritas

/*
En una carrera se tienen los siguientes corredores con su respectiva posición:

    - Primer lugar: Roberto
    - Segundo lugar: Andrea
    - Tercer lugar: Jorge
    - Cuarto lugar: Ramiro
    - Quinto lugar: Sofía

    Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro mantiene su lugar y el quinto lugar es reemplazado por José

    ¿Cómo quedan las posiciones después de esas 3 vueltas?
*/

let corredoresEnCarreritas = [
    "Roberto",
    "Andrea",
    "Jorge",
    "Ramiro",
    "Sofía"
]

//En la vuelta 3 cambia
let vueltas = 3;

//function posicioneaFinales (){
//    if (vueltas = 3) {
        //Jorge adelanta a Roberto
        console.log(corredoresEnCarreritas);
        corredoresEnCarreritas.splice(0,0,"Jorge");
        console.log(corredoresEnCarreritas);
        //Jorge deja de estar en el tercer lugar
        corredoresEnCarreritas.splice(3,1);
        console.log(corredoresEnCarreritas);
        //Ramiro adelanta a Jorge
        corredoresEnCarreritas.splice(0,0,"Ramiro");
        console.log(corredoresEnCarreritas);
        //Ramiro deja de estar en el tercer lugar
        corredoresEnCarreritas.splice(4,1);
        console.log(corredoresEnCarreritas);
        //Roberto se lesiona y sale de la carrera
        corredoresEnCarreritas.splice(2,1);
        console.log(corredoresEnCarreritas);
        //Andrea baja una posición
        corredoresEnCarreritas.splice(4,0,"Andrea");
        console.log(corredoresEnCarreritas);
        //Andrea deja de estar en tercer lugar
        corredoresEnCarreritas.splice(2,1);
        console.log(corredoresEnCarreritas);
        //Ramiro mantiene su lugar
        console.log(corredoresEnCarreritas);;
        //El quinto lugar es reemplazado por José
        corredoresEnCarreritas.push("José");
        console.log(corredoresEnCarreritas);


//        return corredoresEnCarreritas
//    }
//}

//console.log(posicioneaFinales());


