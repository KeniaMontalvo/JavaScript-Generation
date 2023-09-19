/*

API de almacenamiento web

Nos permite almacenar información en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesión (los datos son volátiles)

Tanto el almacenamiento local como el de sesión, proporcionan un área privada para tratar sus datos, estos quiere decir que otros sitios web no pueden acceder a los datos que almacenamos. 

*/

/*

Almacenamiento local (localStorage)

    La información que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por código o borrada del navegador.

    Casos de uso: artículos de un carrito de compras, guardamos un perfil de configuración, historial de uso.

*/

//Guardando mi primer dato en localStorage

//LocalStorage.setItem(key, value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras
let carritoComprasFelipe = [
    "Sabritones", "CocaCola", "Chicles", "Tortillas"
];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);

//Obtener la información almacenada en mi localStorage

//LocalStorage.getItem(key)
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//Recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);

//borrar un elemento del localStorage
//LocalStorage.removeItem(key)
localStorage.removeItem("CarritoCompras");

//Conocer el largo o longitud del LocalStorage
//LocalStorage.length
let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Apellido", "González");