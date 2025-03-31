var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Por defecto, muestra 3 slides
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        720: {
            slidesPerView: 3, // En pantallas de 720px o menos, muestra solo 1 slide
        },
    },
});

// Agregar un nuevo slide dinámicamente
document.getElementById("addSlide").addEventListener("click", function () {
    swiper.appendSlide('<div class="swiper-slide">Nuevo Slide</div>');
});

// Eliminar el último slide
document.getElementById("removeSlide").addEventListener("click", function () {
    swiper.removeSlide(swiper.slides.length - 1);
});
