/*codigo carruseles*/
let slideIndex = [0, 0, 0];

function moveSlide(n, carouselIndex) {
    const carousels = document.querySelectorAll('.carousel-inner');
    const totalSlides = carousels[carouselIndex].children.length;

    slideIndex[carouselIndex] += n;

    if (slideIndex[carouselIndex] >= totalSlides) {
        slideIndex[carouselIndex] = 0;
    } else if (slideIndex[carouselIndex] < 0) {
        slideIndex[carouselIndex] = totalSlides - 1;
    }

    const offset = -slideIndex[carouselIndex] * 100;
    carousels[carouselIndex].style.transform = `translateX(${offset}%)`;
}

/*fin codigo carruseles*/


/*boton carruseles*/

function toggleDescripcion(id) {
    var descripcion = document.getElementById("descripcion" + id);
    var boton = document.getElementById("toggleButton" + id);

    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
        boton.textContent = "Mostrar Menos";
    } else {
        descripcion.style.display = "none";
        boton.textContent = "Mostrar Más";
    }
}

/*fin boton carruseles */



