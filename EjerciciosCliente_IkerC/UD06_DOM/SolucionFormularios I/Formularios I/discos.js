class Disco {
    constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0, prestado = false) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = prestado;
    }

    // Getters y setters (excepto para prestado)
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // ... (similares para grupo, año y tipo)

    getLocalizacion() {
        return this.localizacion;
    }

    setLocalizacion(localizacion) {
        this.localizacion = localizacion;
    }

    // Método para incluir las cinco primeras propiedades a la vez
    setDatosDisco(nombre, grupo, año, tipo, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;   

    }

    // Método para cambiar el estado de prestado
    cambiarEstadoPrestamo() {
        this.prestado = !this.prestado;
    }

    // Método para mostrar la información del disco
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Grupo: ${this.grupo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Localización: ${this.localizacion}`);
        console.log(`Prestado: ${this.prestado}`);
    }
}

export default Disco;