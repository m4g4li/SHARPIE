const img = document.getElementById("img-marcador");

// Función para cambiar la imagen
const cambiarImgMarcador = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

    const anchor = event.target.closest('a'); // Asegurarse de obtener la etiqueta <a>
    const newSrc = anchor.getAttribute('data-img-src'); // Leer el nuevo src desde el atributo data
    if (newSrc) {
        img.classList.add('rotate-scale');
        setTimeout(() => {
            img.src = newSrc;
            img.classList.remove('rotate-scale'); // Elimina el efecto
        }, 300);
    }
};

// Agregar listeners a todos los enlaces con la clase cambiar-img
document.querySelectorAll('.cambiar-img').forEach(anchor => {
    anchor.addEventListener('click', cambiarImgMarcador);
});
