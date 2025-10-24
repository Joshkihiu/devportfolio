const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.height = document.documentElement.scrollHeight;
  canvas.width = window.innerWidth;
}

resizeCanvas();

// Handle window resize and scroll
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 250);
});

window.addEventListener('scroll', function() {
  canvas.style.top = window.pageYOffset + 'px';
});

const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const isMobile = window.innerWidth < 768;
const fontSize = isMobile ? 14 : 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Adjust frame rate based on device
const frameRate = isMobile ? 40 : 33;
setInterval(draw, frameRate);

