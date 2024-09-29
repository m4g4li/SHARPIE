document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('review-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Obtén los valores del formulario
      const rating = document.querySelector('input[name="rating"]:checked').value; // Cambiado para obtener el valor seleccionado
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
      
      // Mostrar la reseña
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      
      // Contenido de la reseña
      reviewDiv.innerHTML = `
        <div class="review-rating">${rating}</div>
        <div class="review-name">${name}</div>
        <p class="review-comentario">${comment}</p>
        <div class="review-date">${new Date().toLocaleDateString()}</div>
      `;
      
      // Añade la nueva reseña al principio del contenedor de reseñas
      document.getElementById('reviews-container').prepend(reviewDiv);
      
      // Limpia el formulario después de enviar
      document.getElementById('review-form').reset();
    });
  });