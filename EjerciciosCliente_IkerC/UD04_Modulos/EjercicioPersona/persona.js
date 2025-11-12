export default class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    get Nombre() {
        return this.nombre;
    }

    get Edad() {
        return this.edad;
    }
}