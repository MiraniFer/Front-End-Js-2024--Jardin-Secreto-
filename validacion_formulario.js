const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const comentario = document.getElementById('comentario').value;

  if (nombre === "" || apellido === "" || email === "" || comentario === "") {
    console.log("Todos los campos son requeridos. Por favor, completa todos.");
  } else {
    console.log("Formulario completo. Datos listos para enviar.");
    
    formulario.submit();
  }
});
