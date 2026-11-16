const selectContacto = document.getElementById('exampleFormControlSelect1');
const divCampoOtro = document.getElementById('campoOtro');
const inputDescripcion = document.getElementById('descripcionOtro');
/* 
    Esta función, con las variables de arriba, verifica si es que en el formulario de "Motivo de su contacto"
    Se selecciona la opción "Otro"  Se despligue el campo de texto oculto
*/
selectContacto.addEventListener('change', function () {
    if (this.value === 'Otro') {
        divCampoOtro.style.display = 'block';
        inputDescripcion.setAttribute('required', 'true');
    } else {
        divCampoOtro.style.display = 'none';
        inputDescripcion.removeAttribute('required');
        inputDescripcion.value = '';
    }
});
/*
    Esta función hará que la página se recargue al momento de presionar el botón "Enviar" debajo del formulario, para simular que se
    envió el formulario.  
*/
const boton = document.getElementById("btn-enviar");

boton.addEventListener("click", function () {
    location.reload();
});