const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const COLORS = {
  primary: '215, 232, 160',
  accent: '248, 255, 220',
  deep: '200, 218, 130',
};

const CLUSTER_SEEDS = [
  { x: 0.14, y: 0.24 },
  { x: 0.38, y: 0.18 },
  { x: 0.62, y: 0.3 },
  { x: 0.86, y: 0.22 },
  { x: 0.26, y: 0.58 },
  { x: 0.54, y: 0.54 },
  { x: 0.76, y: 0.7 },
];

const ICON_TARGETS = {
  document: 12,
  check: 10,
  scope: 10,
};

const SPEED_FACTOR = 0.7;

const DEPTH_LAYERS = [
  { depth: 0.18, density: 1.2, speed: 0.19, opacity: 0.2, radius: [0.8, 1.2], connect: 0.8 },
  { depth: 0.4, density: 1.05, speed: 0.32, opacity: 0.3, radius: [1.1, 1.7], connect: 0.92 },
  { depth: 0.62, density: 0.88, speed: 0.46, opacity: 0.4, radius: [1.5, 2.2], connect: 1.02 },
  { depth: 0.84, density: 0.68, speed: 0.62, opacity: 0.5, radius: [2, 2.9], connect: 1.14 },
  { depth: 1, density: 0.45, speed: 0.76, opacity: 0.58, radius: [2.5, 3.6], connect: 1.24 },
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function drawDocument(context, x, y, size, alpha, elapsed, phase) {
  const pulse = 0.93 + Math.sin(elapsed * 1.25 + phase) * 0.07;
  const scale = size * 2.6 * pulse;
  const pageW = scale * 0.52;
  const pageH = scale * 0.66;

  context.save();
  context.translate(x, y);
  context.rotate(-0.12);
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.fillStyle = `rgba(${COLORS.accent}, ${alpha * 0.22})`;
  context.lineWidth = Math.max(1, scale * 0.12);

  context.beginPath();
  context.moveTo(-pageW / 2 + scale * 0.08, -pageH / 2);
  context.lineTo(pageW / 2 - scale * 0.08, -pageH / 2);
  context.quadraticCurveTo(pageW / 2, -pageH / 2, pageW / 2, -pageH / 2 + scale * 0.08);
  context.lineTo(pageW / 2, pageH / 2 - scale * 0.08);
  context.quadraticCurveTo(pageW / 2, pageH / 2, pageW / 2 - scale * 0.08, pageH / 2);
  context.lineTo(-pageW / 2 + scale * 0.08, pageH / 2);
  context.quadraticCurveTo(-pageW / 2, pageH / 2, -pageW / 2, pageH / 2 - scale * 0.08);
  context.lineTo(-pageW / 2, -pageH / 2 + scale * 0.08);
  context.quadraticCurveTo(-pageW / 2, -pageH / 2, -pageW / 2 + scale * 0.08, -pageH / 2);
  context.closePath();
  context.fill();
  context.stroke();

  context.strokeStyle = `rgba(${COLORS.primary}, ${alpha * 0.75})`;
  context.lineWidth = Math.max(0.8, scale * 0.08);
  const lineLeft = -pageW * 0.28;
  const lineWidth = pageW * 0.56;
  [0.14, 0.34, 0.54].forEach((offset) => {
    context.beginPath();
    context.moveTo(lineLeft, -pageH * 0.18 + pageH * offset);
    context.lineTo(lineLeft + lineWidth * (offset === 0.54 ? 0.55 : 1), -pageH * 0.18 + pageH * offset);
    context.stroke();
  });

  context.restore();
}

function drawCheck(context, x, y, size, alpha, elapsed, phase) {
  const pulse = 0.93 + Math.sin(elapsed * 1.3 + phase) * 0.07;
  const scale = size * 2.4 * pulse;
  const radius = scale * 0.34;

  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.fillStyle = `rgba(${COLORS.accent}, ${alpha * 0.18})`;
  context.lineWidth = Math.max(1, scale * 0.12);

  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
  context.stroke();

  context.strokeStyle = `rgba(${COLORS.primary}, ${alpha * 0.9})`;
  context.lineWidth = Math.max(1.1, scale * 0.13);
  context.beginPath();
  context.moveTo(x - radius * 0.34, y + radius * 0.02);
  context.lineTo(x - radius * 0.04, y + radius * 0.34);
  context.lineTo(x + radius * 0.42, y - radius * 0.28);
  context.stroke();

  context.restore();
}

function drawScope(context, x, y, size, alpha, elapsed, phase) {
  const pulse = 0.93 + Math.sin(elapsed * 1.2 + phase) * 0.07;
  const scale = size * 2.5 * pulse;
  const lensR = scale * 0.28;
  const handleLen = scale * 0.34;

  context.save();
  context.translate(x, y);
  context.rotate(-0.45);
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.fillStyle = `rgba(${COLORS.accent}, ${alpha * 0.16})`;
  context.lineWidth = Math.max(1, scale * 0.12);

  context.beginPath();
  context.arc(-handleLen * 0.18, -handleLen * 0.18, lensR, 0, Math.PI * 2);
  context.fill();
  context.stroke();

  context.strokeStyle = `rgba(${COLORS.primary}, ${alpha * 0.7})`;
  context.beginPath();
  context.arc(-handleLen * 0.18, -handleLen * 0.18, lensR * 0.55, 0, Math.PI * 2);
  context.stroke();

  context.strokeStyle = `rgba(${COLORS.accent}, ${Math.min(1, alpha * 1.05)})`;
  context.beginPath();
  context.moveTo(handleLen * 0.02, handleLen * 0.02);
  context.lineTo(handleLen * 0.62, handleLen * 0.62);
  context.stroke();

  context.restore();
}

export function initAuditParticles() {
  const section = document.getElementById('reviewable');
  const canvas = section?.querySelector('[data-audit-particles]');
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
    const accent = Math.random() < (layerIndex >= 3 ? 0.3 : 0.16);
    const [radiusMin, radiusMax] = layerConfig.radius;

    return {
      x,
      y,
      vx: randomBetween(-0.2, 0.2) * layerConfig.speed,
      vy: randomBetween(-0.2, 0.2) * layerConfig.speed,
      phase: Math.random() * Math.PI * 2,
      pulse: randomBetween(0.7, 1.2),
      radius: randomBetween(radiusMin, radiusMax),
      accent,
      icon: 'none',
      layerIndex,
      depth: layerConfig.depth,
      layerOpacity: layerConfig.opacity,
      layerSpeed: layerConfig.speed,
    };
  }

  function buildLayerNodes(layerIndex, layerConfig) {
    const area = width * height;
    const baseCount = Math.round(area / 24000);
    const clusterNodes = Math.round(CLUSTER_SEEDS.length * 8 * layerConfig.density);
    const total = Math.min(
      layerIndex === 0 ? 58 : 42,
      Math.max(layerIndex === 0 ? 28 : 18, Math.round((baseCount + clusterNodes) * layerConfig.density))
    );
    const layerNodes = [];

    CLUSTER_SEEDS.forEach((seed) => {
      const clusterSize = Math.round(8 * layerConfig.density);
      for (let index = 0; index < clusterSize; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.pow(Math.random(), 0.55) * Math.min(width, height) * (0.09 + layerIndex * 0.014);
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
    Object.entries(ICON_TARGETS).forEach(([iconType, count]) => {
      assignIconsEvenly(count, iconType, eligible, assigned);
    });
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
    const driftX = Math.sin(driftElapsed * 0.2 * node.pulse + node.phase) * 0.3 * node.layerSpeed;
    const driftY = Math.cos(driftElapsed * 0.17 * node.pulse + node.phase) * 0.3 * node.layerSpeed;
    node.x += (node.vx + driftX) * motionScale;
    node.y += (node.vy + driftY) * motionScale;

    if (node.x < -24) node.vx = Math.abs(node.vx);
    if (node.x > width + 24) node.vx = -Math.abs(node.vx);
    if (node.y < -24) node.vy = Math.abs(node.vy);
    if (node.y > height + 24) node.vy = -Math.abs(node.vy);

    node.vx += Math.sin(driftElapsed * 0.14 + node.phase) * 0.002 * node.layerSpeed * motionScale;
    node.vy += Math.cos(driftElapsed * 0.12 + node.phase) * 0.002 * node.layerSpeed * motionScale;
    const maxSpeed = 0.32 * node.layerSpeed;
    node.vx = Math.max(-maxSpeed, Math.min(maxSpeed, node.vx));
    node.vy = Math.max(-maxSpeed, Math.min(maxSpeed, node.vy));
  }

  function shouldConnect(a, b) {
    if (a.icon !== 'none' && b.icon !== 'none' && a.icon === b.icon) return false;
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
    const frontBoost = 1 + frontDepth * 0.85;
    const hasIcon = a.icon !== 'none' || b.icon !== 'none';
    const alpha =
      strength *
      strength *
      (0.14 + a.layerOpacity * 0.3 + b.layerOpacity * 0.3) *
      0.5 *
      depthFactor *
      lineBoost *
      frontBoost *
      (hasIcon ? 1.15 : 1);
    const lineTone = a.accent || b.accent || hasIcon ? COLORS.accent : COLORS.primary;

    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.strokeStyle = `rgba(${lineTone}, ${Math.min(1, alpha)})`;
    context.lineWidth = (strength > 0.72 ? 1.2 : 0.85) * (0.68 + frontDepth * 0.8);
    context.stroke();
  }

  function drawNode(node, elapsed) {
    const pulse = 0.88 + Math.sin(elapsed * (1.05 + node.depth * 0.45) + node.phase) * 0.12;
    const radius = node.radius * pulse * (0.82 + node.depth * 0.26);
    const tone = node.accent ? COLORS.accent : COLORS.deep;
    const frontBoost = 1 + node.depth * 0.65;
    const alpha = Math.min(1, node.layerOpacity * (node.accent ? 1.06 : 0.9) * frontBoost);

    if (node.icon === 'document') {
      context.beginPath();
      context.arc(node.x, node.y, radius + 4 * node.depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.2})`;
      context.fill();
      drawDocument(context, node.x, node.y, radius, alpha, elapsed, node.phase);
      return;
    }

    if (node.icon === 'check') {
      context.beginPath();
      context.arc(node.x, node.y, radius + 4 * node.depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.18})`;
      context.fill();
      drawCheck(context, node.x, node.y, radius, alpha, elapsed, node.phase);
      return;
    }

    if (node.icon === 'scope') {
      context.beginPath();
      context.arc(node.x, node.y, radius + 4 * node.depth, 0, Math.PI * 2);
      context.fillStyle = `rgba(${COLORS.primary}, ${alpha * 0.18})`;
      context.fill();
      drawScope(context, node.x, node.y, radius, alpha, elapsed, node.phase);
      return;
    }

    context.beginPath();
    context.arc(node.x, node.y, radius + 2 * node.depth, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${alpha * 0.16})`;
    context.fill();

    context.beginPath();
    context.arc(node.x, node.y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${tone}, ${Math.min(1, alpha * 0.8)})`;
    context.fill();
  }

  function drawFrame(time) {
    context.clearRect(0, 0, width, height);

    const baseConnectDistance = Math.min(180, Math.max(104, width * 0.138));
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
      const bridgeDistance = baseConnectDistance * (0.7 + depthGap * 0.32);
      const bridgeBoost = 0.52 - layerIndex * 0.04;

      backLayer.nodes.forEach((backNode) => {
        frontLayer.nodes.forEach((frontNode) => {
          drawConnection(backNode, frontNode, bridgeDistance, 0.5 + depthGap * 0.32, bridgeBoost);
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
