//Funciones
//Programa para esterlizar materiales

//Función para saber cuántos materiales se esterilizarán y la cantidad de agua a utilizar
function materialesParaEsterilizar(cantidad){
    console.log("Se lavaran " + cantidad + " materiales.");
    let aguaParaEsterilizar = cantidad*50; //Considerado gastar 50 ml por material
    console.log("Se usó " + aguaParaEsterilizar + " ml de agua para la esterilización");
    return aguaParaEsterilizar;
}

//Función para limpiar cada material con el agua que corresponde, el número de materiales y cantidad de tiempo

function limpiarMaterial(cantidadDeAgua, cantidadDeMateriales,cantidadDeTiempo) {
    console.log("Tomar " + cantidadDeAgua + " ml de agua para llenar el autoclave con " + cantidadDeMateriales + " materiales para esterilizar y dejarlos durante " + cantidadDeTiempo + " minutos.");
}

//Función para sacar el material del autoclave

function sacarMaterial() {
    console.log("Sacando los materiales esterilizados del autoclave");
}

//Función principal que se guarde el material
function prepararMaterial(material) {
    let aguaParaMaterialEsterilizado = materialesParaEsterilizar(material);
    limpiarMaterial(aguaParaMaterialEsterilizado,10, 50); //Cantidades ficticias de agua para cada material, número de materiales a esterilizar y en el autoclave
    sacarMaterial();
}

//Llamamos a la función principal para preparar limonada
prepararMaterial(10);
