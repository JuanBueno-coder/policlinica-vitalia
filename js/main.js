

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (elemento) {
  new bootstrap.Tooltip(elemento);
});

// Formulario de contacto: validación de Bootstrap y modal de confirmación
const formulario = document.getElementById('formContacto');
if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (formulario.checkValidity()) {
      bootstrap.Modal.getOrCreateInstance(document.getElementById('modalEnviado')).show();
      formulario.reset();
      formulario.classList.remove('was-validated');
    } else {
      formulario.classList.add('was-validated');
    }
  });
}
