/* Hamburger Menu */
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

/* Review Section Slider */
let slidePosition = 0;
const slides = document.getElementsByClassName('review');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    moveToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    moveToPrevSlide();
});

function updateSlidePosition () {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }

    slides[slidePosition].classList.add('visible');
    slides[slidePosition].classList.remove('hidden');
}

function moveToNextSlide () {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide () {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}
