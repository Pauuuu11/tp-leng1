const selectContacto = document.getElementById('exampleFormControlSelect1');
const divCampoOtro = document.getElementById('campoOtro');
const inputDescripcion = document.getElementById('descripcionOtro');

selectContacto.addEventListener('change', function () {
    // Verifica si el valor seleccionado es exactamente "Otro" (con O mayúscula, como en tu HTML)
    if (this.value === 'Otro') {
        divCampoOtro.style.display = 'block';
        inputDescripcion.setAttribute('required', 'true');
    } else {
        divCampoOtro.style.display = 'none';
        inputDescripcion.removeAttribute('required');
        inputDescripcion.value = '';
    }
});

const boton = document.getElementById("btn-enviar");

boton.addEventListener("click", function () {
    location.reload();
});