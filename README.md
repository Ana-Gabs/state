## Proyecto de Gestion de Alumno con el patron State en Node.js
Este proyecto implementa el **patron de diseño State** en Node.js, permitiendo gestionar el estado de un Alumno en su ciclo academico. Dependiendo de su situacion, el alumno puede estar en diferentes estados: En espera, Matriculado, y Graduado. El patron State facilita el manejo de estos estados sin tener que modificar la clase principal del alumno.

## Estructura del Proyecto

│   index.js                 # Punto de entrada 
│   package-lock.json        # Archivo de dependencias
│   package.json             # Archivo de configuracion de dependencias
│   README.md                # Documentacion del proyecto
│
└───alumno                   # Clases principales del sistema de gestion de alumno
        Alumno.js            # Representa a un alumno con su estado
        EstadoAlumno.js      # Interfaz de los estados del alumno
        EstadoEnEspera.js    # Estado: En espera
        EstadoGraduado.js    # Estado: Graduado
        EstadoMatriculado.js # Estado: Matriculado
        ServicioAlumno.js    # Servicio que gestiona el flujo de ejecucion del programa



## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de ejecucion
Estado inicial del alumno:
El alumno está en espera.
El alumno ha sido matriculado.

Estado después de la inscripcion:
El alumno está matriculado.
El alumno ha completado los estudios y ahora se gradúa.

Estado después de la graduacion:
El alumno está graduado.

## Clases principales y metodos
1. Clase Alumno (alumno/Alumno.js) --> Representa al alumno y gestiona su estado.
**Metodos principales**
    1. setEstado(estado) --> Establece un nuevo estado para el alumno.
    2. inscribir() --> Metodos para inscribir al alumno y cambiar su estado a "Matriculado".
    3. graduar() --> Metodos para graduar al alumno y cambiar su estado a "Graduado".
    4. obtenerEstado() --> Muestra el estado actual del alumno.
2. Clase EstadoAlumno (alumno/EstadoAlumno.js) --> Interfaz base para los estados del alumno.
**Metodos principales**
    1. inscribir(alumno) --> Metodos para inscribir al alumno.
    2. graduar(alumno) --> Metodos para graduar al alumno.
    3. obtenerEstado() --> Metodos para obtener la descripcion del estado actual.
3. Clase EstadoEnEspera (alumno/EstadoEnEspera.js) --> Representa el estado "En espera" del alumno.
**Metodos principales**
    1. inscribir(alumno) --> El alumno se matricula, cambia al estado "Matriculado".
    2. graduar() --> No se puede graduar mientras el alumno esté en espera.
    3. obtenerEstado() --> Muestra el estado "En espera".
4. Clase EstadoMatriculado (alumno/EstadoMatriculado.js) --> Representa el estado "Matriculado" del alumno.
**Metodos principales**
    1. inscribir() --> El alumno ya está matriculado, no se puede matricular nuevamente.
    2. graduar(alumno) --> El alumno pasa al estado "Graduado".
    3. obtenerEstado() --> Muestra el estado "Matriculado".
5. Clase EstadoGraduado (alumno/EstadoGraduado.js) --> Representa el estado "Graduado" del alumno.
**Metodos principales**
    1. inscribir() --> El alumno ya está graduado, no se puede inscribir nuevamente.
    1. graduar() --> El alumno ya esta graduado, no se puede graduar nuevamente.
    3. obtenerEstado() --> Muestra el estado "Graduado".
6. Clase ServicioAlumno (alumno/ServicioAlumno.js) --> Gestiona el flujo de ejecucion del programa.
**Metodos principales**
    1. ejecutar() --> Establece los estados, realiza las transiciones entre ellos y muestra los cambios de estado en la consola.

## Implementacion del patron Observer
El patron State permite gestionar el comportamiento de un objeto (en este caso, el Alumno) en diferentes estados. En este proyecto, un Alumno puede estar en varios estados: En espera, Matriculado, y Graduado. Cada uno de estos estados tiene comportamientos diferentes, lo que se refleja en metodos especificos como inscribir y graduar.
El patron State facilita la transicion entre estos estados sin necesidad de modificar el objeto Alumno directamente, haciendo que el codigo sea más flexible y facil de mantener. En este ejemplo, cada estado (como EstadoEnEspera, EstadoMatriculado, EstadoGraduado) implementa la interfaz EstadoAlumno y define su propio comportamiento.