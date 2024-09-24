const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input');
    
    stars.forEach((star) => {
        star.addEventListener('change', function() {
            const rating = this.value;
            alert(`Calificaste la polera con ${rating} estrellas`);
        });
    });
});
const images = document.querySelectorAll('.card-img-top');

images.forEach(image => {
    const originalSrc = image.src; // Guarda la imagen original

    image.addEventListener('mouseover', () => {
        image.src = image.getAttribute('data-hover'); // Cambia a la imagen de hover
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc; // Restaura la imagen original
    });
});