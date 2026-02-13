document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');

    hamburguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});
function adjustTextSize() {
    const textElements = document.querySelectorAll('.responsive-text');
    textElements.forEach(element => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            element.style.fontSize = '1.5rem';
        } else if (screenWidth >= 768) {
            element.style.fontSize = '1.25rem';
        } else {
            element.style.fontSize = '1rem';
        }
    });
}
window.addEventListener('resize', adjustTextSize);
window.addEventListener('DOMContentLoaded', adjustTextSize);
let slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
    showSlides(slidesIndex += n);
}
function currentSlide(n) {
    showSlides(slidesIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName("carrousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slidesIndex = 1}
    if (n < 1) {slidesIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidesIndex-1].style.display = "block";
    dots[slidesIndex-1].className += " active";
}
setInterval(() => {
    showSlides(slidesIndex += 1);
}, 5000);