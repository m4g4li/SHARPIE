function initCarousel(carouselClass) {
    let next = document.querySelector(`.${carouselClass} .next`);
    let prev = document.querySelector(`.${carouselClass} .prev`);
    let slider = document.querySelector(`.${carouselClass} .slider`);

    next.addEventListener('click', function() {
        let slides = document.querySelectorAll(`.${carouselClass} .slides`);
        slider.appendChild(slides[0]);
    });

    prev.addEventListener('click', function() {
        let slides = document.querySelectorAll(`.${carouselClass} .slides`);
        slider.prepend(slides[slides.length - 1]);
    });
}

// Inicializa cada carousel
initCarousel('carousel1');
initCarousel('carousel2');
initCarousel('carousel3');