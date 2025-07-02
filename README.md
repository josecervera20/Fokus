# 🎯 Fokus: Temporizador Pomodoro Interactivo

## 📝 Descripción del Proyecto

**Fokus** es una **aplicación web de temporizador al estilo Pomodoro** diseñada para **impulsar tu productividad** a través de ciclos de trabajo enfocado y descansos estratégicos. Desarrollado como parte del **"Curso de JavaScript: Manipulando elementos en el DOM"**, este proyecto es una demostración práctica de cómo JavaScript puede transformar una simple página web en una **experiencia interactiva y dinámica**.

### ¿Qué es Fokus y qué hace? 🤔

Fokus te permite gestionar tu tiempo con **temporizadores preestablecidos** para:

- **Enfoque**: 25 minutos de concentración total.
- **Descanso Corto**: 5 minutos para una pausa rápida.
- **Descanso Largo**: 15 minutos para un respiro más prolongado.

La interfaz de la aplicación **cambia visualmente** con cada modo: el fondo, el título y el estado del botón principal se adaptan para reflejar tu contexto actual. Cuando el tiempo finaliza, una alerta sonora y visual te avisa.

### ¿Por qué se construyó este proyecto? 💡

El principal objetivo de Fokus fue **aplicar y consolidar los conocimientos** adquiridos en el curso de JavaScript, especialmente en la **manipulación del DOM**. Sirvió como un lienzo práctico para entender cómo JavaScript interactúa con HTML y CSS, permitiendo crear funcionalidades que van más allá de una página estática. Es la base para comprender cómo dar vida a tus ideas web.

### ¿Cómo funciona la magia detrás de Fokus? 🛠️

La aplicación opera mediante la **manipulación directa del DOM** en tiempo real utilizando JavaScript:

- **Contextos Dinámicos:** Modifica atributos del elemento `<html>` (como `data-contexto`) para cambiar los estilos generales de la página (fondos, colores).
- **Contenido Interactivo:** Actualiza dinámicamente las **imágenes** (`src`) y los **textos** (`innerHTML`) para reflejar el estado actual del temporizador o el modo seleccionado.
- **Control Visual:** Alterna **clases CSS** (`.active`) en los botones para destacar el contexto elegido por el usuario.
- **Gestión del Tiempo:** Utiliza `setInterval` y `clearInterval` para una **cuenta regresiva precisa** y controlable.
- **Feedback Sensorial:** Emplea la **API de `Audio`** para reproducir sonidos que te alertan sobre el final del tiempo o el inicio/pausa.
- **Interacción Total:** Captura las acciones del usuario (clics en botones, cambios en checkboxes) a través de `eventListeners` para una experiencia totalmente responsiva.

## 💻 Tecnologías Utilizadas

- **HTML5**: La columna vertebral del contenido.
- **CSS3**: El pincel que da vida y diseño responsivo a la interfaz.
- **JavaScript ES6+**: El cerebro detrás de toda la interactividad y lógica.

## ⚙️ Cómo Instalar y Ejecutar

¡Poner Fokus en marcha es muy fácil!

1.  **Clona este repositorio** en tu máquina local:
    ```bash
    git clone https://github.com/josecervera20/Fokus.git
    ```
2.  **Navega al directorio del proyecto**:
    ```bash
    cd fokus
    ```
3.  **Abre `index.html` en tu navegador favorito**:
    Simplemente haz doble clic en el archivo `index.html` o arrástralo y suéltalo en tu navegador (Chrome, Firefox, Edge, etc.).

¡Y listo! No necesitas configuraciones de servidor complicadas ni dependencias adicionales.

## Cómo Utilizar el Proyecto 🧑‍💻

Una vez que la aplicación esté cargada en tu navegador, ¡es hora de ponerla a trabajar!

1.  **Elige tu Enfoque**: Haz clic en los botones `Enfoque`, `Descanso Corto` o `Descanso Largo` para cambiar el modo del temporizador y la atmósfera visual.
2.  **Inicia o Pausa**: Presiona el botón "Comenzar" para iniciar la cuenta regresiva. Verás cómo el texto y el icono cambian a "Pausar" para indicar el estado. Un nuevo clic pausará el temporizador.
3.  **Música Ambiental**: Usa el interruptor de música para activar o desactivar una melodía relajante de fondo.
4.  **Notificación de Fin**: Cuando el temporizador llegue a cero, escucharás un sonido y una alerta aparecerá en pantalla. Haz clic en "Aceptar" para continuar tu flujo.

## 🙌 Agradecimientos

Este proyecto fue posible gracias a los conocimientos adquiridos en el curso de **Alura Latam**.

👩‍🏫 Un agradecimiento especial a la instructora **Barbara Santos**, por su dedicación, claridad y excelente enseñanza que hicieron posible este aprendizaje.

## 📄 Licencia

Este proyecto es de código abierto y se publica bajo la [Licencia MIT](LICENSE). Siéntete libre de usar, modificar y distribuir este código para tus propios proyectos.
