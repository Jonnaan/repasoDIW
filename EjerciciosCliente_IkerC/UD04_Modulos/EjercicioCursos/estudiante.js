class Estudiante {
    #nombre;
    #edad;
    #cursos;

    constructor(nombre, edad) {
        if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error('El nombre no puede estar vacío');
        }
        if (!edad || typeof edad !== 'number' || edad <= 0) {
            throw new Error('La edad debe ser un número válido mayor que 0');
        }
        this.#nombre = nombre;
        this.#edad = edad;
        this.#cursos = [];
    }

    get Nombre() {
        return this.#nombre;
    }

    get Edad() {
        return this.#edad;
    }

    agregarCurso(curso) {
        if (!this.#cursos.includes(curso)) {
            this.#cursos.push(curso);
        }
    }

    mostrarTodosLosCursos() {
        this.#cursos.forEach(curso => {
            console.log(`Curso: ${curso}`);
        });
    }
}

export default Estudiante;
