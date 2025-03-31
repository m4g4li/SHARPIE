fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
        // Inicializar variables para el cálculo
        let totalRating = 0;
        let ratingCount = data.length; // Número total de reseñas

        // Sumar las calificaciones
        data.forEach(review => {
            totalRating += review.rating;
        });

        // Calcular la calificación promedio
        let averageRating = (totalRating / ratingCount).toFixed(1); // Redondeado a 1 decimal

        // Actualizar el texto del promedio y el número de reseñas
        document.getElementById('averageRating').textContent = averageRating;
        document.getElementById('ratingCount').textContent = ratingCount; // Aquí contamos el número de reseñas

        // Actualizar las estrellas
        const filledStars = Math.floor(averageRating); // Parte entera de la calificación
        const partialStar = averageRating - filledStars; // Parte decimal

        // Seleccionar estrellas llenas
        const stars = document.querySelectorAll('.rating1 input[type="radio"]');
        stars.forEach((star, index) => {
            if (index < filledStars) {
                star.checked = true; // Marcar estrellas completas
            } else if (index === filledStars && partialStar > 0) {
                star.checked = true; // Marcar la estrella parcial
                star.nextElementSibling.style.color = `rgba(255, 153, 51, ${partialStar})`; // Ajustar el color para representar la parte decimal
            } else {
                star.checked = false; // No marcar las estrellas restantes
            }
        });
    })
    .catch(error => console.error('Error al cargar las reseñas:', error));
