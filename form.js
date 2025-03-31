document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const form = event.target;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countryInput = document.getElementById('inputCountry');
    const addressInput = document.getElementById('inputAddress');
    const commentInput = document.getElementById('inputComment');

    // Verificar que todos los campos estén completos y el email sea válido
    if (
        nameInput.value.trim() !== '' &&
        validateEmail(emailInput.value.trim()) &&
        phoneInput.value.trim() !== '' &&
        countryInput.value.trim() !== '' &&
        addressInput.value.trim() !== '' &&
        commentInput.value.trim() !== ''
    ) {
        alert('¡Gracias, pronto alguien del equipo de soporte se pondrá en contacto contigo!');
        
        // Restablecer el formulario
        form.reset();

        // Restaurar el texto del input file
        const fileLabel = document.querySelector(".file-label");
        if (fileLabel) fileLabel.textContent = "Ningún archivo seleccionado";
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Manejo del input file
document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("inputFile");
    let fileLabel = document.querySelector(".file-label");

    if (!fileLabel) {
        fileLabel = document.createElement("p");
        fileLabel.className = "file-label";
        fileLabel.textContent = "Ningún archivo seleccionado";
        fileLabel.style.fontSize = "14px";
        fileLabel.style.color = "#0D0D0D";
        fileLabel.style.marginTop = "5px";

        fileInput.parentNode.insertBefore(fileLabel, fileInput.nextSibling);
    }

    fileInput.addEventListener("change", function () {
        fileLabel.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "Ningún archivo seleccionado";
    });
});

