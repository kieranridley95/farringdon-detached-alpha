const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-bar ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


    const footer = document.querySelector(".footer");
    const canvas = document.getElementById("footerPixels");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = footer.offsetWidth;
    canvas.height = footer.offsetHeight;
  }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const colors = ["red", "white", "grey"];
    const pixels = [];

    function createPixel() {
    return {
        x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * canvas.height,
    size: Math.random() * 4 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 0.7 + 0.2
    };
  }

    for (let i = 0; i < 60; i++) {
        pixels.push(createPixel());
  }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of pixels) {
        ctx.fillStyle = p.color;
    ctx.globalAlpha = 0.7; // slightly transparent
    ctx.fillRect(p.x, p.y, p.size, p.size);

    p.y -= p.speed;
    p.x += Math.sin(p.y * 0.01) * 0.3;

    if (p.y + p.size < 0) {
        Object.assign(p, createPixel());
    p.y = canvas.height + p.size;
      }
    }

    requestAnimationFrame(animate);
  }

    animate();

