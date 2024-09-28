fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
        
        let totalRating = 0;
        let ratingCount = data.length; 

        
        data.forEach(review => {
            totalRating += review.rating; 
        });

        
        let averageRating = (totalRating / ratingCount).toFixed(1); // Redondear a 1 decimal

        // Actualizar el HTML
        document.getElementById('averageRating').textContent = averageRating;
        document.getElementById('ratingCount').textContent = ratingCount;

        // Actualizar las estrellas en el rating
        const stars = document.querySelectorAll('.rating1 input[type="radio"]');
        const filledStars = Math.floor(averageRating); // Estrellas llenas basadas en la calificación (sin redondeo)
        stars.forEach((star, index) => {
            if (index < filledStars) {
                star.checked = true; // Marca las estrellas según la calificación promedio
            } else {
                star.checked = false; // Asegúrate de que las estrellas restantes estén desmarcadas
            }
        });
    })
    .catch(error => console.error('Error al cargar las reseñas:', error));
