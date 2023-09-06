//Hacer condición con if, otra con else if, y otra con switch

//if, else (pase a la cita)

/*
Lista: 
-saber si el usuario pagó
*/

let usuarioPago = true;

if (usuarioPago) {
    console.log("El usuario ha pagado");
} else {
    console.log("El usuario no ha pagado, págueme!");
}



//if, else if, else (horario del consultorio dental)

/*
Lista else if:
    - Verificar horario del consultorio (de 7 am a 1 pm y de 2 pm a 5 pm)
    - Descanso de 1 pm a 2 pm
    - Entrada después de las 7 am. Salida después de las 5 pm. No se aceptan citas después de las 4:20

    - Determinar el primer bloque de horas de consulta 
    - Determinar bloque de descanso
    - Determinar segundo bloque de horas de consulta

// Saber a qué hora está abierto el horario
If - 	Si vas por la mañana (7 am - 12:20 pm)
		Si está abierto
Else if 	Si vas al mediodía (1 pm - 2 pm)
		Está cerrado por descanso para el doc
Else - 	Si vas por la tarde (2 pm - 4:20 pm)
		Sí está abierto
*/

let horario = prompt("Ingrese el horario, Mañana, Mediodía o Tarde");

if (horario == "mañana") {
	console.log("Está abierto, horario 7 am - 12:20 pm"); //12:20 última cita antes de comer)
} else if (horario == "mediodía") {
	console.log("Cerrado por horario de almuerzo, 1 pm - 2 pm");
} else {
	console.log("Está por cerrar el consultorio, horarios de 2 pm a 4:20 pm"); //4:20 😮
}



//switch (se elige especialidad y se muestra qué doctor atiende)
/*Lista:
-El paciente sabrá su especialidad
-El paciente quiere saber qué especialista le dará la consulta
*/

let especialistaPorTratamiento = parseInt(prompt("Elige una especialidad, 1. Extracción 2. Limpieza 3. Ortodoncia"));
//extraccion = 1;
//limpieza = 2;
//ortodoncia = 3;

switch (especialistaPorTratamiento){
	case 1:
	console.log("Para extracción se tendrá al Dr. Fulano");
	break;

	case 2:
	console.log("Para limpieza se tendrá a la Dra. Fulana");
	break;

	case 3:
	console.log("Para ortodoncia se tendrá a la Dra. Perengana");
	break;

	default:
	console.log("Elija una opción válida");
}
