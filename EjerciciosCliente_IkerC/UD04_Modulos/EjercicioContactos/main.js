import { anadirContacto,buscarContacto,listarContactos } from "./contactos.js";
console.log("JonAnder añadido");
anadirContacto("JonAnder", "123456789");

console.log("Lista de contactos:");
console.log(listarContactos());

console.log("Buscar contacto 'Iker':");
console.log(buscarContacto("Iker"));
