const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = window.innerWidth < 768 ? 12 : 16; // Smaller font on mobile
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

setInterval(draw, 33);
