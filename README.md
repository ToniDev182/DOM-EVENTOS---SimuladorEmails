# Proyecto: Envío de Correos Electrónicos 📧

## Descripción

Este proyecto permite enviar correos electrónicos a través de un formulario de contacto en una página web. La aplicación valida los campos del formulario (correo electrónico, asunto y mensaje) antes de permitir el envío, mejorando la experiencia de usuario con alertas de error y un spinner de carga durante el proceso.

## Tecnologías Utilizadas 🚀

- **HTML**: Estructura del formulario y de la página web.
- **CSS**: Estilos visuales utilizando clases personalizadas y utilidades de Tailwind CSS.
- **JavaScript**: Lógica para la validación de los campos del formulario, envío de datos y manejo de eventos de usuario.

## Estructura de Archivos 📂

bash
/dist
  ├── app.css         # Estilos de la aplicación (TailwindCSS)
  ├── spinner.css     # Estilos del spinner de carga

/js
  ├── app.js          # Lógica de validación y manejo de eventos en JavaScript

index.html           # Página HTML principal con el formulario de contacto
README.md            # Documentación del proyecto

## Explicación del Código JavaScript 💻

El archivo `js/app.js` contiene toda la lógica necesaria para gestionar el formulario de contacto. A continuación se explica cada parte del código:

### 1. **Variables y Referencias a Elementos del DOM 🔧**

Primero, se definen las variables para hacer referencia a los elementos del formulario (correo, asunto, mensaje) y otros elementos importantes, como el botón de envío, el botón de reset y el spinner de carga. También se crea un objeto `Correo` para almacenar los valores introducidos en los campos del formulario.


vale ahora dame esto pero bien hecho todo en el mismo mark down 

### 2. **Manejo de Eventos 🖱️**

En esta sección, el código agrega varios *event listeners* a los elementos del formulario para detectar las acciones del usuario y activar las validaciones correspondientes.

- **Eventos de `input`**: Cada vez que el usuario escribe en los campos de correo, asunto o mensaje, se ejecuta la función de validación para comprobar si los campos son válidos.

- **Evento de `submit`**: Cuando el formulario es enviado, el comportamiento por defecto (recargar la página) se previene, y en su lugar se llama a la función que simula el envío del correo.

- **Evento de `reset`**: Al hacer clic en el botón de "reset", se limpia el formulario y se actualizan las alertas de validación.

### 3. **Validación de Campos ✔️**

- **`validarFormulario()`**: Esta función valida los tres campos del formulario (correo, asunto y mensaje). Si algún campo está vacío o el formato del correo electrónico es incorrecto, se muestra un mensaje de error. Los valores válidos se almacenan en el objeto `Correo`.

- **`validarEmail(email)`**: Utiliza una expresión regular para verificar si el formato del correo electrónico es válido. Esta función es clave para asegurar que los datos ingresados sean correctos.

- **Alertas de error**: Si un campo no cumple con los requisitos de validación, se muestra una alerta debajo del campo correspondiente, informando al usuario sobre el problema.

### 4. **Interacciones del Usuario 💬**

- **Botón de Enviar**: El botón de enviar está habilitado solo cuando todos los campos son válidos. Esto se controla con la función `validarBoton(correoValido)`, que ajusta el estado de habilitación del botón, así como su opacidad.

- **Spinner de carga**: Al enviar el formulario, se muestra un spinner de carga que simula el proceso de envío del correo. Este spinner se oculta después de 3 segundos, y el formulario se limpia para indicar que el proceso ha finalizado correctamente.

### 5. **Reinicio del Formulario 🔄**

La función `resetearFormulario()` limpia los campos del formulario y el objeto `Correo`, restableciendo todo a su estado inicial. Esto también actualiza las alertas y permite al usuario volver a completar el formulario desde cero.