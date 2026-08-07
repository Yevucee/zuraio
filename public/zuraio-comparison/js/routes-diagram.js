import { getCopy } from './i18n.js';
import {
  ROUTES_HEADER_WITHOUT,
  ROUTES_HEADER_WITH,
  ROUTES_ICONS_WITHOUT,
  ROUTES_ICONS_WITH,
  ROUTES_OUTCOME_CHECK,
} from './workflow-icons.js';

const WITHOUT_DURATION = 12000;
const WITH_DURATION = 2800;
const WITH_DELAY = 400;
const STOP_PAUSE = 220;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isVerticalLayout(lane) {
  return lane.classList.contains('is-vertical');
}

function updateLayoutMode(root) {
  const vertical = window.matchMedia('(max-width: 899px)').matches;
  root.querySelectorAll('[data-route-lane]').forEach((lane) => {
    lane.classList.toggle('is-vertical', vertical);
  });
  return vertical;
}

function renderRoutesDiagram(root) {
  const copy = getCopy().home?.different;
  if (!copy) return;

  root.querySelectorAll('[data-route-lane]').forEach((lane) => {
    const key = lane.dataset.routeLane;
    const route = copy[key];
    if (!route) return;

    const badge = lane.querySelector('[data-routes-badge]');
    if (badge) {
      badge.innerHTML = key === 'without' ? ROUTES_HEADER_WITHOUT : ROUTES_HEADER_WITH;
    }

    const title = lane.querySelector('[data-routes-title]');
    if (title) title.textContent = route.title;

    const subtitle = lane.querySelector('[data-routes-subtitle]');
    if (subtitle) subtitle.textContent = route.subtitle;

    const icons = key === 'without' ? ROUTES_ICONS_WITHOUT : ROUTES_ICONS_WITH;
    const stopsEl = lane.querySelector('[data-routes-stops]');
    if (stopsEl && route.steps) {
      stopsEl.innerHTML = route.steps
        .map(
          (step, index) => `
        <li class="routes-stop" data-stop-index="${index}">
          <span class="routes-stop__marker">
            <span class="routes-stop__icon">${icons[index] || ''}</span>
          </span>
          <span class="routes-stop__label">${step.title}</span>
        </li>`,
        )
        .join('');
    }

    const outcome = lane.querySelector('[data-routes-outcome]');
    const outcomeLabel = lane.querySelector('[data-routes-outcome-label]');
    if (outcomeLabel && route.outcome) outcomeLabel.textContent = route.outcome;
    if (outcome) {
      const icon = outcome.querySelector('[data-routes-outcome-icon]');
      if (icon) icon.innerHTML = ROUTES_OUTCOME_CHECK;
    }
  });
}

function getFlowPoints(flowEl, includeOutcome = false) {
  const rect = flowEl.getBoundingClientRect();
  const points = [...flowEl.querySelectorAll('.routes-stop__marker')].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - rect.left,
      y: r.top + r.height / 2 - rect.top,
      el: el.closest('.routes-stop'),
    };
  });

  if (includeOutcome) {
    const outcomeMarker = flowEl.querySelector('.routes-stop--outcome .routes-stop__marker');
    if (outcomeMarker) {
      const r = outcomeMarker.getBoundingClientRect();
      points.push({
        x: r.left + r.width / 2 - rect.left,
        y: r.top + r.height / 2 - rect.top,
        el: outcomeMarker.closest('.routes-stop'),
        isOutcome: true,
      });
    }
  }

  return points;
}

