//Formulario 1

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const charla =  document.getElementById("charla");

const botonEnviar = document.getElementById("enviar");

//nombre.value = "no";

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validadCharla(){
    if(charla.value.length<10){
        document.getElementById("errorCharla").innerHTML = "El texto de lo que se quiere hablar en la charla es muy corto";
    } else{
        document.getElementById("errorCharla").innerHTML = "El texto de lo que se quiere hablar en la charla esta bien";
    }
}


botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validadCharla);