document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Oculta el formulario
    document.getElementById('form').style.display = 'none';

    // Muestra el mensaje de confirmación
    document.getElementById('confirmation-message').style.display = 'block';
});

document.getElementById('reload').addEventListener('click', function() {
    location.reload(); // Recarga la página actual
  });