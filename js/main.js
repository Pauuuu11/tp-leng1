// Interacción del formulario de Contacto
/* 
    Esta función, con las variables, verifica si es que en el formulario de "Motivo de su contacto"
    Se selecciona la opción "Otro"  Se despligue el campo de texto oculto
*/
const selectContacto = document.getElementById('exampleFormControlSelect1');

if (selectContacto) {
    const divCampoOtro = document.getElementById('campoOtro');
    const inputDescripcion = document.getElementById('descripcionOtro');

    selectContacto.addEventListener('change', function () {
        // Verifica si el valor seleccionado es exactamente "Otro"
        if (this.value === 'Otro') {
            divCampoOtro.style.display = 'block';
            inputDescripcion.setAttribute('required', 'true');
        } else {
            divCampoOtro.style.display = 'none';
            inputDescripcion.removeAttribute('required');
            inputDescripcion.value = '';
        }
    });
}

/*
    Esta función y la variable botón hará que la página se recargue al momento de presionar el botón "Enviar" debajo del formulario, para simular que se
    envió el formulario.  
*/
const boton = document.getElementById("btn-enviar");

if (boton) {
    boton.addEventListener("click", function () {
        location.reload();
    });
}

// MODO OSCURO
const btnModoOscuro = document.getElementById('botonTema');
const modoOscuroGuardado = localStorage.getItem('modoOscuro') === 'activado';

document.body.classList.toggle('dark-mode', modoOscuroGuardado);

if (btnModoOscuro) {
    btnModoOscuro.setAttribute('aria-pressed', modoOscuroGuardado);
    btnModoOscuro.setAttribute(
        'aria-label',
        modoOscuroGuardado ? 'Desactivar modo oscuro' : 'Activar modo oscuro'
    );

    btnModoOscuro.addEventListener('click', function () {
        const modoOscuroActivo = document.body.classList.toggle('dark-mode');

        localStorage.setItem('modoOscuro', modoOscuroActivo ? 'activado' : 'desactivado');
        btnModoOscuro.setAttribute('aria-pressed', modoOscuroActivo);
        btnModoOscuro.setAttribute(
            'aria-label',
            modoOscuroActivo ? 'Desactivar modo oscuro' : 'Activar modo oscuro'
        );
    });
}

// Contador de años
const inicio = 1817; 
const anioActual = new Date().getFullYear();
const anios = anioActual - inicio;
document.getElementById("contador-anios").textContent = `Transcurrieron ${anios} años`;