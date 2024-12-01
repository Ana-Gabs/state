const Alumno = require('./Alumno');

class ServicioAlumno {
    static ejecutar() {
        const alumno = new Alumno("Juan Pérez");

        console.log("Estado inicial del alumno:");
        alumno.obtenerEstado(); // estado inicial (En espera)

        // cambia el estado a "Matriculado"
        alumno.inscribir();

        console.log("\nEstado después de la inscripción:");
        alumno.obtenerEstado(); // el estado "Matriculado"

        // cambia el estado a "Graduado"
        alumno.graduar();

        console.log("\nEstado después de la graduación:");
        alumno.obtenerEstado(); // muestra el estado "Graduado"
    }
}

module.exports = ServicioAlumno;
