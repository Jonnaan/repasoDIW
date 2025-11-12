// ********************************* Leer una cookie ********************************* //
var x = document.cookie; //Devuelve toda la cadena con todas las variables
//No muestra HttpOnly cookies: Las cookies con el atributo HttpOnly no son accesibles desde JavaScript, por lo que no aparecerán cuando ejecutes document.cookie.

//Leer un valor concreto de la cookie:
function getCookie(cname) {
    var name = cname + "="; //Crea una variable con el texto del campo y un  igual
    var ca = document.cookie.split(';'); //divide la cookie en trozos separados  por ;
        for(let i=0; i<ca.length; i++) { //Recorre cada trozo de la cookie  
            let c = ca[i].trim(); //Extraemos la cookie y eliminamos el espacio inicial
            if (c.indexOf(name) == 0) //Si encuentra el campo buscado
                return c.substring(name.length,c.length); //Lo devuelve
        }
    return ""; //Si no devuelve vacío
}

// ********************************* Crear una cookie ********************************* //
function setCookie(cname, cvalue, exdays) {
    var d = new Date(); //Se extrae la fecha actual
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //Se le suman los días indicados por parámetro
    var expires = "expires="+d.toUTCString(); //Se pasa a formato GMT
    document.cookie = cname + "=" + cvalue + "; " + expires; //Se crea la cookie
}

// ********************************* Borrar una cookie ********************************* //
function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'; //Se crea la cookie con fecha de expiración en el pasado
}