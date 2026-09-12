const bttn= document.getElementById("btn-modo");
const form= document.getElementById("form-contacto");
const mensaje= document.getElementById("mensaje-confirmacion");

if (!boton) {
  console.error('No se encontró el botón con id "btn-modo". Revisa el HTML.');
}

// ===== Evento: click - alternar tema claro/oscuro =====
boton.addEventListener('click', function () {
  document.body.classList.toggle('modo-oscuro');
  console.log('Tema cambiado. Modo oscuro activo:', document.body.classList.contains('modo-oscuro'));
});

// ===== Evento: submit - validar y confirmar el formulario =====
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  const correo = document.getElementById('correo').value;
  console.log('Formulario enviado con el correo:', correo);

  mensaje.textContent = 'Gracias, ' + correo + '. Te contactaremos pronto.';
  mensaje.classList.remove('oculto');
});