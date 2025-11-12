let eleccion;
do {
  eleccion = prompt(
    "Elige un ejercicio:\n1. Parte entera y parte decimal \n2. Redondear \n3. Maximo de 2 Números \n4. Minimo de 2 Números\n5. Raiz Cuadrada\n6. Potencia\n7. Número Aleatorio\n8. Salir"
  );
  switch (eleccion) {
    case "1":
      var numero = prompt("Introduce un número decimal:");
      let parteEntera = Math.floor(numero);
      let parteDecimal = numero - parteEntera;
      alert("Parte entera: " + parteEntera + "\nParte decimal: " + parteDecimal);
      break;
    case "2":
      let opc = prompt("Que redondeo quieres hacer?\n1. Redondeo normal\n2. Redondeo hacia arriba\n3. Redondeo hacia abajo");
      var numero = prompt("¿Que numero quieres redondear?");
      switch (opc) {
        case "1":
          alert("Redondeo normal: " + Math.round(numero));
          break;
        case "2":
          alert("Redondeo hacia arriba: " + Math.ceil(numero));
          break;
        case "3":
          alert("Redondeo hacia abajo: " + Math.floor(numero));
          break;
        default:
          alert("Opción no válida");
          break;
      }
      break;
    case "3":
      var num1 = prompt("Introduce el primer número:");
      var num2 = prompt("Introduce el segundo número:");
      var elegir = Math.max(num1, num2);
      alert("El máximo es: " + elegir);
      break;
    case "4":
      var num1 = prompt("Introduce el primer número:");
      var num2 = prompt("Introduce el segundo número:");
      var elegir = Math.min(num1, num2);
      alert("El mínimo es: " + elegir);
      break;
    case "5":
      var numero = prompt("Introduce un número para calcular su raíz cuadrada:");
      if (numero < 0) {
        alert("No se puede calcular la raíz cuadrada de un número negativo.");
      } else {
        alert("La raíz cuadrada de " + numero + " es: " + Math.sqrt(numero));
      }
      break;
    case "6":
      var base = prompt("Introduce la base:");
      var exponente = prompt("Introduce el exponente:");
      alert(base + " elevado a " + exponente + " es: " + Math.pow(base, exponente));
      break;
    case "7":
      var randomNum = Math.random();
      alert("Número aleatorio entre 0 y 1: " + randomNum);
      break;
    case "8":
      alert("Saliendo...");
      break;
    default:
      alert("Opción no válida");
      break;
  }
} while (eleccion != "8");
