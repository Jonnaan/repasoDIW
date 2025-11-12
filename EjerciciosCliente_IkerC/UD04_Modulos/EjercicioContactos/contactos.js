/* Array privado de contactos */

let contactos = [
    { nombre: "Iker", telefono: "123456789" },
    { nombre: "Maria", telefono: "987654321" },
    { nombre: "Juan", telefono: "456789123" }
];

/* Añadir un nuevo contacto */
function anadirContacto(nombre, telefono) {
    contactos.push({ nombre, telefono });
}

/* Listar todos los contactos */
function listarContactos() {
    return contactos;
}

/* Buscar un contacto por nombre */
function buscarContacto(nombre) {
    return contactos.find(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
}

export { anadirContacto, listarContactos, buscarContacto };
