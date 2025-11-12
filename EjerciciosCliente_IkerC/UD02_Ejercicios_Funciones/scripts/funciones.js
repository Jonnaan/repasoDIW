// Ejercicio 1
function rangoPrompt() {
    let numero1 = parseInt(prompt("Introduce el primer número:"));
    let numero2 = parseInt(prompt("Introduce el segundo número:"));
    mostrarRango(numero1, numero2);
}

function mostrarRango(a, b) {
    let inicio = Math.min(a, b);
    let fin = Math.max(a, b);
    let resultado = "";
    for (let i = inicio; i <= fin; i++) {
        resultado += i + ", ";
    }
    document.getElementById("resultado").innerHTML = "Resultado del Ejercicio 1: <br>" + resultado;
}

// Ejercicio 2
function ordenPrompt() {
    let prompt1 = parseInt(prompt("Introduce el primer numero: "));
    let prompt2 = parseInt(prompt("Introduce el segundo numero: "));
    let prompt3 = parseInt(prompt("Introduce el tercer numero: "));
    mostrarOrden(prompt1,prompt2,prompt3);
}

function mostrarOrden(a, b, c) {
    let primero, segundo, tercero;
    if (a <= b && a <= c) {
        primero = a;
        if (b <= c) {
            segundo = b;
            tercero = c;
        } else {
            segundo = c;
            tercero = b;
        }
    } else if (b <= a && b <= c) {
        primero = b;
        if (a <= c) {
            segundo = a;
            tercero = c;
        } else {
            segundo = c;
            tercero = a;
        }
    } else {
        primero = c;
        if (a <= b) {
            segundo = a;
            tercero = b;
        } else {
            segundo = b;
            tercero = a;
        }
    }

    document.getElementById("resultado").innerHTML = 
        "Ejercicio 2: <br> El orden es " + primero + " < " + segundo + " < " + tercero;
}

// Ejercicio 3
function perimetroPrompt() {
    let lado;
    while (true) {
        lado = prompt("Introduce un lado del cuadrado:");
        if (lado === null)
        break; // Sale si al cancelar
        lado = parseFloat(lado);
        calcularPerimetro(lado);
        
    }
}

function calcularPerimetro(lado) {
    let perimetro = 4 * lado;
    alert("El perímetro del cuadrado es: " + perimetro);
    document.getElementById("resultado").innerHTML = "Ejercicio 3: <br> El último Perímetro es de " + perimetro;
}

// Ejercicio 4
function menuPrompt() {
    let opcion;
    while (true) {
    opcion = prompt("Menú de opciones:\n1.- Calcular área del Cuadrado\n2.- Calcular área del círculo \n3.- Calcular área del triangulo \n4.- Salir\nElige una opción (1 - 4):");
    if (opcion === null || opcion === "4") {
        break;
    }
    switch (opcion) {
        case "1":
            let lado = parseFloat(prompt("Introduce el lado del cuadrado:"));
            areaCuadrado(lado);
            break;
        case "2":
            let radio = parseFloat(prompt("Introduce el radio del círculo:"));
            areaCirculo(radio);
            break;
        case "3":
            let base = parseFloat(prompt("Introduce la base del triángulo:"));
            let altura = parseFloat(prompt("Introduce la altura del triángulo:"));
            areaTriangulo(base, altura);
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción entre 1 y 4.");
            break;
    }
    
    }

}

function areaCuadrado(lado) {
    let area = lado * lado;
    if (isNaN(area)) {
    return;
    }
    alert("El área del cuadrado es: " + area);
}

function areaCirculo(radio) {
    let area = Math.PI * radio * radio;
    if (isNaN(area)) {
    return;
    }
    alert("El área del círculo es: " + area.toFixed(2));
}

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    if (isNaN(area)) {
    return;
    }
    alert("El área del triángulo es: " + area);
}

// Ejercicio 5

function operadorPrompt() {
    while (true) {
        let operador = prompt("Elige qué operación hacer: + , - , x , / (Escribe el operador):");
        if (operador === null || operador != "+" && operador != "-" && operador != "x" && operador != "X" && operador != "/") {
            alert("Esa opción no es válida");
            break;
        }
            
        let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));
        let resultado;
        switch (operador) {
            case "+":
                resultado = num1 + num2;
                alert("La suma es: " + resultado);
                break;
            case "-":
                resultado = num1 - num2;
                alert("La resta es: " + resultado);
                break;
            case "x":
            case "X":
                resultado = num1 * num2;
                alert("La multiplicación es: " + resultado);
                break;
            case "/":
                if (num2 === 0) {
                    alert("No se puede dividir por cero");
                } else {
                    resultado = num1 / num2;
                    alert("La división es: " + resultado);
                }
                break;
            default:
                alert("Por favor, elige una opción mostrada");
                break;
        }
    }
}

// Ejercicio 6
function dniPrompt() {
    let dni;
    while (true) {
        dni = prompt("Introduce tu DNI (Ejemplo: 00000000A, o Cancelar para salir):");
        if (dni === null) {
            break; // Sale si se cancela
        }
        if (validarDNI(dni)) {
            alert("El DNI es válido");
        } else {
            alert("El DNI no es válido");
        }
    }
}

// Valida el formato y la letra del DNI español (IA)
function validarDNI(dni) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // Letras válidas
    let dniCalc = /^(\d{1,8})([A-Za-z])$/;  // Expresión regular para formato DNI
    let igual = dni.match(dniCalc);         // Comprueba si el DNI tiene el formato correcto
    if (!igual) {
        return false;                       // Formato incorrecto
    }
    let numero = parseInt(igual[1], 10);    // Extrae el número
    let letra = igual[2].toUpperCase();     // Extrae la letra y la pone en mayúsculas
    let letraCorrecta = letras.charAt(numero % 23); // Calcula la letra correcta
    return letra === letraCorrecta;          // Devuelve true si la letra es correcta
}

// Ejercicio 7
function textPrompt() {
    let texto = prompt("Introduce un texto (Cancelar para salir):");
    if (texto === null) {
        return;
    }
    let resultado = comprobarTexto(texto);
    document.getElementById("resultado").innerHTML = "Ejercicio 7: <br> El texto enviado: \"" + texto + "\"<br> Resultado: " + resultado;
    alert("El texto es: " + resultado);
}

function comprobarTexto(texto) {
    if (texto === "") {
        return "Texto vacío";
    }
    if (texto === texto.toUpperCase()) {
        return "Texto en mayúsculas";
    }
    if (texto === texto.toLowerCase()) {
        return "Texto en minúsculas";
    }
    return "Texto en mezcla de mayúsculas y minúsculas";
}

// Ejercicio 8
function palindromoPrompt() {
    let texto = prompt("Introduce un texto para comprobar:");
    if (texto === null) {
        return;
    }
    let esPalindromo = comprobarPalindromo(texto);
    if (esPalindromo) {
        alert("El texto es un palíndromo");
        document.getElementById("resultado").innerHTML = "Ejercicio 8: <br> El texto \"" + texto + "\" es un palíndromo.";
    } else {
        alert("El texto no es un palíndromo");
        document.getElementById("resultado").innerHTML = "Ejercicio 8: <br> El texto \"" + texto + "\" no es un palíndromo.";
    }
}

function comprobarPalindromo(texto) {
    let textoLimpio = texto.replace(/[\W_]/g, '').toLowerCase(); // Elimina espacios y signos de puntuación, y pasa a minúsculas
    let textoReverso = textoLimpio.split('').reverse().join(''); // Invierte el texto
    return textoLimpio === textoReverso;
}