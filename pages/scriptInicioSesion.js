document.getElementById('toggle-form').addEventListener('click', function(e) {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const toggleText = document.getElementById('toggle-text');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.textContent = 'Iniciar Sesión';
        toggleText.innerHTML = '¿No tienes cuenta? <a href="#" id="toggle-form">Registrarse</a>';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Registrarse';
        toggleText.innerHTML = '¿Ya tienes cuenta? <a href="#" id="toggle-form">Iniciar Sesión</a>';
    }
});
