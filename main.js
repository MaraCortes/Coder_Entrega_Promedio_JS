let alumnosAprobados = [];
let alumnosDesaprobados = [];


function crearCampoNotas(cantidadNotas) {
    let contenedorNotas = document.getElementById("divAgregarNotas");

    for (let i = 1; i <= cantidadNotas; i++) {

        const numeroNotas = document.createElement("input");
        numeroNotas.id = `Nota ${i}`;
        numeroNotas.type = "number";
        numeroNotas.placeholder = `Nota ${i}`;
        contenedorNotas.appendChild(numeroNotas);
        // contenedorNotas.appendChild(" ");
        if (cantidadNotas > 10) {
            alert("Debe ingresar hasta 10 notas por alumno");
            break;
        }

    }
}


//Aparecen los campos

document.getElementById("cantidadNotas").addEventListener("input", function () {
    let cantidadNotas = parseInt(this.value);
    if (!isNaN(cantidadNotas) && cantidadNotas > 0) {

        crearCampoNotas(cantidadNotas);
    }

});



function calcularPromedio() {

    let nombre = document.getElementById("nombre").value;
    if (!/^[a-zA-Z]+$/.test(nombre) || nombre == null) {

        alert("Ingresar un nombre válido");
        return

    }

    let apellido = document.getElementById("apellido").value;
    if (!/^[a-zA-Z]+$/.test(apellido) || apellido == null) {

        alert("Ingresar un apellido válido");
        return;

    }

    let cantidadNotas = parseInt(document.getElementById("cantidadNotas").value);


let sumaNotas = 0;

for (let x = 1; x <= cantidadNotas; x++) {
    let nota = parseFloat(document.getElementById(`Nota ${x}`).value);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert(`La nota ${x} no es válida. Debe ser entre 0 y 10.`);
        return;
    }

    sumaNotas += nota;

}


let promedio = sumaNotas / cantidadNotas;
 }

// let mensajeResultadoAlumno = document.getElementById("mensajeResultadoAlumno");
// mensajeResultadoAlumno.innerText = `El promedio de ${nombre} ${apellido} es ${promedio.toFixed(2)}`;
// mensajeResultadoAAlumno.innerText = `\n El alumno está aprobado`;

// if (promedio >= 6) {
    
//     alumnosAprobados.push(`${nombre} ${apellido}`);
   
//     for (a = 0; a < alumnosAprobados.length; a++);

// } else {
  
//     alumnosDesaprobados.push(`${nombre} ${apellido}`);
//     for (i = 0; i < alumnosDesaprobados.length; i++);
// }




// let continuar = true
// while (continuar == true) {

//     promedio()
//     continuar = confirm("Desea promediar a otro estudiante?");

// }

// if (alumnosAprobados == null || alumnosAprobados.length == 0){
//     alert ("No hay alumnos aprobados");

// } else{
//         alert ("Los alumnos aprobados son: " + a + " " + alumnosAprobados.join(", "));
//     }

//     if (alumnosDesaprobados == null || alumnosDesaprobados.length == 0){
//         alert ("No hay alumnos desaprobados");

//     } else {
//         alert ("Los alumnos desaprobados son: " + i + " " + alumnosDesaprobados.join(", "));
//     }
