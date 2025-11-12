// Ejercicio 1.1 -- funcion anonima

let cuadrado = function (num) {
    return num * num;
}

// Ejercicio 1.2 -- Ejecutar con numero "5"

console.log("Funcion anónima: " + cuadrado(5));

// Ejercicio 1.3 -- funcion autoinvocada

console.log("Funcion autoinvocada: "+(function (num) {
    return num * num;
})(5));

/******************************************************/

// Ejercicio 2.1 -- Función de Flecha

let funcionCuadrado = (num) => num*num;

// Ejercicio 2.2 -- Ejecutar con "8"
console.log("Funcion de Flecha: " + funcionCuadrado(8));

// Ejercicio 2.3 -- Si hay un solo parametro, se puede quitar el ()
// funcionCuadrado = num => num*num;

/******************************************************/

// Ejercicio 3.1 -- Funciones con valores por defecto

function porcentajes (numero, porcentaje=10){
    return numero * porcentaje / 100
}

// Ejercicio 3.2 // 3.3 -- Mostrar con y sin parametros
console.log("Pasando un parámetro (100): " + porcentajes(100));

console.log("Pasando dos parámetros (100 y 25): " + porcentajes(100,25));

/******************************************************/
// Ejercicio 4.1 -- Funcion REST
let sumatorio = 0;
function suma() {
    let sumatorio = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumatorio += arguments[i];
    }
    return sumatorio;
}

// Ejercicio 4.2 // 4.3 -- Mostrar con diferentes numeros
console.log("Funcion REST (3,2,1): "+ suma(3,2,1));
console.log("Funcion REST (1,2,3,10,20): "+ suma(1,2,3,10,20));

/******************************************************/
// Ejercicio 5.1 -- Combinar TODO
/*1. Crea una arrow function que acepte una lista de números y un parámetro opcional (valor por defecto: 1). La función debe multiplicar cada número por el parámetro opcional.
2. Usa el operador REST para aceptar cualquier cantidad de números como argumento. */

let funcionMulti = function(valor = 1, ...numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * valor);
    }
    return resultado;
};

console.log("Multi (2,1,2,3,4): "+funcionMulti(2, 1, 2, 3, 4)); // Multiplica por 2
console.log("Multi (5,6,7): "+funcionMulti(5, 6, 7));       // Multiplica por el valor por defecto (1)
console.log("Multi (): "+funcionMulti());             // No pasa números, devuelve []
console.log("Multi (3): "+funcionMulti(3));            // Multiplica 3 por el valor por defecto (1)