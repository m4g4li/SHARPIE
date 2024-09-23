
let ratingCountElement = document.getElementById('ratingCount');
let ratingCount = parseInt(ratingCountElement.textContent);

function incrementRating() {
    ratingCount++;  
    ratingCountElement.textContent = ratingCount; 
}

const stars = document.querySelectorAll('.rating input[type="radio"]');


stars.forEach(star => {
    star.addEventListener('click', incrementRating);
});