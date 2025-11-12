class Instituto {
    #nombre;
    #estudiantes;
    #cursos;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#estudiantes = [];
        this.#cursos = [];
    }

    agregarCurso(curso) {
        if (!this.#cursos.includes(curso)) {
            this.#cursos.push(curso);
        }
    }

    inscribirEstudianteEnCurso(estudiante, curso) {
        if (!this.#estudiantes.includes(estudiante)) {
            this.#estudiantes.push(estudiante);
        }

        if (this.#cursos.includes(curso)) {
            curso.reducirCupo();
            estudiante.agregarCurso(curso.NombreCurso);
        } else {
            console.log(`El curso ${curso.NombreCurso} no está en el instituto.`);
        }
    }

    mostrarEstudiantes() {
        this.#estudiantes.forEach(estudiante => {
            console.log(`Estudiante: ${estudiante.Nombre}, Edad: ${estudiante.Edad}`);
            estudiante.mostrarTodosLosCursos();
        });
    }
}

export default Instituto;
