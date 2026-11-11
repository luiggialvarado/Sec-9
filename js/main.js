// Muestra el botón de volver arriba en cuanto el usuario empieza a bajar
const botonArriba = document.querySelector(".volver-arriba");

function actualizarBotonArriba() {
  if (window.scrollY > 100) {
    botonArriba.classList.add("visible");
  } else {
    botonArriba.classList.remove("visible");
  }
}
// una vez al cargar la página y otra en cada scroll
window.addEventListener("scroll", actualizarBotonArriba);
window.addEventListener("load", actualizarBotonArriba);

// Formulario de contacto: no se envía a ningún sitio, solo muestra un aviso
const formulario = document.querySelector(".formulario");
const aviso = document.querySelector(".formulario-aviso");

formulario.addEventListener("submit", function (event) {
  // Sin esto, el navegador recargaría la página con los datos en la URL
  event.preventDefault();

  const nombre = formulario.nombre.value.trim();
  aviso.textContent = `Gracias, ${nombre}. Esta web es un proyecto de clase, así que tu mensaje no se ha enviado a ningún sitio.`;

  formulario.reset();
});

// Faros del hero: el círculo de luz sigue al ratón
const heroPresentacion = document.querySelector(".presentacion");
const contenedorFaros = document.querySelector(".presentacion-interior");

function moverFaros(event) {
  const caja = contenedorFaros.getBoundingClientRect();
  const x = event.clientX - caja.left;
  const y = event.clientY - caja.top;

  contenedorFaros.style.setProperty("--faro-x", `${x}px`);
  contenedorFaros.style.setProperty("--faro-y", `${y}px`);
}

heroPresentacion.addEventListener("mousemove", moverFaros);

// Fotos de coches: se inclinan en 3D según dónde esté el ratón
const marcos = document.querySelectorAll(".coche-marco");
const maximoGrados = 10;

function inclinar(event) {
  const marco = event.currentTarget;
  const caja = marco.getBoundingClientRect();
  const x = (event.clientX - caja.left) / caja.width;
  const y = (event.clientY - caja.top) / caja.height;

  marco.style.setProperty("--inclinar-x", `${(0.5 - y) * 2 * maximoGrados}deg`);
  marco.style.setProperty("--inclinar-y", `${(x - 0.5) * 2 * maximoGrados}deg`);
}

function enderezar(event) {
  const marco = event.currentTarget;
  marco.style.setProperty("--inclinar-x", "0deg");
  marco.style.setProperty("--inclinar-y", "0deg");
}

for (let i = 0; i < marcos.length; i++) {
  marcos[i].addEventListener("mousemove", inclinar);
  marcos[i].addEventListener("mouseleave", enderezar);
}
