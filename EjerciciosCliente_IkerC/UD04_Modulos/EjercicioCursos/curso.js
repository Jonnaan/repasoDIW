class Curso {
    #nombreCurso;
    #cupos;

    constructor(nombreCurso, cupos) {
        this.#nombreCurso = nombreCurso;
        this.#cupos = cupos;
    }

    get NombreCurso() {
        return this.#nombreCurso;
    }

    reducirCupo() {
        if (this.#cupos > 0) {
            this.#cupos--;
        } else {
            console.log("No hay cupos disponibles");
        }
    }
}

export default Curso;