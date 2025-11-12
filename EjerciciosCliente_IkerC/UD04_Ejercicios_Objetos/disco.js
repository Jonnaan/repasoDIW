class Disco {
    constructor() {
        this.nombre = "";
        this.grupo = "";
        this.año = "";
        this.tipo = "";
        this.localizacion = 0;
        this.prestado = false;
    }

    /* GETTERS */
    get Nombre() { return this.nombre; }
    get Grupo() { return this.grupo; }
    get Año() { return this.año; }
    get Tipo() { return this.tipo; }
    get Localizacion() { return this.localizacion; }

    /* SETTERS */
    set Nombre(nombre) { this.nombre = nombre; }
    set Grupo(grupo) { this.grupo = grupo; }
    set Año(año) { this.año = año; }
    set Tipo(tipo) { this.tipo = tipo; }
    set Localizacion(localizacion) { this.localizacion = localizacion; }

    /* MÉTODOS */

    // Incluir las 5 primeras propiedades de golpe
    incluirDatos(nombre, grupo, año, tipo, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false; 
    }

    // Cambiar el estado de prestado (true <-> false)
    cambiarPrestado() {
        this.prestado = !this.prestado;
    }

    // Mostrar toda la información de un disco
    mostrarDisco() {
        return `
        Nombre: ${this.nombre}
        Grupo: ${this.grupo}
        Año: ${this.año}
        Tipo: ${this.tipo}
        Localización: ${this.localizacion}
        Prestado: ${this.prestado ? "Sí" : "No"}
        `;
    }
}