function buildWithoutPath(points, vertical) {
  if (points.length < 2) return '';

  if (vertical) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i += 1) {
      const prev = points[i - 1];
      const curr = points[i];
      const wobble = i % 2 === 0 ? 16 : -16;
      const midY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x + wobble} ${midY}, ${curr.x - wobble} ${midY}, ${curr.x} ${curr.y}`;
    }
    const last = points[points.length - 1];
    const first = points[0];
    const loopX = last.x + 28;
    d += ` C ${loopX} ${last.y + 24}, ${loopX} ${first.y - 24}, ${first.x} ${first.y - 18}`;
    return d;
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const wobble = i % 2 === 0 ? -14 : 14;
    const midX = (prev.x + curr.x) / 2;
    d += ` C ${midX} ${prev.y + wobble}, ${midX} ${curr.y + wobble}, ${curr.x} ${curr.y}`;
  }

  const last = points[points.length - 1];
  const first = points[0];
  const loopY = Math.max(last.y, first.y) + 26;
  d += ` C ${last.x + 36} ${loopY}, ${first.x - 36} ${loopY}, ${first.x - 12} ${first.y}`;
  return d;
}

function buildWithPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    d += ` L ${points[i].x} ${points[i].y}`;
  }
  return d;
}

function syncSvgGeometry(lane) {
  const flow = lane.querySelector('[data-routes-flow]');
  const svg = lane.querySelector('[data-routes-svg]');
  const path = lane.querySelector('[data-route-path]');
  const dot = lane.querySelector('[data-route-dot]');
  if (!flow || !svg || !path || !dot) return null;

  const width = Math.max(flow.clientWidth, 1);
  const height = Math.max(flow.clientHeight, 1);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', String(width));
  svg.setAttribute('height', String(height));

  const vertical = isVerticalLayout(lane);
  const includeOutcome = lane.dataset.routeLane === 'with';
  const points = getFlowPoints(flow, includeOutcome);
  const d =
    lane.dataset.routeLane === 'without'
      ? buildWithoutPath(points, vertical)
      : buildWithPath(points);

  path.setAttribute('d', d);

  const length = path.getTotalLength();
  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  const arcLengths = points.map((point) => {
    let best = 0;
    let bestDist = Infinity;
    const samples = 140;
    for (let i = 0; i <= samples; i += 1) {
      const len = (i / samples) * length;
      const p = path.getPointAtLength(len);
      const dist = (p.x - point.x) ** 2 + (p.y - point.y) ** 2;
      if (dist < bestDist) {
        bestDist = dist;
        best = len;
      }
    }
    return { ...point, arcLength: best };
  });

  dot.setAttribute('cx', String(points[0]?.x ?? 0));
  dot.setAttribute('cy', String(points[0]?.y ?? 0));

  return { path, dot, arcLengths, length };
}

function hesitantEase(t) {
  const anchors = [
    [0, 0],
    [0.1, 0.06],
    [0.14, 0.06],
    [0.24, 0.18],
    [0.28, 0.18],
    [0.38, 0.3],
    [0.42, 0.3],
    [0.52, 0.42],
    [0.56, 0.42],
    [0.66, 0.56],
    [0.7, 0.56],
    [0.82, 0.72],
    [0.86, 0.72],
    [1, 1],
  ];

  for (let i = 0; i < anchors.length - 1; i += 1) {
    const [t0, v0] = anchors[i];
    const [t1, v1] = anchors[i + 1];
    if (t >= t0 && t <= t1) {
      const local = (t - t0) / (t1 - t0);
      return v0 + (v1 - v0) * local;
    }
  }
  return t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function setStopStates(stops, activeIndex) {
  stops.forEach((stop, index) => {
    if (!stop.el) return;
    stop.el.classList.toggle('is-active', index === activeIndex);
    stop.el.classList.toggle('is-passed', index < activeIndex);
  });
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function animateSegment({ path, dot, from, to, duration, arcLengths, easing }) {
  return new Promise((resolve) => {
    const length = path.getTotalLength();
    const start = performance.now();

    const frame = (now) => {
      const raw = Math.min(1, (now - start) / duration);
      const eased = easing(raw);
      const currentLen = from + (to - from) * eased;

      path.style.strokeDashoffset = `${length - currentLen}`;
      const point = path.getPointAtLength(currentLen);
      dot.setAttribute('cx', String(point.x));
      dot.setAttribute('cy', String(point.y));

      let activeIndex = -1;
      arcLengths.forEach((stop, index) => {
        if (currentLen + 4 >= stop.arcLength) activeIndex = index;
      });
      setStopStates(arcLengths, activeIndex);

      if (raw < 1) requestAnimationFrame(frame);
      else resolve();
    };

    requestAnimationFrame(frame);
  });
}

function animateRoute({ path, dot, arcLengths, length, duration, delay, easing, pauseAtStops }) {
  return new Promise((resolve) => {
    window.setTimeout(async () => {
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      if (!pauseAtStops || arcLengths.length === 0) {
        await animateSegment({
          path,
          dot,
          from: 0,
          to: length,
          duration,
          arcLengths,
          easing,
        });
        setStopStates(arcLengths, arcLengths.length - 1);
        resolve();
        return;
      }

      const pauseTotal = STOP_PAUSE * arcLengths.length;
      const drawTotal = Math.max(duration - pauseTotal, duration * 0.72);
      let cursor = 0;

      for (let i = 0; i < arcLengths.length; i += 1) {
        const target = arcLengths[i].arcLength;
        const segLen = Math.max(target - cursor, 1);
        const segDuration = (drawTotal * segLen) / length;
        await animateSegment({
          path,
          dot,
          from: cursor,
          to: target,
          duration: segDuration,
          arcLengths,
          easing: (t) => t,
        });
        cursor = target;
        await wait(STOP_PAUSE);
      }

      if (cursor < length) {
        await animateSegment({
          path,
          dot,
          from: cursor,
          to: length,
          duration: (drawTotal * (length - cursor)) / length,
          arcLengths,
          easing: (t) => t,
        });
      }

      setStopStates(arcLengths, arcLengths.length - 1);
      resolve();
    }, delay);
  });
}

function showCompleteState(root) {
  root.querySelectorAll('[data-route-path]').forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = '0';
  });
  root.querySelectorAll('[data-route-dot]').forEach((dot) => {
    dot.hidden = true;
  });
  root.querySelectorAll('.routes-stop').forEach((stop) => {
    stop.classList.add('is-passed');
    stop.classList.remove('is-active');
  });
  const outcome = root.querySelector('.routes-stop--outcome');
  if (outcome) outcome.classList.add('is-active');
}

function runAnimation(root) {
  if (root.dataset.routesAnimated === 'true') return;
  root.dataset.routesAnimated = 'true';

  updateLayoutMode(root);
  const lanes = [...root.querySelectorAll('[data-route-lane]')];
  const geometries = lanes.map((lane) => syncSvgGeometry(lane)).filter(Boolean);

  if (prefersReducedMotion()) {
    showCompleteState(root);
    return;
  }

  const withoutLane = lanes.find((lane) => lane.dataset.routeLane === 'without');
  const withLane = lanes.find((lane) => lane.dataset.routeLane === 'with');
  const withoutGeom = geometries.find((_, i) => lanes[i].dataset.routeLane === 'without');
  const withGeom = geometries.find((_, i) => lanes[i].dataset.routeLane === 'with');

  if (withoutGeom) {
    animateRoute({
      ...withoutGeom,
      duration: WITHOUT_DURATION,
      delay: 0,
      easing: hesitantEase,
      pauseAtStops: true,
    });
  }

  if (withGeom) {
    animateRoute({
      ...withGeom,
      duration: WITH_DURATION,
      delay: WITH_DELAY,
      easing: easeInOut,
      pauseAtStops: false,
    }).then(() => {
      const outcome = withLane?.querySelector('.routes-stop--outcome');
      if (outcome) outcome.classList.add('is-active');
    });
  }
}

function layoutAndMaybeAnimate(root) {
  updateLayoutMode(root);
  root.querySelectorAll('[data-route-lane]').forEach((lane) => syncSvgGeometry(lane));

  if (root.dataset.routesAnimated === 'true' && !prefersReducedMotion()) {
    showCompleteState(root);
  }
}

export function initRoutesDiagram() {
  const root = document.querySelector('[data-routes-diagram]');
  if (!root) return;

  renderRoutesDiagram(root);
  layoutAndMaybeAnimate(root);

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => layoutAndMaybeAnimate(root), 120);
  });

  if (!root.dataset.routesObserverBound) {
    root.dataset.routesObserverBound = 'true';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            runAnimation(root);
            observer.disconnect();
          }
        });
      },
      { threshold: [0, 0.35, 0.5, 1] },
    );
    observer.observe(root);
  }
}

export function refreshRoutesDiagram() {
  const root = document.querySelector('[data-routes-diagram]');
  if (!root) return;
  renderRoutesDiagram(root);
  layoutAndMaybeAnimate(root);
}
