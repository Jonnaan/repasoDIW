let eleccion = prompt(
  "Elige un ejercicio:\n1. Dias hasta nochevieja (Date) \n2. Cumpleaños en domingo (Date) \n3. Eleccion de formato de fecha (Date)\n4. Eleccion de formato de hora (Date)\n5. Calculadora pro (Math)\n6. Calculos del circulo (Math)\n7. Cambio de numero (Number)\n8. Nombre y Apellidos (String)\n9. Contraseña (String)"
);
switch (eleccion) {
  case "1":
    let dias = diasHastaNochevieja();
    alert("Días hasta Nochevieja: " + dias);
    break;
  case "2":
    let veces = cumpleDomingo();
    alert("Tu cumpleaños cae domingo: " + veces + " en los proximos 75 años");
    break;
  case "3":
    let elegir = eleccionFormato();
    alert("Tu formato queda asi: " + elegir);
    break;
  case "4":
    let hora = eleccionFormatoHora();
    alert("Tu formato queda asi: " + hora);
    break;
  case "5":
    calculadoraMath();
    break;
  case "6":
    circulo();
    break;
  case "7":
    cambioNumero();
    break;
  case "8":
    nombreApellido();
    break;
  case "9":
    password();
    break;
  default:
    alert("Opción no válida");
    break;
}

