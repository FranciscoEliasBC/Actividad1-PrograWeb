let estudiantes = [];
function Agregar(){
    let nombre = document.getElementById("nombre").value.trim();
    let califi = document.getElementById("calificacion").value.trim();

    if (nombre === "" || califi === "") {
        alert("Por favor ingresa tanto el nombre como la calificación.");
        return;
    }

    let calificacion = parseFloat(califi);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert("Ingresa una calificación válida");
        return;
    }

    let nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(nuevoEstudiante);
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    alert(`¡Estudiante ${nombre} agregado csson éxito!`);
}
function Calcular(){
    let mejor = estudiantes[0];
    let peor = estudiantes[0];

    let sumaTotal = estudiantes.reduce((total, est) => total + est.calificacion, 0);
    let promedio = (sumaTotal / estudiantes.length).toFixed(2);

    estudiantes.forEach(estudiante => {
        if(estudiante.calificacion > mejor.calificacion){
            mejor = estudiante;
        }
        if(estudiante.calificacion < peor.calificacion){
            peor = estudiante;
        }
    });

    document.getElementById("promedio").value = promedio;
    document.getElementById("mayor").value = `${mejor.nombre}`;
    document.getElementById("menor").value = `${peor.nombre}`;
}