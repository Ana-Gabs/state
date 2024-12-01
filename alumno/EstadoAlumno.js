class EstadoAlumno {
    inscribir(alumno) {
        throw new Error("Método 'inscribir' debe ser implementado.");
    }

    graduar(alumno) {
        throw new Error("Método 'graduar' debe ser implementado.");
    }

    obtenerEstado() {
        throw new Error("Método 'obtenerEstado' debe ser implementado.");
    }
}

module.exports = EstadoAlumno;
