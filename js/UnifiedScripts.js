function eliminar() {
  const usuario = document.getElementById("usuario").value;
  const perfil = document.getElementById("perfil").value;

  console.log("Usuario a eliminar:", usuario);
  // Aquí puedes implementar la lógica para eliminar el usuario
  window.location.href = "menu.html"; // Redirigir al menú
}

function cancelar() {
  window.location.href = "menu.html";
}

function aceptar() {
  const usuario = document.getElementById("usuario").value;
  const perfil = document.getElementById("perfil").value;
  const contrasena = document.getElementById("contrasena").value;
  const correo = document.getElementById("correo").value;

  console.log("Usuario:", usuario);
  console.log("Perfil:", perfil);
  console.log("Contraseña:", contrasena);
  console.log("Correo:", correo);

  window.location.href = "menu.html"; // Reemplaza con tu página de destino
}

function toggleForm() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const toggleText = document.getElementById('toggle-text');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    toggleText.innerHTML = '¿No tienes cuenta? <a href="#" onclick="toggleForm()">Regístrate</a>';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    toggleText.innerHTML = '¿Ya tienes cuenta? <a href="#" onclick="toggleForm()">Inicia sesión</a>';
  }
}
