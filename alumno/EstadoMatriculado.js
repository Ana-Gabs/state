const EstadoAlumno = require('./EstadoAlumno');
const EstadoGraduado = require('./EstadoGraduado');

class EstadoMatriculado extends EstadoAlumno {
    inscribir() {
        console.log("El alumno ya está matriculado.");
    }

    graduar(alumno) {
        console.log("El alumno ha completado los estudios y ahora se gradúa.");
        alumno.setEstado(new EstadoGraduado()); // cambia el estado a "Graduado"
    }

    obtenerEstado() {
        console.log("El alumno está matriculado.");
    }
}

module.exports = EstadoMatriculado;
