

document.addEventListener('DOMContentLoaded', () => {
    console.log('El documento está completamente cargado y listo');


    /* ----------------------VARIABLES----------------------  */

    // Crea un objeto en JS que toma lo que esté en el valor que este en ese HTML
    const inputEmail = document.getElementById('email');
    const inputAsunto = document.getElementById('asunto');
    const inputMensaje = document.getElementById('mensaje');
    const formulario = document.getElementById('formulario');
    const submit = document.querySelector('button[type="submit"]');
    const reset = document.querySelector('button[type="reset"]');
    const spiner = document.querySelector('#spinner');



    const Correo = {
        email: "",
        asunto: "",
        mensaje: ""
    };



    /* ----------------------EVENTOS----------------------  */
    //Creamos los event listener para cada elemento que tenemos en el formulario, esto podriamos hacerlo esdes el principio para ya tenerlos identificados
    inputEmail.addEventListener('input', e => {

        validarFormulario();
    });

    inputAsunto.addEventListener('input', e => {

        validarFormulario();
    });

    inputMensaje.addEventListener('input', e => {

        validarFormulario();
    });
    // este por ejemplo es para el boton de reset, las 2 funciones que tiene primer limpian tdoo el formulario y activan la validacioonn ppara que vuelvva a quedar como nuevo
    reset.addEventListener('click', e => {
        // cuando le demos click no tenga su comportamiento por defecto.
        e.preventDefault();

        resetearFormulario();
        validarFormulario();

    });
    // este es para el evento de enviar , quitamos el default por que los ofrmularios pr ddefault recargan la pagina
    formulario.addEventListener('submit', e => {

        e.preventDefault();

        enviarEmail();

    });


    /* ----------------------FUCIONES----------------------  */

    // esta es la funcion principal dde validacionn, se encarga dde comprobar cada uno de los 2 campos, desde que tenggan al menos algo escrito
    // asi mismo valida que el email tenga el foormato correcto en la funccion " validarEmail"
    //cuando los valres son validos los escribimos en el objeto de ebusqueda, cuanddo noo lo son escribimos "" en el campo
    function validarFormulario() {

        if (inputEmail.value.trim() === "") {
            Correo.email = inputEmail.value;
            alertaError("Email", 0);
        } else {
            if (validarEmail(inputEmail.value.trim())) {
                limpiarAlerta(0);
                Correo.email = inputEmail.value.trim().toLowerCase();
            } else {
                emailInvalido(0);
                Correo.email = '';
            }
        }
        if (inputAsunto.value.trim() === "") {
            Correo.asunto = inputAsunto.value;
            alertaError("Asunto", 1);
        } else {
            limpiarAlerta(1);
            Correo.asunto = inputAsunto.value;
        }
        if (inputMensaje.value.trim() === "") {
            Correo.mensaje = inputMensaje.value;
            alertaError("Mensaje", 2);
        } else {
            limpiarAlerta(2);
            Correo.mensaje = inputMensaje.value;
        }


        validarBoton(comprobarObjeto());

    }

    //esta funcion crea las alertas, necesita el campo para saber que texto escribir, y la poosicion para saber debajo dde que hijo del form se pintara

    function alertaError(campo, posicion) {

        const error = document.createElement('div');
        error.textContent = "El campo " + campo + " es obligatorio";
        error.classList.add('bg-red-600', 'text-center', 'text-white', 'alerta');
        const hijos = formulario.children;
        const alertaExistente = hijos[posicion].querySelector('.alerta');
        if (alertaExistente) {
            alertaExistente.remove();
        }
        hijos[posicion].appendChild(error);

    }
    //esta funcion nos permite pintar una alerta especifica, oteniendo la posiciono de su padddre, por eso usamoss hijos[posicion]
    function limpiarAlerta(posicion) {

        const hijos = formulario.children;
        const alertaExistente = hijos[posicion].querySelector('.alerta');
        if (alertaExistente) {
            alertaExistente.remove();
        }

    }
    //esta funcion usa una expresion regular "validarEmail" paracomprobar que un texto sigue un patron especifico, en este caso el ppatron de los correos electronicos
    function validarEmail(email) {

        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (validEmail.test(email)) {
            return true;

        } else {
            return false;
        }

    }

    // eb esta funcion creamos una alerta diferente para cuando el email no esta vacio pero no es valido
    function emailInvalido(posicion) {

        const error = document.createElement('div');
        error.textContent = "El Email no es valido";
        error.classList.add('bg-red-600', 'text-center', 'text-white', 'alerta');
        const hijos = formulario.children;
        const alertaExistente = hijos[posicion].querySelector('.alerta');
        if (alertaExistente) {
            alertaExistente.remove();
        }
        hijos[posicion].appendChild(error);

    }

    //aqui comprobamos si alguno ded los campoos del objeto de busquedda incluye vacio ""
    function comprobarObjeto() {

        if (Object.values(Correo).includes('')) {
            return true;
        } else {
            return false;
        }
    }

    //usando la funcion anterior, cambiamoss el estado de disabled y la opacidad del boton de enviar para visualizar que esta activo
    function validarBoton(correoValido) {
        if (correoValido) {

            submit.disabled = true;
            submit.classList.add('opacity-50');
        } else {

            submit.disabled = false;
            submit.classList.remove('opacity-50');

        }
    }
    //esta funion muestra el spiner al enviar un correo, el timeout hace que, luego de 3000 millisegunos, se vuelva a ocultar,mostremos el mensaje dde correo enviado y luego  se limpie el formulario
    function mostrarSpiner() {

        spiner.classList.remove('hidden');
        spiner.classList.add('flex');
        setTimeout(() => {
            spiner.classList.add('hidden');
            spiner.classList.remove('flex');
            resetearFormulario();
            mensajeValidacion();
        }, "3000");
    }
    //esta funcion es solo para activar el envio de email
    function enviarEmail() {

        mostrarSpiner();
    }
    //aqui limpiamos el formularo y el objeto en memoria
    function resetearFormulario() {
        Correo.email = '';
        Correo.asunto = '';
        Correo.mensaje = '';
        formulario.reset();
    }

    //aqui pintamos el mmensaje cuanndo ya enviamos el correo
    function mensajeValidacion() {
        const alerta = document.createElement('div')
        alerta.textContent = "Mensaje envidado Correctamente";
        alerta.classList.add('bg-green-500', 'text-center', 'text-white', 'alerta');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
            resetearFormulario();
        }, "3000");
    }

});

