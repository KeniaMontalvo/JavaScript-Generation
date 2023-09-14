/*

Retomando las APIs...
    - APIs internas (API DOM, LocalStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.
    - APIs externas (Google Maps, FakeStore API, API PayPal, etc..): Son todas aquellas que tenemos que utilizas de proveedores externos. 

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad. 

    Ventajas de utilizar APIs
        - Reestructurar y organizar los sistemas de forma que sean más sencillos de usar. 
        - Permiten que los sistemas sean más robustos
        - Reducen los costos de mantenimiento
        - Permitir que los sistemas sean escalables

*/


/*
Sincronía 

    Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que está después de ese error no se ejecuta).
 */

//Ejemplo de una operación sincrónica
/*
console.log("Inicia mi operación sincrona");

function dosSincronica () {
    console.log("Dos");
}

function unoSincronico(){
    console.log("Uno");
    dosSincronica();
    console.log("Tres");
}

unoSincronico();
console.log("Finaliza mi operación sincrona");
*/
//Los casos donde me conviene tener operaciones sincronas, son lectura de arrays, uso de algunos métodos de arrays, condicionales, ciclos, ejecución de funciones "normales".

/*

Asincronia

    Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de código sin tener que eserar a que termine su ejecución, para ejecutar otras líneas de código. (Dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada).

*/

//Ejemplo de JavaScript Asíncrono
/*
console.log("Inicia mi operación asincronica");
function dosAsync(){
    console.log("Uno");
    setTimeout(function(){ //setTime para ejecutar esta función despúes de 3 segundos
        console.log("Dos")
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("FInaliza mi operación Asincrona");
*/

/*

Mecanismos para manejar la asincronia

    Para controlar la asincronia en JS, podemos usar algunos de estos mecanismos:
        - Callback: la forma más clásica de manejar la asincronia. Se lee conoce como "llamada de vuelta", básicamente es pasar una función como parámetro de otra función y se ejecutan una vez que se cumpla la condición esperada. 

        //Método .map de los arrays

        - Promesas: Son objetos que representan un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las promesas es que no se anidan, en una sola función podemos manejar ambas situaciones. 

        Las promesas tienen 3 estados posibles:
            - pending: estado inicial, cuando se crea la promesa. Aquí aún no hay resultados. 
            - fullfiled: cuando la promesa se resuelve con éxito (resolve)
            - rejected: cuando la operación asíncrona falla (reject)

*/

//Función especial para consumir APIs y manejar promesas

//Instrucción de la conexión a mi servidor
/*
fetch("https://fakestoreapi.com/products/1")

//Dos escenarios (obtengo respuesta o no obtengo respuesta)
.then(datos => { //cuando la promesa se resuelve, ejecuto esta función
    console.log(datos)
    return datos.json(); //convertir la respuesta

}) 

.catch(error => {
    console.log("Error, no encontramos el producto");
    console.log(error.mensaje);
})
*/
/*

Sintaxis del fetch (con promesas)

    fetch(url o consumir)
        .then (response => response.text()) //manejo la respuesta
        .then (datos => console.log(datos)) //manejo el dato

        .catch (error => console.log(error));

*/

//Asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1")

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: " + conexion);

//referencia a mi fetch para poder usar sus métodos
conexion

//usar el metodo then para manejar la respuesta (lo relleno con la respuesta)
.then(function(resultado){
    console.log("Dentro de esta función que maneja la respuesta, encontrarás: ", resultado);
    return resultado.json();
})

//uso el método then para manejar el producto (lo relleno con la info del producto)
.then(function(producto){
    console.log("Información del producto: ", producto)
})

//uso el método catch para manejar el error (lo relleno con un error para que la caja no regrese vacía)
.catch(function (error){
    console.log("Error ", error);
})



//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}

//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);

///////////////////////////

//Objeto JSON que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}

console.log(paciente);

//Ncesito convertilo a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"Registrado"}';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);

//Si mando un JSON al servidor, lo stringifeo
//Si recibo un string del servidor, lo parseo