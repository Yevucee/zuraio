const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const COLORS = {
  primary: '215, 232, 160',
  accent: '248, 255, 220',
  deep: '200, 218, 130',
};

const CLUSTER_SEEDS = [
  { x: 0.18, y: 0.28 },
  { x: 0.42, y: 0.22 },
  { x: 0.68, y: 0.34 },
  { x: 0.84, y: 0.24 },
  { x: 0.3, y: 0.62 },
  { x: 0.58, y: 0.58 },
  { x: 0.78, y: 0.72 },
];

const LOCK_TARGET = 15;
const KEY_TARGET = 15;
const SPEED_FACTOR = 0.75;

const DEPTH_LAYERS = [
  { depth: 0.18, density: 1.35, speed: 0.21, opacity: 0.22, radius: [0.8, 1.3], connect: 0.82 },
  { depth: 0.4, density: 1.15, speed: 0.36, opacity: 0.34, radius: [1.2, 1.9], connect: 0.96 },
  { depth: 0.62, density: 0.95, speed: 0.51, opacity: 0.44, radius: [1.7, 2.5], connect: 1.08 },
  { depth: 0.84, density: 0.72, speed: 0.69, opacity: 0.54, radius: [2.2, 3.3], connect: 1.22 },
  { depth: 1, density: 0.48, speed: 0.84, opacity: 0.62, radius: [2.8, 4.1], connect: 1.34 },
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function drawLock(context, x, y, size, alpha, elapsed, phase) {
  const pulse = 0.92 + Math.sin(elapsed * 1.4 + phase) * 0.08;
  const scale = size * 2.8 * pulse;
  const bodyW = scale * 0.62;
  const bodyH = scale * 0.52;
  const top = y - scale * 0.08;
  const shackleR = bodyW * 0.34;

  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.fillStyle = `rgba(${COLORS.accent}, ${alpha * 0.28})`;
  context.lineWidth = Math.max(1.1, scale * 0.14);

  context.beginPath();
  context.arc(x, top - bodyH * 0.08, shackleR, Math.PI, 0, false);
  context.stroke();

  context.beginPath();
  context.moveTo(x - bodyW / 2, top);
  context.lineTo(x - bodyW / 2, top + bodyH);
  context.quadraticCurveTo(x - bodyW / 2, top + bodyH + scale * 0.12, x, top + bodyH + scale * 0.12);
  context.quadraticCurveTo(x + bodyW / 2, top + bodyH + scale * 0.12, x + bodyW / 2, top + bodyH);
  context.lineTo(x + bodyW / 2, top);
  context.closePath();
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(x, top + bodyH * 0.58, scale * 0.07, 0, Math.PI * 2);
  context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.85})`;
  context.fill();

  context.restore();
}

function drawKey(context, x, y, size, alpha, elapsed, phase) {
  const pulse = 0.92 + Math.sin(elapsed * 1.35 + phase) * 0.08;
  const scale = size * 2.5 * pulse;
  const bowR = scale * 0.3;
  const shaftLen = scale * 0.9;
  const bowX = -shaftLen * 0.32;

  context.save();
  context.translate(x, y);
  context.rotate(-0.28);
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.fillStyle = `rgba(${COLORS.accent}, ${alpha * 0.24})`;
  context.lineWidth = Math.max(1.1, scale * 0.13);

  context.beginPath();
  context.arc(bowX, 0, bowR, 0, Math.PI * 2);
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(bowX, 0, bowR * 0.42, 0, Math.PI * 2);
  context.strokeStyle = `rgba(${COLORS.primary}, ${alpha * 0.75})`;
  context.stroke();

  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.beginPath();
  context.moveTo(bowX + bowR, 0);
  context.lineTo(bowX + shaftLen, 0);
  context.stroke();

  context.beginPath();
  context.moveTo(bowX + shaftLen * 0.52, 0);
  context.lineTo(bowX + shaftLen * 0.52, scale * 0.2);
  context.moveTo(bowX + shaftLen * 0.7, 0);
  context.lineTo(bowX + shaftLen * 0.7, scale * 0.14);
  context.moveTo(bowX + shaftLen * 0.86, 0);
  context.lineTo(bowX + shaftLen * 0.86, scale * 0.22);
  context.lineTo(bowX + shaftLen, scale * 0.22);
  context.lineTo(bowX + shaftLen, 0);
  context.stroke();

  context.restore();
}

export function initControlParticles() {
  const section = document.getElementById('data-control');
  const canvas = section?.querySelector('[data-control-particles]');
  if (!section || !canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let layers = [];
  let animationFrame = 0;
  let isVisible = false;
  let isRunning = false;

  function createNode(x, y, layerIndex, layerConfig) {
    const accent = Math.random() < (layerIndex >= 3 ? 0.34 : 0.18);
    const [radiusMin, radiusMax] = layerConfig.radius;

    return {
      x,
      y,
      vx: randomBetween(-0.22, 0.22) * layerConfig.speed,
      vy: randomBetween(-0.22, 0.22) * layerConfig.speed,
      phase: Math.random() * Math.PI * 2,
      pulse: randomBetween(0.7, 1.2),
      radius: randomBetween(radiusMin, radiusMax),
      accent,
      icon: 'none',
      layerIndex,
      depth: layerConfig.depth,
      layerOpacity: layerConfig.opacity,
      layerSpeed: layerConfig.speed,
      connectScale: layerConfig.connect,
    };
  }

  function buildLayerNodes(layerIndex, layerConfig) {
    const area = width * height;
    const baseCount = Math.round(area / 22000);
    const clusterNodes = Math.round(CLUSTER_SEEDS.length * 10 * layerConfig.density);
    const total = Math.min(
      layerIndex === 0 ? 70 : 52,
      Math.max(layerIndex === 0 ? 34 : 22, Math.round((baseCount + clusterNodes) * layerConfig.density))
    );
    const layerNodes = [];

    CLUSTER_SEEDS.forEach((seed, seedIndex) => {
      const clusterSize = Math.round(10 * layerConfig.density);
      for (let index = 0; index < clusterSize; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.pow(Math.random(), 0.55) * Math.min(width, height) * (0.1 + layerIndex * 0.015);
        layerNodes.push(
          createNode(
            seed.x * width + Math.cos(angle) * spread,
            seed.y * height + Math.sin(angle) * spread,
            layerIndex,
            layerConfig
          )
        );
      }
    });

    while (layerNodes.length < total) {
      layerNodes.push(createNode(Math.random() * width, Math.random() * height, layerIndex, layerConfig));
    }

    return layerNodes;
  }

  function buildEvenSlots(count) {
    const aspect = width / Math.max(height, 1);
    const cols = Math.max(3, Math.round(Math.sqrt(count * aspect)));
    const rows = Math.ceil(count / cols);

    return Array.from({ length: count }, (_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      return {
        x: ((col + 0.5) / cols) * width,
        y: ((row + 0.5) / rows) * height,
      };
    });
  }

  function assignIconsEvenly(count, iconType, eligible, assigned) {
    const slots = buildEvenSlots(count);
    const available = eligible.filter((node) => !assigned.has(node));

    slots.forEach((slot) => {
      let best = null;
      let bestDistance = Infinity;

      available.forEach((node) => {
        if (assigned.has(node)) return;
        const distance = Math.hypot(node.x - slot.x, node.y - slot.y);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = node;
        }
      });

      if (!best) return;
      best.icon = iconType;
      assigned.add(best);
    });
  }

  function assignIcons() {
    const eligible = layers
      .flatMap((layer) => layer.nodes)
      .filter((node) => node.layerIndex >= 2);

    eligible.forEach((node) => {
      node.icon = 'none';
    });

    const assigned = new Set();
    assignIconsEvenly(LOCK_TARGET, 'lock', eligible, assigned);
    assignIconsEvenly(KEY_TARGET, 'key', eligible, assigned);
  }

  function buildNodes() {
    layers = DEPTH_LAYERS.map((layerConfig, layerIndex) => ({
      config: layerConfig,
      nodes: buildLayerNodes(layerIndex, layerConfig),
    }));
    assignIcons();
  }

  function resizeCanvas() {
    const bounds = section.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  function updateNode(node, elapsed, motionScale) {
    const driftElapsed = elapsed * SPEED_FACTOR;
    const driftX = Math.sin(driftElapsed * 0.22 * node.pulse + node.phase) * 0.34 * node.layerSpeed;
    const driftY = Math.cos(driftElapsed * 0.19 * node.pulse + node.phase) * 0.34 * node.layerSpeed;
    node.x += (node.vx + driftX) * motionScale;
    node.y += (node.vy + driftY) * motionScale;

    if (node.x < -24) node.vx = Math.abs(node.vx);
    if (node.x > width + 24) node.vx = -Math.abs(node.vx);
    if (node.y < -24) node.vy = Math.abs(node.vy);
    if (node.y > height + 24) node.vy = -Math.abs(node.vy);

    node.vx += Math.sin(driftElapsed * 0.15 + node.phase) * 0.0025 * node.layerSpeed * motionScale;
    node.vy += Math.cos(driftElapsed * 0.13 + node.phase) * 0.0025 * node.layerSpeed * motionScale;
    const maxSpeed = 0.35 * node.layerSpeed;
    node.vx = Math.max(-maxSpeed, Math.min(maxSpeed, node.vx));
    node.vy = Math.max(-maxSpeed, Math.min(maxSpeed, node.vy));
  }

  function shouldConnect(a, b) {
    if (a.icon === 'lock' && b.icon === 'lock') return false;
    return true;
  }

  function drawConnection(a, b, connectDistance, depthFactor, lineBoost) {
    if (!shouldConnect(a, b)) return;

    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.hypot(dx, dy);
    if (distance > connectDistance) return;

    const strength = 1 - distance / connectDistance;
    const frontDepth = Math.max(a.depth, b.depth);
    const frontBoost = 1 + frontDepth * 0.9;
    const alpha =
      strength *
      strength *
      (0.16 + a.layerOpacity * 0.32 + b.layerOpacity * 0.32) *
      0.55 *
      depthFactor *
      lineBoost *
      frontBoost;
    const lineTone = a.accent || b.accent ? COLORS.accent : COLORS.primary;

    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.strokeStyle = `rgba(${lineTone}, ${Math.min(1, alpha)})`;
    context.lineWidth = (strength > 0.72 ? 1.35 : 0.95) * (0.7 + frontDepth * 0.85);
    context.stroke();
  }

  function drawNode(node, elapsed) {
    const pulse = 0.88 + Math.sin(elapsed * (1.1 + node.depth * 0.5) + node.phase) * 0.12;
    const radius = node.radius * pulse * (0.82 + node.depth * 0.28);
    const tone = node.accent ? COLORS.accent : COLORS.deep;
    const frontBoost = 1 + node.depth * 0.7;
    const alpha = Math.min(1, node.layerOpacity * (node.accent ? 1.08 : 0.92) * frontBoost);

    if (node.icon === 'lock') {
      context.beginPath();
      context.arc(node.x, node.y, radius + 4 * node.depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.22})`;
      context.fill();
      drawLock(context, node.x, node.y, radius, alpha, elapsed, node.phase);
      return;
    }

    if (node.icon === 'key') {
      context.beginPath();
      context.arc(node.x, node.y, radius + 4 * node.depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.18})`;
      context.fill();
      drawKey(context, node.x, node.y, radius, alpha, elapsed, node.phase);
      return;
    }

    context.beginPath();
    context.arc(node.x, node.y, radius + 2.2 * node.depth, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${alpha * 0.18})`;
    context.fill();

    context.beginPath();
    context.arc(node.x, node.y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${Math.min(1, alpha * 0.85)})`;
    context.fill();
  }

  function drawFrame(time) {
    context.clearRect(0, 0, width, height);

    const baseConnectDistance = Math.min(190, Math.max(112, width * 0.145));
    const motionScale = reduce ? 0 : SPEED_FACTOR;
    const elapsed = time * 0.001;

    layers.forEach((layer) => {
      layer.nodes.forEach((node) => updateNode(node, elapsed, motionScale));
    });

    layers.forEach((layer) => {
      const connectDistance = baseConnectDistance * layer.config.connect;
      const nodes = layer.nodes;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          drawConnection(a, nodes[j], connectDistance, 1, 1);
        }
      }
    });

    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
      const backLayer = layers[layerIndex];
      const frontLayer = layers[layerIndex + 1];
      const depthGap = frontLayer.config.depth - backLayer.config.depth;
      const bridgeDistance = baseConnectDistance * (0.72 + depthGap * 0.35);
      const bridgeBoost = 0.58 - layerIndex * 0.04;

      backLayer.nodes.forEach((backNode) => {
        frontLayer.nodes.forEach((frontNode) => {
          drawConnection(backNode, frontNode, bridgeDistance, 0.55 + depthGap * 0.35, bridgeBoost);
        });
      });
    }

    layers.forEach((layer) => {
      layer.nodes.forEach((node) => drawNode(node, elapsed));
    });
  }

  function tick(time) {
    if (!isRunning) return;
    drawFrame(time);
    animationFrame = window.requestAnimationFrame(tick);
  }

  function start() {
    if (isRunning || reduce) return;
    isRunning = true;
    animationFrame = window.requestAnimationFrame(tick);
  }

  function stop() {
    isRunning = false;
    window.cancelAnimationFrame(animationFrame);
  }

  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
    if (isVisible || reduce) drawFrame(performance.now());
  });
  resizeObserver.observe(section);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      isVisible = entries.some((entry) => entry.isIntersecting);
      if (isVisible && document.visibilityState === 'visible') start();
      else stop();
    },
    { threshold: 0.08 }
  );
  intersectionObserver.observe(section);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isVisible) start();
    else stop();
  });

  resizeCanvas();
  drawFrame(performance.now());

  if (reduce) return;

  const initialBounds = section.getBoundingClientRect();
  isVisible = initialBounds.bottom > 0 && initialBounds.top < window.innerHeight;
  if (isVisible && document.visibilityState === 'visible') start();
}
