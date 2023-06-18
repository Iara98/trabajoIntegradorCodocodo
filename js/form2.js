//Formulario 2


const nombreForm2 = document.getElementById("nombre");
const apellidoForm2 = document.getElementById("apellido");
const correo = document.getElementById("correo");
const expRegularForm2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const categoria = getElementById("categorias").selectedIndex;

const botonResumen = document.getElementById("resumen");


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

function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorCorreo").innerHTML = "El email no es válido";
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto";
    }
}

function validarCategoria(){

    if( categoria == null || categoria == 0 ) {
        document.getElementById("errorCategoria").innerHTML = "Seleccionar una categoria por favor";
    } else {
        document.getElementById("errorCategoria").innerHTML = "La categoria seleccionada esta bien";
    }

}

botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);
botonResumen.addEventListener("click", validarCategoria);