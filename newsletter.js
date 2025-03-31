document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const message = document.getElementById('message');
    const isValid = validateEmail(email);

    message.textContent = isValid ? '¡Gracias por suscribirte!' : 'Por favor, ingresa un correo electrónico válido.';
    message.style.color = isValid ? '#0511F2' : '#F20505';
    message.classList.remove('hidden');
    
    isValid && (emailInput.value = ''); // Borra el campo si es válido

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => message.classList.add('hidden'), 3000);
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

