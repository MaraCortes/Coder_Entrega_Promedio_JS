let alumnosAprobados = [];
let alumnosDesaprobados = [];

function promedio() {

    let nombre = prompt("Ingrese el nombre del alumno");
    while (!/^[a-zA-Z]+$/.test(nombre) || nombre == null) {


        nombre = prompt("Ingrese nuevamente el nombre del alumno");

    }

    let apellido = prompt("Ingrese el apellido del alumno");
    while (!/^[a-zA-Z]+$/.test(apelido) || apellido == null) {

        alert("El apellido ingresado no es valido");
        apellido = prompt("Ingrese nuevamente el apellido del alumno");

    }

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))
while (isNaN(cantidadNotas) || cantidadNotas <= 0){
    cantidadNOtas = parseInt(prompt("Ingrese un número válido mayor que 0, para la cantidad de notas"));
    
}

let sumaNotas = 0;

for (x=1; x <= cantidadNotas; x++){

    let nota = parseFloat(prompt("Ingrese la nota" + x + "de" + nombre + " " + apellido));

    while(isNaN(nota) || nota < 0 || nota > 10){
        nota = parseFloat(prompt("Ingrese una nota entre 0 y 10 para la nota" + x + " de " + nombre + " " + apellido));

    }

    sumaNotas += nota; 

}

let promedio = sumaNotas / cantidadNotas;

alert ("El promedio de" + nombre + " " + apellido + "es" + promedio.toFixed(2));

if (promedio >= 6){

    alert ("El alumno está aprobado");
    let IdAlumnoAprobado = nombre + " " + apellido;
    alumnosAprobados.push(IdAlumnoAprobado);

    for( a = 0; a < alumnosAprobados.length; a++);   

}else {

    alert ("El alumno está desaprobado");
    let IdAlumnoDesaprobado = nombre + " " + apellido;
    alumnosDesaprobados.push(IdAlumnoDesaprobado);

    for(i = 0; i < alumnosDesaprobados.length; i++);
}

}


let continuar = true
while (continuar == true){

    promedio()
    continuar = confirm ("Desea promediar a otro estudiante?");

}

if (alumnosAprobados == null || alumnosAprobados.length == 0){
    alert ("No hay alumnos aprobados");

} else{
        alert ("Los alumnos aprobados son:" + a + " " + alumnosAprobados.join(", "));
    }

    if (alumnosDesaprobados == nul || alumnosDesaprobados.length == 0){
        alert ("No hay alumnos desaprobados");

    } else {
        alert ("Los alumnos aprobados son:" + i + " " + alumnosDesaprobados.join(", "));
    }
