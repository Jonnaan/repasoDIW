import Disco from "./discos.js";
let disco1 = new Disco("testA", "hola", "0", "rock", "aqui");
let disco2 = new Disco("testB", "hola", "0", "rock", "aqui");
let discos = [disco1, disco2];

function mostrarNumeroDiscos() {
    alert("El número de discos es: " + discos.length);
}

function mostrarTodosLosElementosDelArray() {
    let ardiscos = [];
    for (let i = 0; i < discos.length; i++) {
         ardiscos[i] = discos[i].getNombre();
    }
    alert("El número de discos es: " + ardiscos.toString());
}

function mostrarTodosLosElementosDelInverso() {
    let ardiscos = [];
    for (let i = 0; i < discos.length; i++) {
         ardiscos[i] = discos[i].getNombre();
    }
    alert("El número de discos es: " + ardiscos.slice().reverse());
}

function mostrarTodosLosElementosAlfa() {
    let ardiscos = [];
    for (let i = 0; i < discos.length; i++) {
         ardiscos[i] = discos[i].getNombre();
    }
    alert("El orden de discos es: " + ardiscos.slice().sort());
}

function mostrarIntervaloDiscos(inicio, fin) {
    let ardiscos = [];
    for (let i = 0; i < discos.length; i++) {
         ardiscos[i] = discos[i].getNombre();
    }
    let subconjunto = ardiscos.slice(inicio - 1, fin);
    alert("Los discos en el intervalo son:\n" + subconjunto.join(", "));
}

function añadirPaisPrincipio(disco) {
    discos.unshift(disco);
    alert("Se ha añadido el disco " + disco);
}
function añadirPaisFinal(disco) {
    discos.push(disco);
    alert("Se ha añadido el disco " + disco);
}

function borrarPaisPrincipio() {
    let paisBorrado = discos.shift();
    alert("Se ha borrado el disco " + paisBorrado);
}
function borrarPaisFinal() {
    let paisBorrado = discos.pop();
    alert("Se ha borrado el disco " + paisBorrado);
}

function consultarPaisPorPosicion(posicion) {
    let disco = discos[posicion - 1];
    alert("El disco en la posición " + posicion + " es: " + disco);
}

function consultarPosicionPais(disco) {
    let posicion = discos.indexOf(disco) + 1;
    if (posicion > 0) {
        alert("El disco " + disco + " se encuentra en la posición " + posicion);
    } else {
        alert("El disco " + disco + " no se encuentra en la lista");
    }
}

function iniciar() {
    let opcion = prompt("Opciones:\n1. Mostrar número de discos\n2. Mostrar listado de discos\n3. Mostrar un intervalo de discos\n4. Añadir un disco\n5. Borrar un disco\n6. Consultar un disco");
    opcion = parseInt(opcion);
    switch (opcion) {
        case 1:
            mostrarNumeroDiscos();
            break;
        case 2:
            busqueda();
            break;
        case 3:
            mostrarIntervaloDiscos(parseInt(prompt("Inserte el numero de comienzo del intrevaluo")), parseInt(prompt("Inserte el numero de fin del intrevaluo")))
            break;
        case 4:
            crear();
            break;
        case 5:
            borrar();
            break;
        case 6:
            consultar();
            break;

    }
}

function busqueda() {
    let opcion = prompt("Opciones:\n1. Discos normal\n2. Discos al reves\n3. Discos alphabeticamente ordenados");
    opcion = parseInt(opcion);
    switch (opcion) {
        case 1:
            mostrarTodosLosElementosDelArray();
            break;
        case 2:
            mostrarTodosLosElementosDelInverso();
            break;
        case 3:
            mostrarTodosLosElementosAlfa();
            break;
    }
}

function crear() {
    let opcion = prompt("Opciones:\n1. Principio\n2. Final");
    opcion = parseInt(opcion);
    let nombre = prompt("Dame el nombre del disco");
    let grupo = prompt("Dame el nombre del grupo del disco");
    let año = prompt("Dame el año de salida del disco");
    let tipo = prompt("Dame el tipo de disco");
    let localizacion = prompt("Dame la ubicación del disco");
    let disco = new Disco(nombre, grupo, año, tipo, localizacion);
    switch (opcion) {
        case 1:
            añadirPaisPrincipio(disco);
            break;
        case 2:
            añadirPaisFinal(disco);
            break;
    }
}

function borrar() {
    let opcion = prompt("Opciones:\n1. Principio\n2. Final");
    opcion = parseInt(opcion);
    switch (opcion) {
        case 1:
            borrarPaisPrincipio();
            break;
        case 2:
            borrarPaisFinal();
            break;
    }
}

function consultar() {
    let opcion = prompt("Opciones:\n1. Nombre\n2. Numero");
    opcion = parseInt(opcion);
    let disco;
    switch (opcion) {
        case 1:
            disco = prompt("Dame el nombre del disco");
            consultarPosicionPais(disco);
            break;
        case 2:
            disco = prompt("Dame el numero del disco");
            disco = parseInt(disco);
            consultarPaisPorPosicion(disco);
            break;
    }
}



iniciar();
