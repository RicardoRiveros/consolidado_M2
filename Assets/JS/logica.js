document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Oculta el formulario
    document.getElementById('form').style.display = 'none';

    // Muestra el mensaje de confirmación del envio de formulario
    document.getElementById('confirmation-message').style.display = 'block';
});

document.getElementById('reload').addEventListener('click', function() {
    location.reload(); // Recarga la página actual
  });