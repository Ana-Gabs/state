const EstadoAlumno = require('./EstadoAlumno');
const EstadoMatriculado = require('./EstadoMatriculado');

class EstadoEnEspera extends EstadoAlumno {
    inscribir(alumno) {
        console.log("El alumno ha sido matriculado.");
        alumno.setEstado(new EstadoMatriculado()); // cambia el estado a "Matriculado"
    }

    graduar() {
        console.log("El alumno no puede ser graduado sin estar matriculado.");
    }

    obtenerEstado() {
        console.log("El alumno está en espera.");
    }
}

module.exports = EstadoEnEspera;
