//Funciones
//Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " limones.");
    let jugoExtraido = cantidad*10; //Considerado obtener 10ml de jugo por limón
    console.log("Se obtuvo " + jugoExtraido + " ml de jugo");
    return jugoExtraido;
}

//Función para mezclar el jugo de limón con agua y azúcar

function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log("Mezclando " + cantidadDeJugo + " ml de Jugo de limón con " + cantidadDeAgua + " ml de agua con " + cantidadDeAzucar + " gramos de azúcar");
}

//Función para servir la Limonada

function servirLimonada() {
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Función principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //Cantidades ficticias de jugo de limon, de agua y de azúcar
    servirLimonada();
}

//Llamamos a la función principal para preparar limonada

var vasoDeLimonada = false;
prepararLimonada(5);

