// ======================= FUNCIONES ======================= //

function mostrarCantidadEnArray(array) {
    return "Cantidad de discos: " + array.length;
}

function mostrarElementosArray(array) {
    let resultado = "Listado de discos:\n";
    for (let i = 0; i < array.length; i++) {
        resultado += i + ":\n" + array[i].mostrarDisco() + "\n";
    }
    return resultado;
}

function mostrarElementosArrayInverso(array) {
    let copia = [...array].reverse();
    let resultado = "Discos en orden inverso:\n";
    for (let i = 0; i < copia.length; i++) {
        resultado += i + ":\n" + copia[i].mostrarDisco() + "\n";
    }
    return resultado;
}

function mostrarElementosArrayOrdenados(array) {
    let copia = [...array].sort((a, b) => a.Nombre.localeCompare(b.Nombre));
    let resultado = "Discos ordenados alfabéticamente:\n";
    for (let i = 0; i < copia.length; i++) {
        resultado += i + ":\n" + copia[i].mostrarDisco() + "\n";
    }
    return resultado;
}

function añadirElementoAlPrincipioArray(array, disco) {
    array.unshift(disco);
    return "Disco '" + disco.Nombre + "' añadido al principio.";
}

function añadirElementoAlFinalArray(array, disco) {
    array.push(disco);
    return "Disco '" + disco.Nombre + "' añadido al final.";
}

function eliminarPrimerElementoArray(array) {
    let discoEliminado = array.shift();
    return "Disco '" + (discoEliminado ? discoEliminado.Nombre : "Ninguno") + "' eliminado del principio.";
}

function eliminarUltimoElementoArray(array) {
    let discoEliminado = array.pop();
    return "Disco '" + (discoEliminado ? discoEliminado.Nombre : "Ninguno") + "' eliminado del final.";
}

function mostrarPosicionArray(array, numero) {
    if (numero >= 0 && numero < array.length) {
        return "Disco en posición " + numero + ":\n" + array[numero].mostrarDisco();
    } else {
        return "Posición fuera de rango.";
    }
}

function mostrarIntervaloArray(array, inicio, fin) {
    if (inicio >= 0 && fin < array.length && inicio <= fin) {
        let resultado = "Discos en intervalo " + inicio + "-" + fin + ":\n";
        for (let i = inicio; i <= fin; i++) {
            resultado += i + ":\n" + array[i].mostrarDisco() + "\n";
        }
        return resultado;
    } else {
        return "Intervalo inválido.";
    }
}

// ======================= ARRAY DE DISCOS ======================= //
let arrayDiscos = [];

// ======================= MENÚ PRINCIPAL ======================= //
let salir = false;

while (!salir) {
    let eleccion = prompt(
        "¿Qué quieres hacer?\n" +
        "1. Mostrar número de discos\n" +
        "2. Mostrar listado de discos\n" +
        "3. Mostrar intervalo de discos\n" +
        "4. Añadir un disco\n" +
        "5. Borrar un disco\n" +
        "6. Consultar un disco\n" +
        "7. Salir"
    );

    switch (eleccion) {
        case "1":
            alert(mostrarCantidadEnArray(arrayDiscos));
            break;

        case "2":
            let orden = prompt("¿En qué orden quieres ver los discos?\n1. Original\n2. Inverso\n3. Alfabético");
            if (orden == "1") {
                alert(mostrarElementosArray(arrayDiscos));
            } else if (orden == "2") {
                alert("Cambiado:\n" + mostrarElementosArrayInverso(arrayDiscos));
                alert("Original:\n" + mostrarElementosArray(arrayDiscos));
            } else if (orden == "3") {
                alert("Cambiado:\n" + mostrarElementosArrayOrdenados(arrayDiscos));
                alert("Original:\n" + mostrarElementosArray(arrayDiscos));
            } else {
                alert("Opción no válida");
            }
            break;

        case "3":
            let intervalo = prompt("Introduce el intervalo en formato inicio-fin (ejemplo: 0-2)");
            let partes = intervalo.split("-");
            let inicio = parseInt(partes[0]);
            let fin = parseInt(partes[1]);
            alert(mostrarIntervaloArray(arrayDiscos, inicio, fin));
            break;

        case "4":
            let nombre = prompt("Introduce el nombre del disco:");
            let grupo = prompt("Introduce el grupo o artista:");
            let año = prompt("Introduce el año:");
            let tipo = prompt("Introduce el tipo (Vinilo, CD, etc.):");
            let localizacion = prompt("Introduce la localización:");
            let nuevoDisco = new Disco();
            nuevoDisco.incluirDatos(nombre, grupo, año, tipo, localizacion);

            let posicion = prompt("¿Dónde quieres añadirlo?\n1. Principio\n2. Final");
            if (posicion == "1") {
                alert(añadirElementoAlPrincipioArray(arrayDiscos, nuevoDisco));
            } else if (posicion == "2") {
                alert(añadirElementoAlFinalArray(arrayDiscos, nuevoDisco));
            } else {
                alert("Opción no válida");
            }
            alert(mostrarElementosArray(arrayDiscos));
            break;

        case "5":
            let eliminarPosicion = prompt("¿Qué disco quieres borrar?\n1. Primero\n2. Último");
            if (eliminarPosicion == "1") {
                alert(eliminarPrimerElementoArray(arrayDiscos));
            } else if (eliminarPosicion == "2") {
                alert(eliminarUltimoElementoArray(arrayDiscos));
            } else {
                alert("Opción no válida");
            }
            alert(mostrarElementosArray(arrayDiscos));
            break;

        case "6":
            let consultarPor = prompt("¿Cómo quieres consultar?\n1. Por posición\n2. Por nombre");
            if (consultarPor == "1") {
                let pos = parseInt(prompt("Introduce la posición:"));
                alert(mostrarPosicionArray(arrayDiscos, pos));
            } else if (consultarPor == "2") {
                let nombreBuscado = prompt("Introduce el nombre del disco:");
                let posicionEncontrada = arrayDiscos.findIndex(disco => disco.Nombre === nombreBuscado);
                if (posicionEncontrada !== -1) {
                    alert("Encontrado:\n" + arrayDiscos[posicionEncontrada].mostrarDisco());
                } else {
                    alert("Disco no encontrado");
                }
            } else {
                alert("Opción no válida");
            }
            break;

        case "7":
            salir = true;
            alert("Saliendo del programa...");
            break;

        default:
            alert("Opción no válida");
            break;
    }
}
