/*
Sistema para registrar pacientes y citas de estos pacientes, utilizando métodos de arrays

Lista de cosas para hacer / cosas por tomar en cuenta

    - Un array para pacientes
    - Un array para citas
    
    - Prompt para registrar los datos
    - Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
    - Función registrarPaciente
    - Función registrarCita
    - Métodos para modificar los arrays (push, forEach, splice)

*/

//Crear un array para almacenar mis pacientes

//La variable pacientes está declarada e inicializada (tiene un nombre, y tiene un valor, a pesar de que arreglo esté vacío)

//Los índices del arreglo están undefined, porque no hay elementos pero sí hay espacios disponibles
let pacientes = []; //pacientes = definido

//Función para registrar un nuevo paciente
//Paso 1. Ejecución de mi función. Pido dos datos
function registrarPaciente (nombre, edad) {

        //Crear un array dentro de otro array
        //Paso 2. Guardo cada par de datos (nombre y la edad) en una variable llamada paciente
        let paciente = {
            nombre,
            edad,
            citas: []
        }

        //Agregar paciente al array
        //Paso 3. Ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
        pacientes.push(paciente);
        return paciente;
}

//Función para registrar citas de un paciente

//Cuando ejecuto mi función, necesito un paciente, una hora y una fecha para registrar mi cita
function registrarCita (paciente, fecha, hora) {

    //Cuando tenga estos datos, buscaré dentro del paciente el apartado de citas para hacerle push ahí
    paciente.citas.push(
        {
            fecha,
            hora
        }
    );

}

//Función para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    console.log("Citas registradas: ")

    //forEach para imprimir citas
    paciente.citas.forEach((cita,indice) =>{
        console.log("índice: " + indice + ", Fecha: " + cita.fecha + ", Hora: " + cita.hora)
    });
}
/*
Funcionamiento del forEach anterior
    1. Definir una variable temporal llamada cita y otra variable temporal llamada índice
    2. Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa información a las variables temporales e imprime la información.
    3. Vuelve a buscar y encontrar otra cita, y reasigna esa información a las variables temporales
*/

//Registrar un paciente desde la invocación de la función registrarPaciente
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr. Simi", 50);

//Registrar la cita de un paciente desde la invocación de la función registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

//Mostrar información de paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);

/*
ForEach

    Es un elemento de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida. 

    Generalmente el for each se utiliza para imprimir la información del arreglo.

    Sintaxis ForEach
        array.forEach(function(elemento, índice, arreglo))

    - Elemento: el elemento actual del arreglo que se está procesando
    - Índice: la posición del elemento actual en el array
    - Arreglo: el array que se está recorriendo (opcional)

        Ejemplo del supermercado

    - Elemento: producto que compré y está en el carrito
    - Índice: la posición de ese producto
    - Arreglo: carrito del super (opcional)

*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabón de trastes", "pan"]

//Oye JS, para cada elemento del tipo "producto" que tenga una posición dentro del arreglo llamado "carritoSuper", vas a hacer algo
carritoSuper.forEach(function(producto,indice){
    console.log("Producto: " + producto + " con la posición: " + indice)
});