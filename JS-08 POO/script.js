/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias (materialización) de este tipo de objetos.

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.

    //Mostrar un objeto similar a este
    let Felipe = {
        nombre: "Felipe",
        apellido: "Maqueda",
        edad: 31,
        email: "felipemaqueda@gmail.com",
        telefono: "5512345678"
}


*/

//Creando mi primera clase

class persona {

    //1. Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //3. Defino un constructor que tomará los atributos como "material" para la instancia o creación de mis objetos
    //El constructor es una función especial, cuya función es la de construir o instanciar objetos
    //Al pasar los atributos como parámetros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //2. Métodos o comportamientos (funciones)
    //Para definir los métodos de mi objeto, ya no utiliza la palabra function (porque están dentro de una clase)
    hablar(){
        console.log("Hola, soy ", this.nombre, " y estoy hablando...");
    } //cierre de método hablar

    dormir(){
        console.log(this.nombre, " está zzzzzzzz");
    } //cierre de método dormir

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    } //cierre de mostrarInfo

} //cierre de mi clase persona

/*Instancia de objetos del tipo persona

Sintaxis básica de una instancia

variable nombreObjeto = palabra reservada new nombreClase(parámetros o atributos) 

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@gmail.com", "5512345678");
let persona2 = new persona("Kenia", "Montalvo", 24, "kenlimonra@gmail.com", "8212345678");
let persona3 = new persona("Luffy", "Monkey", 19, "reydelospiratas@gmail.com", "6312345678");
let persona4 = new persona("Zoro", "Roronoa", 21, "mejorespadachin@gmail.com", "1112345678");
let persona5 = new persona("Sanji", "Vinsmoke", 21, "mrprince@gmail.com", "3312345678");
let persona6 = new persona("Sanji", "Vinsmoke", 21, "mrprince@gmail.com", "3312345678");

//Imprimir el objeto completo

console.log(persona2);

//Imprimir un atributo de un objeto (apellido)
console.log(persona2.apellido);
//Imprimir dos atributos de un objeto (nombre y apellido)
console.log(persona2.nombre, persona2.apellido);

//Invocar el método del objeto
persona2.dormir();
persona3.mostrarInfo();
persona5.hablar();


/*

Existen 4 pilares de la POO que nos permiten ampliar las características y dotar de funcionalidades y operaciones a nuestro código.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción

*/

//Herencia

//Creando una nueva clase para aplicar la herencia (extends)

class paciente extends persona {

    // 1. Definición de atributos o propiedades
    doctorAtiende = ""; //nombre del doctor que atiende
    historialMedico = ""; //si o no el historial
    alergias = ""; //alergias existentes

    //3. Generación de constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super(nombre, apellido, edad, email, telefono) //super indica que traemos cosas de la clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    // 2. Métodos
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }

} //cierre de la clase paciente


//instancias de la clase paciente
let paciente1 = new paciente("Pedito", "Sola", 130, "mayonesa@gmail.com", "7788994455", "Dr. Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente1
console.log(paciente1);

//invocar el metodo mostrarInfo
paciente1.mostrarInfo();


//Diferencias entre un objeto literal (normal) y un objeto tipo JSON

//Todas las claves y los valores van dentro de comillas
//Envío de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Traer la información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

/*

Realizar un programa que conste de una clase llamado Alumno, que tenga como atributos el nombre y la nota del alumno. Definir métodos para inicializar sus atributos (método constructor), imprimir y mostrar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificación)
    
    Métodos:
        - Constructor
        - Método evaluación (si aprueba o no)
        - Método imprimirInfo (nombre y la nota)

    Lógica del negocio
        - If para evaluar la nota (si la nota es menor a 6, está reprobado)
        - Recuperamos la información por medio de un prompt
        - Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)

*/

//Creación de la clase (3 pasos)

class alumno {

    // 1. Atributos o propiedades
    nombre;
    nota;


    // 3. Constructor
    constructor (nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // 2. Métodos
    //Método general, que no requiere personalización porque aplica para cualquier objeto
    evaluacion(nota){

        //condición para saber si está reprobado o aprobado
        if (nota >= 6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }

    imprimirInfo(){
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);
    }

}

//Instancias de alumnos
let alumno1 = new alumno("Felipe", 3); 
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);

//Invocando métodos
alumno1.evaluacion(alumno1.nota); //reprobado
alumno2.evaluacion(alumno2.nota); //aprobado
alumno3.evaluacion(alumno3.nota); //aprobado 