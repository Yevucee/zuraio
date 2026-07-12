const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function particleCount(width, height) {
  return Math.min(90, Math.max(36, Math.floor((width * height) / 12000)));
}

export function initControlParticles() {
  const section = document.getElementById('data-control');
  const canvas = section?.querySelector('[data-control-particles]');
  if (!section || !canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rgb = '159, 175, 82';
  const linkDistance = 150;
  const dotRadius = 2;
  const speed = reduce ? 0 : 0.28;
  const lineOpacity = 0.16;
  const dotOpacity = 0.5;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let frameId = null;
  let running = false;

  function initParticles() {
    const count = particleCount(width, height);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = section.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
    if (reduce) drawFrame();
  }

  function drawLinks() {
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist >= linkDistance) continue;
        const alpha = (1 - dist / linkDistance) * lineOpacity;
        ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  function drawDots() {
    particles.forEach((p) => {
      ctx.fillStyle = `rgba(${rgb}, ${dotOpacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function stepParticles() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    });
  }

  function drawFrame() {
    ctx.clearRect(0, 0, width, height);
    if (!reduce) stepParticles();
    drawLinks();
    drawDots();
  }

  function tick() {
    drawFrame();
    if (running) frameId = requestAnimationFrame(tick);
  }

  function start() {
    if (running) return;
    running = true;
    if (reduce) {
      drawFrame();
      return;
    }
    tick();
  }

  function stop() {
    running = false;
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  resize();

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(section);

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    },
    { threshold: 0.08 }
  );
  visibilityObserver.observe(section);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else {
      const rect = section.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) start();
    }
  });

  start();
}
