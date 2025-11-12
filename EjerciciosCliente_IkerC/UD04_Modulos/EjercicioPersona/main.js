import Persona from "./persona.js";

const persona1 = new Persona("JonAnder", 30);
const persona2 = new Persona("Iker", 25);

console.log("Lista de personas:");
console.log(persona1);
console.log(persona2);
alert(`1. Nombre: ${persona1.Nombre}, Edad: ${persona1.Edad}\n2. Nombre: ${persona2.Nombre}, Edad: ${persona2.Edad}`);
