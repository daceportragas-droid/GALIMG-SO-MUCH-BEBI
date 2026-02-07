function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const flowerSymbols = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🌹'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 800);
}

function createSparkles() {
    const sparkleContainer = document.getElementById('sparkle');
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-dot';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkleContainer.appendChild(sparkle);
    }
}

function openCard() {
    const envelope = document.getElementById('envelope');
    const cardContent = document.getElementById('cardContent');
    const music = document.getElementById('bgMusic');
    
    envelope.style.animation = 'fadeIn 0.5s reverse';
    setTimeout(() => {
        envelope.classList.add('hidden');
        cardContent.classList.remove('hidden');
        cardContent.classList.add('opened');
        createSparkles();
        
        // Play music (user interaction allows autoplay to work)
        music.play().catch(e => {
            console.log('Click anywhere to start music');
            // Fallback: play on any click if autoplay is blocked
            document.addEventListener('click', () => music.play(), { once: true });
        });
    }, 500);
}

// Initialize floating flowers when page loads
createHearts();
