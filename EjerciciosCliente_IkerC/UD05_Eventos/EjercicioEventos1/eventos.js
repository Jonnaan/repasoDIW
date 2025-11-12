/* 1. Ocultar/Mostrar contenidos */
/* 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos. */
/* 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace . */
/* 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado de ocultar a mostrar (pista: propiedad innerHTML).*/

document.getElementById("enlace_1").addEventListener("click", function(event) {
    let contenido = document.getElementById("contenidos_1");
    if (contenido.style.display === "none") {
        document.getElementById("enlace_1").innerHTML = "Ocultar contenido";
        contenido.style.display = "block";
    } else {
        document.getElementById("enlace_1").innerHTML = "Mostrar contenido";
        contenido.style.display = "none";
    }
});

document.getElementById("enlace_2").addEventListener("click", function(event) {
    let contenido = document.getElementById("contenidos_2");
    if (contenido.style.display === "none") {
        document.getElementById("enlace_2").innerHTML = "Ocultar contenido";
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
        document.getElementById("enlace_2").innerHTML = "Mostrar contenido";
    }
});

document.getElementById("enlace_3").addEventListener("click", function(event) {
    let contenido = document.getElementById("contenidos_3");
    if (contenido.style.display === "none") {
        document.getElementById("enlace_3").innerHTML = "Ocultar contenido";
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
        document.getElementById("enlace_3").innerHTML = "Mostrar contenido";
    }
});

/*Ejercicio 2
Completar el código JavaScript para que:
Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador, respecto a la página y respecto de la ventana:

Para ello deberás elegir el manejador de eventos adecuado y las propiedades adecuadas del objeto evento que deberemos pasar como parámetro de la función que se ejecute al producirse el evento. (https://developer.mozilla.org/es/docs/Web/API/Event) */

document.addEventListener("mousemove", function(event) {
    let posX = event.clientX;
    let posY = event.clientY;
    let posXPag = event.pageX;
    let posYPag = event.pageY;
    let posXVentana = window.scrollX + posX;
    let posYVentana = window.scrollY + posY;
    document.querySelectorAll("div p")[0].innerHTML = "Posición del puntero respecto al navegador: (" + posX + ", " + posY + ")";
    document.querySelectorAll("div p")[1].innerHTML = "Posición del puntero respecto a la página: (" + posXPag + ", " + posYPag + ")";
    document.querySelectorAll("div p")[2].innerHTML = "Posición del puntero respecto a la ventana: (" + posXVentana + ", " + posYVentana + ")";
});
