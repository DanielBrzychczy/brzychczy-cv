// Wygenerowanie dodatkowych serduszek dynamicznie
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
