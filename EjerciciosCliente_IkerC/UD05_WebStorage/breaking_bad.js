"use strict";

/* =========================================
   Estado de validación (solo booleanos)
   ========================================= */
const estadoValidacion = {
  fecha_creacion: false,
  cocinero: false,
  destinatario: false,
  gramos: false,
  composicion: false,
  num_cuenta: false,
};

/* Orden de los campos para recorrer sin métodos modernos */
const ordenCampos = [
  "fecha_creacion",
  "cocinero",
  "destinatario",
  "gramos",
  "composicion",
  "num_cuenta",
];

/* =========================================
   Inicio
   ========================================= */
document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("formulario");

  // Crear elementos para contador y reinicio
  const divContador = document.createElement("div");
  divContador.innerHTML = `
    <label for="contador_intentos">Intentos fallidos:</label>
    <input type="text" id="contador_intentos" readonly>
    <button type="button" id="btn_reiniciar">Reiniciar contador</button>
  `;
  formulario.appendChild(divContador);

  // Inicializar contador desde localStorage o 0
  let contador = Number(getStorage("contadorErrores") || 0);
  actualizarCampoContador(contador);

  // Botón reiniciar
  document.getElementById("btn_reiniciar").addEventListener("click", function () {
    contador = 0;
    setStorage("contadorErrores", contador);
    actualizarCampoContador(contador);
  });

  // Enlazar validación por cambio (change)
  enlazarCambioCampo("fecha_creacion", validarFecha);
  enlazarCambioCampo("cocinero", validarCocinero);
  enlazarCambioCampo("destinatario", validarDestinatario);
  enlazarCambioCampo("gramos", validarGramos);
  enlazarCambioCampo("composicion", validarComposicion);
  enlazarCambioCampo("num_cuenta", function (valor) {
    var esValido = validarNumeroCuenta(valor);
    var span = document.getElementById("confirmacion");
    if (esValido) span.innerText = valor.replace(/-/g, "");
    else span.innerText = "";
    return esValido;
  });

  // Envío del formulario
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var i, idCampo, campo, esValido;
    var hayErrores = false;

    // Comprobar cada campo en orden
    for (i = 0; i < ordenCampos.length; i++) {
      idCampo = ordenCampos[i];
      campo = document.getElementById(idCampo);
      esValido = estadoValidacion[idCampo];

      // Si está vacío o no válido → aplicar error visual
      if (!campo.value || !esValido) {
        aplicarEstiloValidacion(campo, false);
        estadoValidacion[idCampo] = false;
        if (!hayErrores) campo.focus();
        hayErrores = true;
      }
    }

    // Si hay errores → incrementar contador
    if (hayErrores) {
      contador++;
      setStorage("contadorErrores", contador);
      actualizarCampoContador(contador);
    } else {
      // Si no hay errores → mostrar alert y limpiar
      alert("Se ha registrado correctamente.");
      formulario.reset();
      limpiarFormulario();
    }
  });

  // Reset manual (botón limpiar)
  formulario.addEventListener("reset", function () {
    setTimeout(limpiarFormulario, 0);
  });
});

/* =========================================
   Funciones auxiliares
   ========================================= */
function enlazarCambioCampo(id, funcionValidadora) {
  var campo = document.getElementById(id);
  if (!campo) return;

  campo.addEventListener("change", function () {
    var esValido = !!funcionValidadora(campo.value);
    estadoValidacion[id] = esValido;
    aplicarEstiloValidacion(campo, esValido);
  });
}

function aplicarEstiloValidacion(campo, esValido) {
  if (!campo) return;

  if (esValido) campo.classList.remove("error");
  else campo.classList.add("error");

  var etiqueta = (campo.labels && campo.labels[0]) ? campo.labels[0] : campo.previousElementSibling;
  if (etiqueta) {
    if (esValido) etiqueta.classList.remove("error_label");
    else etiqueta.classList.add("error_label");
  }
}

function limpiarFormulario() {
  var i, idCampo, campo, etiqueta;
  var span = document.getElementById("confirmacion");
  span.innerText = "";

  for (i = 0; i < ordenCampos.length; i++) {
    idCampo = ordenCampos[i];
    campo = document.getElementById(idCampo);
    if (campo) {
      campo.classList.remove("error");
      etiqueta = campo.labels && campo.labels[0] ? campo.labels[0] : campo.previousElementSibling;
      if (etiqueta) etiqueta.classList.remove("error_label");
    }
    estadoValidacion[idCampo] = false;
  }
}

function actualizarCampoContador(valor) {
  var campo = document.getElementById("contador_intentos");
  if (campo) campo.value = valor;
}

/* =========================================
   Validadores
   ========================================= */
function validarFecha(valor) {
  if (!valor || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;
  var partes = valor.split("-");
  var anio = parseInt(partes[0], 10);
  var mes = parseInt(partes[1], 10);
  var dia = parseInt(partes[2], 10);
  var fecha = new Date(anio, mes - 1, dia);
  return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
}

function validarCocinero(valor) {
  if (!valor) return false;
  return /^[A-Z]{2}\W[0-9]{4}$/.test(valor);
}

function validarDestinatario(valor) {
  if (!valor) return false;
  return /^[A-Z]{2}[A-Z]?_[a-z]+:\d{4}$/.test(valor);
}

function validarGramos(valor) {
  if (valor === "" || valor === null || valor === undefined) return false;
  var numero = Number(valor);
  if (!isFinite(numero)) return false;
  return Math.floor(numero) === numero && numero >= 100 && numero <= 5000;
}

function validarComposicion(valor) {
  if (!valor) return false;
  return /^\d+g[A-Za-z]{1,2}\d?[A-Za-z]{1,2}\d?$/.test(valor);
}

function validarNumeroCuenta(valor) {
  if (!valor) return false;
  if (!/^([A-Za-z]{2}\d{2}-\d{12}-\d{2})$/.test(valor)) return false;
  if (!comprobarPrimerosDigitos(valor)) return false;
  if (!comprobarDigitosControl(valor)) return false;
  return true;
}

function comprobarPrimerosDigitos(valor) {
  var texto = valor.toUpperCase();
  var letra1 = texto.charCodeAt(0) - 64;
  var letra2 = texto.charCodeAt(1) - 64;
  var digitos = parseInt(texto.slice(2, 4), 10);
  return digitos === letra1 + letra2;
}

function comprobarDigitosControl(valor) {
  var cuenta = valor.slice(5, 17);
  var digito1 = parseInt(valor.charAt(18), 10);
  var digito2 = parseInt(valor.charAt(19), 10);
  if (isNaN(digito1) || isNaN(digito2)) return false;

  var mitad = Math.floor(cuenta.length / 2);
  var control1 = calcularControl(cuenta, 0, mitad);
  var control2 = calcularControl(cuenta, mitad, cuenta.length);
  return digito1 === control1 && digito2 === control2;
}

function calcularControl(cuenta, inicio, fin) {
  var suma = 0, i, digito;
  for (i = inicio; i < fin; i++) {
    digito = parseInt(cuenta.charAt(i), 10);
    if (isNaN(digito)) return -1;
    suma += digito;
  }
  return Math.floor(suma / 6);
}
