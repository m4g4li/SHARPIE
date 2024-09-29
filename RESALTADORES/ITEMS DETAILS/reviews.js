 // Cargar los datos de Mockaroo
 fetch('reviews.json')
 .then(response => response.json())
 .then(data => {
   const container = document.getElementById('reviews-container');
   
   data.forEach(review => {
     const reviewElement = document.createElement('div');
     reviewElement.classList.add('review');
     
     reviewElement.innerHTML = `
       <h3 class="calificacion">${review.rating}</h3>
       <p class="name">${review.name}</p>
       <p class="comentario">${review.review_text}</p>
       <p class="date">${review.review_date}</p>
     `;
     
     container.appendChild(reviewElement);
   });
 })
 .catch(error => console.error('Error al cargar los datos:', error));
 