//Ejercicio 1 : Dias hasta Nochevieja
function diasHastaNochevieja() {
  let hoy = new Date();
  let nochevieja = new Date(hoy.getFullYear(), 11, 31); // 11 es diciembre
  let diff = nochevieja - hoy;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

//Ejercicio 2 : Cuantos de tus cumpleaños caen el domingo
function cumpleDomingo() {
  let mesCumple = prompt("¿Que mes cumples años?");
  let mes = parseInt(mesCumple) - 1;
  let diaCumple = prompt("¿Que día cumples años?");
  let dia = parseInt(diaCumple);

  let añoActual = new Date().getFullYear();
  let añoFinal = new Date(2100, 0, 1);
  let contador = 0;

  for (let i = 0; i < añoFinal.getFullYear() - añoActual; i++) {
    let fechaCumple = new Date(añoActual + i, mes, dia);
    // Si el día de la semana es 0 (domingo), se suma al contador
    if (fechaCumple.getDay() === 0) contador++;
  }
  return contador;
}

// Ejercicio 3 :
function eleccionFormato() {
  let opciones = prompt(
    "¿Que formato de fecha quieres tener?\n 1. 17/02/2016\n 2. Miércoles, 17 de febrero de 2016\n 3. Wednesday, February 17, 2016"
  );
  let fechaHoy = new Date();

  if (opciones == 1) {
    return fechaHoy.toLocaleDateString("es-ES");
  } else if (opciones == 2) {
    return fechaHoy.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else if (opciones == 3) {
    return fechaHoy.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else {
    return "Opción no válida";
  }
}

// Ejercicio 4 :
function eleccionFormatoHora() {
  let opciones = prompt(
    "¿Que formato de hora quieres tener?\n 1. 14:35:07 \n 2. 02:23PM o AM"
  );
  let horaActual = new Date();

  if (opciones == 1) {
    return horaActual.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } else if (opciones == 2) {
    return horaActual.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  } else {
    return "Opción no válida";
  }
}

// Ejercicio 5 : Calculadora
function calculadoraMath() {
  let opciones = prompt(
    "¿Que calculo quieres hacer?\n1. Potencia\n2. Raíz\n3. Redondo\n4. Trigonometria"
  );
  let resultado;
  switch (opciones) {
    case "1":
      let base = prompt("¿Que base quieres?");
      let exponente = prompt("¿Que exponente quieres?");
      resultado = Math.pow(base, exponente);
      alert("Este es tu resultado= " + resultado);
      break;
    case "2":
      let numero = prompt("¿La raíz de que numero quieres calcular?");
      if (numero < 0) {
        alert("No se puede un numero negativo");
      } else {
        resultado = Math.sqrt(numero);
        alert("Este es tu resultado= " + resultado);
      }
      break;
    case "3":
      let decimal = prompt("¿Que decimal quieres redondear?");
      alert(
        "Redondeo (round) = " +
          Math.round(decimal) +
          "\nRedondeo hacia arriba (ceil) = " +
          Math.ceil(decimal) +
          "\nRedondeo hacia abajo (floor) = " +
          Math.floor(decimal)
      );
      break;
    case "4":
      let angulo = prompt("Elige un angulo (360-0):");
      if (angulo < 0 || angulo > 360) {
        alert("Pon numeros válidos");
      } else {
        alert(
          "Seno: " +
            Math.sin(angulo) +
            "\nCoseno: " +
            Math.cos(angulo) +
            "\nTangente: " +
            Math.tan(angulo)
        );
      }
      break;
    default:
      alert("Opción no válida");
      break;
  }
}

// Ejercicio 6 : Circulo

function circulo() {
  let radio = prompt("¿Cuanto mide el radio del circulo?");
  if (radio < 0) {
    alert("No es válido");
  } else {
    let diametro = radio * 2;
    let perimetro = 2 * Math.PI * radio;
    let areaCirculo = Math.PI * Math.pow(radio, 2);
    let areaEsfera = 4 * Math.PI * Math.pow(radio, 2);
    let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);
    alert(
      "El valor del diámetro es: " +
        diametro +
        " cm\n" +
        "El valor del perímetro de la circunferencia es: " +
        perimetro +
        " cm\n" +
        "El valor del área del círculo es: " +
        areaCirculo +
        " cm²\n" +
        "El valor del área de la esfera es: " +
        areaEsfera +
        " cm²\n" +
        "El valor del volumen de la esfera es: " +
        volumenEsfera +
        " cm³"
    );
  }
}

// Ejercicio 7 : Numeros
function cambioNumero() {
  let numero = prompt("Dime un número entero");
  let num = Number(numero);
  alert(
    "Valor exponencial: " +
      num.toExponential() +
      "\nNúmero con 4 decimales: " +
      num.toFixed(4) + // 4 decimales
      "\nNúmero en binario: " +
      num.toString(2) + // binario
      "\nNúmero en octal: " +
      num.toString(8) + // octal
      "\nNúmero en hexadecimal: " +
      num.toString(16)
  ); // hexadecimal
}

// Ejercicio 8 : Nombre y Apellidos
function nombreApellido() {
  let nombre = prompt("Dime tu nombre y apellidos:");
  let contador = 0;
  for (let i = 0; i < nombre.length; i++) {
    // No contamos espacios
    if (nombre[i] !== " ") contador++;
  }
  let partes = nombre.split(" ");
  let nombreSolo = partes[0];
  let apellido1 = partes[1];
  let apellido2 = partes[2];
  let usuario1 = nombreSolo.charAt(0) + apellido1 + apellido2.charAt(0);
  let usuario2 =
    nombreSolo.slice(0, 3) + apellido1.slice(0, 3) + apellido2.slice(0, 3);
  alert(
    "Tu nombre y apellidos tienen " +
      contador +
      " letras\n" +
      "En mayúsculas: " +
      nombre.toUpperCase() +
      "\n" +
      "En minúsculas: " +
      nombre.toLowerCase() +
      "\n" +
      "Nombre: " +
      nombreSolo +
      "\n" +
      "Apellido 1: " +
      apellido1 +
      "\n" +
      "Apellido 2: " +
      apellido2 +
      "\n" +
      "Recomendacion de usuario: " +
      usuario1.toLowerCase() +
      "\n" +
      "Recomendacion de otro usuario: " +
      usuario2.toLowerCase()
  );
}

// Ejercicio 9 : Contraseña
function password() {
    let contraseña = prompt("Escribe una contraseña");
    if (contraseña.length < 8 || contraseña.length > 16) {
        alert("La contraseña no cumple el tamaño valido");
    } else {
        alert("Contraseña valida");
    }
}

//Ejercicio 10 - Window

let miVentana = null;

function abrirVentana() {
    miVentana = window.open(
        "../HTML/ventana.html", //abre un html externo
        "miVentana",
        "toolbar=no,location=no,menubar=no,resizable=no,width=400,height=300,left=500,top=500"
    );
}



function cerrarVentana() {
    if (miVentana && !miVentana.closed) {
        miVentana.close();
    } else {
        alert("La ventana ya está cerrada o no existe.");
    }
};

function moverVentana(dx, dy) {
    if (miVentana && !miVentana.closed) {
        miVentana.moveBy(dx, dy);
    } else {
        alert("La ventana no está abierta.");
    }
}

function moverVentanaA(x, y) {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(x, y);
    } else {
        alert("La ventana no está abierta.");
    }
}

function redimensionarVentana(dw, dh) {
    if (miVentana && !miVentana.closed) {
        miVentana.resizeBy(dw, dh);
    } else {
    alert("La ventana no está abierta.");
    }
}

function redimensionarVentanaA(w, h) {
    if (miVentana && !miVentana.closed) {
        miVentana.resizeTo(w, h);
    } else {
        alert("La ventana no está abierta.");
    }
}

function scrollVentanaArriba() {
    if (miVentana && !miVentana.closed) {
        miVentana.scrollTo(0, 0);
    } else {
        alert("La ventana no está abierta.");
    }
}

function scrollVentanaA(y) {
    if (miVentana && !miVentana.closed) {
        miVentana.scrollTo(0, y);
    } else {
        alert("La ventana no está abierta.");
    }
}
