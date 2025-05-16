document.addEventListener('DOMContentLoaded', () => {
    console.log("Birthday surprise loaded!");

    // Try to autoplay the birthday song
    const audio = document.getElementById('birthday-song');
    if (audio) {
        audio.play().catch(() => {
            console.log('Autoplay blocked by browser, waiting for user interaction.');
        });
    }

    // Confetti creation function
    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }

    // Spawn confetti every 300ms
    setInterval(createConfettiPiece, 300);
});
