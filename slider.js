let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider'); // Seleccionar los botones de navegación y el contenedor del slider

next.addEventListener('click' , function(){ // Dar funcionalidad al hacer clic en el botón "next"

    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
});

prev.addEventListener('click', function() { // Dar funcionalidad al hacer clic en el botón "prev"

    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
});