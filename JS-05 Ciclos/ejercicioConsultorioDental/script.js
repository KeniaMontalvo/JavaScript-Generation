//Instrucción: Encontrar ciclos que se puedan aplicar al contexto del Consultorio Dental / Proyecto Integrador

/*While: Tratamiento de brackets, mientras los dientes están chuecos se sigue el tratamiento.
    1. El objetivo es que no quede ningún diente por alinear durante todo el proceso de tratamiento de brackets.
    2. Se tiene que el paciente tiene cierta cantidad de dientes chuecos.
    3. Se realiza un bucle en el que por cada cita que asista, cada diente chueco se alínea y por ende (disminuye su valor).
*/

let dientesTotalesPorAlinear = 0;
let dientesChuecos = 5;
while(dientesChuecos > dientesTotalesPorAlinear){
	//seguir tomando el tratamiento
	console.log("Sigue asistiendo a tus citas");
	//por cada cita que asista, se alinea un diente 
	dientesChuecos--;
}


/*Do-While: Para cuántas limpiezas limpiezas hay material por día, mientras haya material se hacen limpiezas

    1. Queremos determinar si podemos seguir haciendo limpiezas o no en función del material disponible
    2. Indicamos en una variable para cuántas limpiezas tenemos material disponible, ya sea que lo indiquemos directamente en la variable o lo pidamos al usuario
    3. Hacemos limpiezas mientras no superemos el número de limpiezas ya establecido.
*/

let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
let limpiezas = 0;
do{
    //hacer limpieza
    limpiezas++;
    console.log("Se ha realizado " + limpiezas + " limpiezas hoy, aún tienes materiales disponibles por usar")
    if (limpiezas == limpiezasDisponibles){
        console.log("Última limpieza hecha, se acabó lo que contemplaste.");
    } 

} while (limpiezas < limpiezasDisponibles);


/*For: Para poder atender a cada paciente, limpiar los utensilios utilizados.
    1. Se tienen 5 utensilios sucios que tienes que limpiar antes de recibir a cada paciente.
    2. Si el número de utensilios es mayor a 0.
    3. Por cada iteración se tiene que decrementar hasta que no quede ninguno sucio.
*/

for (let utensiliosSucios = 5; utensiliosSucios > 0; utensiliosSucios --){
	console.log("Esperar a que se limpien " + utensiliosSucios + " utensilios sucios…");
} console.log("Ya no quedan más por limpiar, puedes recibir a otro paciente");

