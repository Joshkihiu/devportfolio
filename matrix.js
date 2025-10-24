const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
  // For mobile, set canvas to cover scroll height
  if (window.innerWidth < 768) {
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
  } else {
    canvas.height = window.innerHeight;
  }
  canvas.width = window.innerWidth;
}

setCanvasSize();

// Handle resize
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setCanvasSize, 250);
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

const frameRate = isMobile ? 40 : 33;
setInterval(draw, frameRate);
