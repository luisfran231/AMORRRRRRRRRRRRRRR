let images = [
    'foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg',
    'foto4.jpeg', 'foto5.jpeg', 'foto6.jpeg',
    'foto7.jpeg', 'foto8.jpeg', 'foto9.jpeg'
];


let phrases = [
    'Eres mi sol en los días nublados 🌞',
    'Tu sonrisa es mi lugar favorito 💕',
    'No sabía que el amor tenía tu nombre ❤️',
    'Contigo cada momento es mágico ✨',
    'Te amo muchooo mi princesita hermosa 🤗',
    'Gracias por existir, mi amor 💖',
    'Eres la canción más bonita que suena en mí 🎵',
    'Mi hogar está donde estés tú 🏡',
    'Siempre tú, mi princesita 👑'
];

let index = 0;

function showImage() {
    document.getElementById('carousel-image').src = images[index];
}


function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function showModal() {
    const modal = document.getElementById('modal');
    const modalText = modal.querySelector('p');
    modalText.textContent = phrases[index];
    modal.style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

// Animación de fondo
const shapes = ['❤️', '🌸', '🌺', '💕', '🌷', '💫'];

function createFallingShape() {
    const span = document.createElement('span');
    span.classList.add('falling');
    span.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 24 + 16;
    span.style.fontSize = `${size}px`;
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (Math.random() * 5 + 6) + 's';
    span.style.opacity = Math.random() * 0.5 + 0.5;
    span.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 12000);
}

setInterval(createFallingShape, 500);

// (Opcional) cambiar imagen automáticamente
setInterval(nextImage, 20000);
