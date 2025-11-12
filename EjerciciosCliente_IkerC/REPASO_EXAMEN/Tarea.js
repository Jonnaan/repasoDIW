class Tarea {
constructor(id, texto, completada = false) {
    this.id = id;
    this.texto = texto;
    this.completada = completada;
}

//GETTERS
getId() {
    return this.id;
}
getTexto() {
    return this.texto;
}
getCompletada() {
    return this.completada;
}

//SETTERS
setTexto(nuevoTexto) {
    this.texto = nuevoTexto;
}
setCompletada(estado) {
    this.completada = estado;
}
setId(nuevoId) {
    this.id = nuevoId;
}

//MÉTODOS
marcarCompletada() {
    this.completada = true;
}

eliminar(tareas) {
    // Lógica para eliminar la tarea si es necesario
    const index = tareas.findIndex(tarea => tarea.getId() === this.id);
    if (index !== -1) {
        tareas.splice(index, 1);
    }
}

editar() {
    // Lógica para editar la tarea si es necesario
    const nuevoTexto = prompt('Ingrese el nuevo texto para la tarea:', this.texto);
    if (nuevoTexto !== null) {
        this.setTexto(nuevoTexto);
    }
}

toJSON() {
    return {
      id: this.id,
      texto: this.texto,
      completada: this.completada
    };
  }

  static fromJSON(data) {
    return new Tarea(
        data.id,
        data.texto,
        data.completada
    );
  }

}

export default Tarea;