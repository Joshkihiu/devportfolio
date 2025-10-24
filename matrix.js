const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

setCanvasSize();

// Handle resize
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    setCanvasSize();
    // Recalculate columns after resize
    const newColumns = Math.floor(canvas.width / fontSize);
    if (newColumns !== drops.length) {
      drops.length = newColumns;
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
      }
    }
  }, 250);
});

const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}

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

setInterval(draw, 33);
