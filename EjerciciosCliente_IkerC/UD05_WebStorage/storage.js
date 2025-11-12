"use strict";

/* ============================================================
    FUNCIONES DE ALMACENAMIENTO USANDO localStorage y sessionStorage
    ============================================================ */

function getStorage(clave, usarSession = false) {
    if (usarSession) {
        return sessionStorage.getItem(clave) || "";
    } else {
        return localStorage.getItem(clave) || "";
    }
}

function setStorage(clave, valor, usarSession = false) {
    if (usarSession) {
        sessionStorage.setItem(clave, valor);
    } else {
        localStorage.setItem(clave, valor);
    }
}

function deleteStorage(clave, usarSession = false) {
    if (usarSession) {
        sessionStorage.removeItem(clave);
    } else {
        localStorage.removeItem(clave);
    }
}

/* ============================================================
    EJEMPLOS DE USO Y DIFERENCIAS ENTRE AMBOS
    ============================================================ */

// --- Ejemplo con localStorage ---
setStorage("contadorErrores", "5"); 
console.log("LocalStorage contador:", getStorage("contadorErrores")); 

// --- Ejemplo con sessionStorage ---
setStorage("usuarioActual", "Heisenberg", true);
console.log("SessionStorage usuario:", getStorage("usuarioActual", true)); 

/* ============================================================
    DIFERENCIAS ENTRE localStorage Y sessionStorage
    ============================================================

1️⃣ Duración:
    - localStorage: Los datos persisten incluso al cerrar el navegador o reiniciar el equipo.
    - sessionStorage: Los datos se eliminan al cerrar la pestaña o navegador.

2️⃣ Ámbito:
    - localStorage: Compartido entre todas las pestañas y ventanas del mismo origen.
    - sessionStorage: Específico de la pestaña; no se comparte entre ventanas.

3️⃣ Uso recomendado:
    - localStorage: Guardar preferencias del usuario, configuraciones o historial que deben mantenerse (p. ej., tema oscuro, idioma, contador global de errores).
    - sessionStorage: Guardar datos temporales o de sesión actual (p. ej., usuario logueado, formulario en curso, paso actual de un asistente).

============================================================ */
