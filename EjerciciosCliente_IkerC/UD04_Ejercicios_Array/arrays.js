function mostrarCantidadEnArray(array) {
    return "Cantidad de elementos en el array: " + array.length;
}

function mostrarElementosArray(array) {
    let resultado = "Elementos del array:\n";
    for (let i = 0; i < array.length; i++) {
        resultado += i + ": " + array[i] + "\n";
    }
    return resultado;
}
function mostrarElementosArrayInverso(array) {
    let copia = [...array].reverse();
    let resultado = "Elementos del array en orden inverso:\n";
    for (let i = 0; i < copia.length; i++) {
        resultado += i + ": " + copia[i] + "\n";
    }
    return resultado;
}

function mostrarElementosArrayOrdenados(array) {
    let copia = [...array].sort();
    let resultado = "Elementos del array ordenados alfabéticamente:\n";
    for (let i = 0; i < copia.length; i++) {
        resultado += i + ": " + copia[i] + "\n";
    }
    return resultado;
}

function añadirElementoAlPrincipioArray(array, elemento) {
    array.unshift(elemento);
    return "Elemento '" + elemento + "' añadido al principio del array.";
}

function añadirElementoAlFinalArray(array, elemento) {
    array.push(elemento);
    return "Elemento '" + elemento + "' añadido al final del array.";
}

function eliminarPrimerElementoArray(array) {
    let elementoEliminado = array.shift();
    return "Elemento '" + elementoEliminado + "' eliminado del principio del array.";
}

function eliminarUltimoElementoArray(array) {
    let elementoEliminado = array.pop();
    return "Elemento '" + elementoEliminado + "' eliminado del final del array.";
}

function mostrarPosicionArray(array, numero) {
    if (numero >= 0 && numero < array.length) {
        return "Elemento en posición " + numero + " = " + array[numero];
    } else {
        return "Posición fuera de rango.";
    }
}

function mostrarIntervaloArray(array, inicio, fin) {
    if (inicio >= 0 && fin < array.length && inicio <= fin) {
        return "Elementos en intervalo:\n" + array.slice(inicio, fin + 1).join(", ");
    } else {
        return "Intervalo inválido.";
    }
}

// ----------------------
// Ejercicio Paises
// ----------------------

let ArrayPaises = ["España", "Croacia", "Alemania", "Bielorusia", "Dubai"];

let eleccion = prompt(
    "¿Qué quieres hacer?\n" +
    "1. Mostrar número de países\n" +
    "2. Mostrar listado de países\n" +
    "3. Mostrar intervalo de países\n" +
    "4. Añadir un país\n" +
    "5. Borrar un país\n" +
    "6. Consultar un país"
);

switch (eleccion) {
    case "1":
        alert(mostrarCantidadEnArray(ArrayPaises));
        break;

    case "2":
        let orden = prompt("¿En qué orden quieres ver los países?\n1. Orden original\n2. Orden inverso\n3. Orden alfabético");
        if (orden == "1") {
            alert(mostrarElementosArray(ArrayPaises));
        } else if (orden == "2") {
            alert("Cambiado: " + mostrarElementosArrayInverso(ArrayPaises));
            alert("Original: " + mostrarElementosArray(ArrayPaises));
        } else if (orden == "3") {
            alert("Cambiado: " + mostrarElementosArrayOrdenados(ArrayPaises));
            alert("Original: " + mostrarElementosArray(ArrayPaises));
        } else {
            alert("Opción no válida");
        }
        break;

    case "3":
        let intervalo = prompt("Introduce el intervalo en formato inicio-fin (ejemplo: 1-3)");
        let partes = intervalo.split("-");
        let inicio = parseInt(partes[0]);
        let fin = parseInt(partes[1]);
        alert("Intervalo: " + inicio + " a " + fin);
        alert("Original: " + mostrarElementosArray(ArrayPaises));
        alert(mostrarIntervaloArray(ArrayPaises, inicio, fin));
        break;

    case "4":
        let nuevoPais = prompt("Introduce el nombre del nuevo país:");
        let posicion = prompt("¿Quieres añadirlo al principio o al final?\n1. Principio\n2. Final");
        if (posicion == "1") {
            alert(añadirElementoAlPrincipioArray(ArrayPaises, nuevoPais));
            alert(mostrarElementosArray(ArrayPaises));
        } else if (posicion == "2") {
            alert(añadirElementoAlFinalArray(ArrayPaises, nuevoPais));
            alert(mostrarElementosArray(ArrayPaises));
        } else {
            alert("Opción no válida");
        }
        break;

    case "5":
        let eliminarPosicion = prompt("¿Quieres borrar el primer o el último país?\n1. Primero\n2. Último");
        if (eliminarPosicion == "1") {
            alert(eliminarPrimerElementoArray(ArrayPaises));
            alert(mostrarElementosArray(ArrayPaises));
        } else if (eliminarPosicion == "2") {
            alert(eliminarUltimoElementoArray(ArrayPaises));
            alert(mostrarElementosArray(ArrayPaises));
        } else {
            alert("Opción no válida");
        }
        break;

    case "6":
        let consultarPor = prompt("¿Quieres consultar por posición o por nombre?\n1. Posición\n2. Nombre");
        if (consultarPor == "1") {
            let posicion = parseInt(prompt("Introduce la posición del país:"));
            alert(mostrarPosicionArray(ArrayPaises, posicion));
        } else if (consultarPor == "2") {
            let nombre = prompt("Introduce el nombre del país:");
            let posicion = ArrayPaises.indexOf(nombre);
            if (posicion !== -1) {
                alert(mostrarPosicionArray(ArrayPaises, posicion));
            } else {
                alert("País no encontrado");
            }
        } else {
            alert("Opción no válida");
        }
        break;

    default:
        alert("Opción no válida");
        break;
}
