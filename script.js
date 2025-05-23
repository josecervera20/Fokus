// Selección de Elementos del DOM
const html = document.querySelector("html");
const botonEnfoque = document.querySelector(".app__card-button--enfoque");
const botonCorto = document.querySelector(".app__card-button--corto");
const botonLargo = document.querySelector(".app__card-button--largo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botones = document.querySelectorAll(".app__card-button");
const botonIniciarPausar = document.querySelector("#start-pause");
const inputMusicaEnfoque = document.querySelector("#alternar-musica");
const textoIniciarPausar = document.querySelector("#start-pause span");
const iconoIniciarPausar = document.querySelector(".app__card-primary-butto-icon");
const tiempoEnPantalla = document.querySelector("#timer");

// Instancias de Objetos de Audio
const musica = new Audio("./sonidos/luna-rise-part-one.mp3");
const audioPlay = new Audio("./sonidos/play.wav");
const audioPausa = new Audio("./sonidos/pause.mp3");
const audioTiempoFinalizado = new Audio("./sonidos/beep.mp3");

// Variables de Estado del Temporizador
let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

// La música se repite continuamente
musica.loop = true;

/**
 * Maneja el evento de cambio en el checkbox de música.
 * Alterna entre reproducir y pausar la música de fondo.
 */
inputMusicaEnfoque.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

/**
 * Maneja el clic en el botón de "Enfoque".
 * Reinicia el temporizador a 25 minutos y cambia el contexto de la interfaz.
 */
botonEnfoque.addEventListener("click", () => {
  tiempoTranscurridoEnSegundos = 1500;
  cambiarContexto("enfoque");
  botonEnfoque.classList.add("active");
});

/**
 * Maneja el clic en el botón de "Descanso corto".
 * Reinicia el temporizador a 5 minutos y cambia el contexto de la interfaz.
 */
botonCorto.addEventListener("click", () => {
  tiempoTranscurridoEnSegundos = 300;
  cambiarContexto("descanso-corto");
  botonCorto.classList.add("active");
});

/**
 * Maneja el clic en el botón de "Descanso largo".
 * Reinicia el temporizador a 15 minutos y cambia el contexto de la interfaz.
 */
botonLargo.addEventListener("click", () => {
  tiempoTranscurridoEnSegundos = 900;
  cambiarContexto("descanso-largo");
  botonLargo.classList.add("active");
});

/**
 * Cambia el contexto visual de la aplicación (fondo, imagen, título)
 * según el tipo de actividad (enfoque, descanso corto, descanso largo).
 * @param {string} contexto - El nombre del contexto ('enfoque', 'descanso-corto', 'descanso-largo').
 */
function cambiarContexto(contexto) {
  mostrarTiempo();
  // Remueve la clase 'active' de todos los botones de contexto
  botones.forEach(function (botonContexto) {
    botonContexto.classList.remove("active");
  });
  // Actualiza el atributo 'data-contexto' en el HTML para cambiar el fondo
  html.setAttribute("data-contexto", contexto);
  // Cambia la imagen del banner según el contexto
  banner.setAttribute("src", `/imagenes/${contexto}.png`);

  // Actualiza el título de la aplicación según el contexto
  switch (contexto) {
    case "enfoque":
      titulo.innerHTML = `
                Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
      break;
    case "descanso-corto":
      titulo.innerHTML = `
                ¿Qué tal tomar un respiro? <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `;
      break;
    case "descanso-largo":
      titulo.innerHTML = `
                Hora de volver a la superficie.<strong class="app__title-strong"> ¡Haz una pausa larga!</strong>
            `;
      break;
    default:
      break;
  }
}

/**
 * Función que gestiona la cuenta regresiva del temporizador.
 * Reduce el tiempo en un segundo y actualiza la pantalla.
 * Si el tiempo llega a cero, reproduce un sonido, muestra una alerta y reinicia el temporizador.
 */
const cuentaRegresiva = () => {
  if (tiempoTranscurridoEnSegundos <= 0) {
    audioTiempoFinalizado.play();
    alert("¡Tiempo finalizado!");
    reiniciar();
    return;
  }
  tiempoTranscurridoEnSegundos -= 1;
  mostrarTiempo();
};

/**
 * Maneja el clic en el botón de iniciar/pausar.
 * Inicia la cuenta regresiva si está pausada, o la pausa si está en curso.
 */
botonIniciarPausar.addEventListener("click", iniciarOpausar);

/**
 * Inicia o pausa el temporizador.
 * Si el temporizador está corriendo, lo pausa y reinicia.
 * Si está pausado, lo inicia y actualiza el texto/icono del botón.
 */
function iniciarOpausar() {
  if (idIntervalo) {
    audioPausa.play();
    reiniciar();
    return;
  }
  audioPlay.play();
  idIntervalo = setInterval(cuentaRegresiva, 1000);
  textoIniciarPausar.textContent = "Pausar";
  iconoIniciarPausar.setAttribute("src", `/imagenes/pause.png`);
}

/**
 * Reinicia el temporizador, deteniendo la cuenta regresiva
 * y restaurando el estado visual del botón "Comenzar".
 */
function reiniciar() {
  clearInterval(idIntervalo);
  textoIniciarPausar.textContent = "Comenzar";
  iconoIniciarPausar.setAttribute("src", `/imagenes/play_arrow.png`);
  idIntervalo = null;
}

/**
 * Muestra el tiempo restante en la pantalla del temporizador.
 * Formatea los segundos a un formato de minutos y segundos (MM:SS).
 */
function mostrarTiempo() {
  const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
  const tiempoFormateado = tiempo.toLocaleTimeString("es-ES", {
    minute: "2-digit",
    second: "2-digit",
  });
  tiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

// Muestra el tiempo inicial en pantalla al cargar la página
mostrarTiempo();
