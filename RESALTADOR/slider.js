document.querySelectorAll('.container2').forEach(container => {
    let next = container.querySelector('.next');
    let prev = container.querySelector('.prev');
    let slider = container.querySelector('.slider');

    next.addEventListener('click', function() {
        let slides = slider.querySelectorAll('.slides');
        slider.appendChild(slides[0]);
    });

    prev.addEventListener('click', function() {
        let slides = slider.querySelectorAll('.slides');
        slider.prepend(slides[slides.length - 1]);
    });
});
