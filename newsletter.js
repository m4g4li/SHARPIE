document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Por defecto al rellenar el formulario vuelve al inicio

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = '¡Gracias por suscribirte!';
        message.classList.remove('hidden');
        message.style.color = '#0511F2'; // Color del mensaje
        emailInput.value = ''; 
    } else {
        message.textContent = 'Por favor, ingresa un correo electrónico válido.';
        message.classList.remove('hidden');
        message.style.color = '##F2F2F2'; // Color del mensaje
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
