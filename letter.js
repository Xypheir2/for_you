const letterContainer = document.querySelector('.letter');
const videoOverlay = document.getElementById('video-overlay');

letterContainer.addEventListener('scroll', () => {
    if (letterContainer.scrollTop + letterContainer.clientHeight >= letterContainer.scrollHeight - 5) {
        videoOverlay.classList.add('active');
    }
});

