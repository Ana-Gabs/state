const EstadoAlumno = require('./EstadoAlumno');

class EstadoGraduado extends EstadoAlumno {
    inscribir() {
        console.log("El alumno ya ha sido graduado, no puede inscribirse nuevamente.");
    }

    graduar() {
        console.log("El alumno ya ha sido graduado.");
    }

    obtenerEstado() {
        console.log("El alumno está graduado.");
    }
}

module.exports = EstadoGraduado;
