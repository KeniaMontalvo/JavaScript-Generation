/*while:Si la publicación tiene artículos disponibles, mantener publicación activa hasta que se agoten.
Se obtiene un stock disponible de 10 rascadores.
Se obtiene un pedido de 0 rascadores, por lo cual la publicación se mantendrá activa hasta que se agoten.

    1. Se obtiene un stock disponible de 10 rascadores.
    2. Se obtiene un pedido de 0 rascadores, por lo cual la publicación se mantendrá activa hasta que se agoten.

*/

let rascadorActual = 0;
let rascadorDisponible = 10;

while(rascadorDisponible > rascadorActual){
    console.log ("Producto actualmente disponible");
    rascadorDisponible--;
}


/*do-while: mostrar cuántos productos tiene en su carrito mientras sigue comprando
1.Queremos saber mostrar el carrito de compras y cuántos artículos tiene el carrito
2. Inicializamos artículos en 0 y una variable bandera para saber si el cliente quiere seguir comprando.
3. Aumentamos el número de artículos en 1 cada que el usuario indica que sí quiere seguir comprando y mostramos cuantos artículos tiene en su carrito.
*/

let articulos = 0;
let seguirComprando = true
do {
    articulos++;
    console.log("Estás comprando, tienes " + articulos + " en tu carrito");
    seguirComprando = confirm("¿Quieres seguir comprando?");
} while (seguirComprando);

/*
for: Si un vendedor tiene 10 ventas muestra una insignia de “vendedor destacado”.
    1. Para el vendedor, se tienen 0 ventas al ingresar por primera vez a la plataforma.
    2. Se le notificará que aún no es apto para ser vendedor destacado.
    3. Al llegar a la cantidad de 10 ventas actuales se le mostrará un aviso de que ha llegado a ser un vendedor destacado.
*/

for (let ventasActuales = 0; ventasActuales < 10; ventasActuales++) {
	console.log("Tienes " + ventasActuales + " ventas actualmente, continúa así para ser vendedor destacado");
} console.log("Felicidades, has obtenido la insignia de vendedor destacado por completar 10 ventas");