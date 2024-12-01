// alumno/Alumno.js
const EstadoEnEspera = require('./EstadoEnEspera');

class Alumno {
    constructor(nombre) {
        this.nombre = nombre;
        this.estado = new EstadoEnEspera(); // empieza en el estado de espera
    }

    setEstado(estado) {
        this.estado = estado;
    }

    inscribir() {
        this.estado.inscribir(this); // se inscribe, cambia de estado
    }

    graduar() {
        this.estado.graduar(this); // se gradúa, cambia de estado
    }

    obtenerEstado() {
        this.estado.obtenerEstado(); // muestra el estado actual del alumno
    }
}

module.exports = Alumno;
