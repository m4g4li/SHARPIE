document.addEventListener('DOMContentLoaded', () => {
    const allHoverImages = document.querySelectorAll('.moreimage div img');
    const imgContainer = document.querySelector('.image img');

    allHoverImages[0].parentElement.classList.add('active');

    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            imgContainer.src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('active');
        });
    });

    function resetActiveImg() {
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }
});