let alumnosAprobados = [];
let alumnosDesaprobados = [];


function crearCampoNotas(cantidadNotas) {
    let contenedorNotas = document.getElementById("divAgregarNotas");  
    contenedorNotas.innerHTML = '';

    

    if (cantidadNotas > 10) {
        alert("Debe ingresar hasta 10 notas por alumno");
        return;
    }
    

    for (let i = 1; i <= cantidadNotas; i++) {    

        const numeroNotas = document.createElement("input");
        numeroNotas.id = `Nota ${i}`;
        numeroNotas.type = "number";
        numeroNotas.placeholder = `Nota ${i}`;
        contenedorNotas.appendChild(numeroNotas);     
        
    }        
        
}



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




let mensajePromedioAlumno = document.getElementById("mensajePromedioAlumno");
  mensajePromedioAlumno.innerText = `El promedio de ${nombre} ${apellido} es ${promedio.toFixed(2)}`;

  
  let mensajeResultadoAlumno= document.getElementById("mensajeResultadoAlumno"); 


 if (promedio >= 6){
    
           
    mensajeResultadoAlumno.innerText = "\n El alumno está aprobado";
    alumnosAprobados.push(`${nombre} ${apellido}`);
     
 } else {
         
    mensajeResultadoAlumno.innerText = "\n El alumno está desaprobado";
    alumnosDesaprobados.push(`${nombre} ${apellido}`); 
 }
}


let btn = document.getElementById("boton");
btn.addEventListener("click", calcularPromedio);





