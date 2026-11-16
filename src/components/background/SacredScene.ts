import * as THREE from "three";
import type { SacredConfig } from "./config";

const GOLD = 0xb68a42;
const SOFT_GOLD = 0xd8bc83;

function dotTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}

/**
 * Mounts a transparent, single-loop Three.js scene into `container`.
 * Returns a cleanup function that disposes every GPU resource.
 */
export function mountSacredScene(
  container: HTMLElement,
  cfg: SacredConfig,
  tier: "desktop" | "tablet" | "mobile",
): () => void {
  const webgl = cfg.webgl!;
  const count = Math.round(
    webgl.particles * (tier === "desktop" ? 1 : tier === "tablet" ? 0.6 : 0.4),
  );
  const m = cfg.medallion;
  const beads = webgl.beads && !!m && tier !== "mobile";

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: tier === "desktop",
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, tier === "desktop" ? 1.75 : 1.25),
  );
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;pointer-events:none";
  container.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
  const disposables: { dispose(): void }[] = [renderer];

  // Soft light motes (one draw call): few, small, drifting upward
  const tex = dotTexture();
  disposables.push(tex);
  const pos = new Float32Array(count * 3);
  const speed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = Math.random() - 0.5;
    pos[i * 3 + 1] = Math.random() - 0.5;
    speed[i] = 0.003 + Math.random() * 0.005;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const pMat = new THREE.PointsMaterial({
    map: tex,
    color: SOFT_GOLD,
    size: tier === "mobile" ? 4 : 5,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);
  disposables.push(pGeo, pMat);

  // A slow orbit of gold beads encircling the lotus medallion
  const orbit = new THREE.Group();
  if (beads) {
    const ring: number[] = [];
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2;
      ring.push(Math.cos(a), Math.sin(a), 0);
    }
    const rGeo = new THREE.BufferGeometry();
    rGeo.setAttribute("position", new THREE.Float32BufferAttribute(ring, 3));
    const rMat = new THREE.PointsMaterial({
      map: tex,
      color: GOLD,
      size: 3.5,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    orbit.add(new THREE.Points(rGeo, rMat));
    scene.add(orbit);
    disposables.push(rGeo, rMat);
  }

  const resize = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.left = -w / 2;
    camera.right = w / 2;
    camera.top = h / 2;
    camera.bottom = -h / 2;
    camera.updateProjectionMatrix();
    points.scale.set(w, h, 1);
    if (m) {
      const half = m.size / 2;
      // mirrors the CSS clamp used by the static medallion
      const px = Math.min(Math.max(m.cx * w, half + 12), w - half - 12);
      orbit.scale.set(half * 1.08, half * 1.08, 1);
      const py = Math.min(Math.max(m.cy * h, half + 12), h - half - 12);
      orbit.position.set(px - w / 2, h / 2 - py, 0);
    }
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  // Single animation loop, paused when hidden / off-screen
  let raf = 0;
  let inView = true;
  let last = performance.now();
  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speed[i] * dt * 3;
      pos[i * 3] += Math.sin(now / 4000 + i) * 0.00008;
      if (pos[i * 3 + 1] > 0.5) pos[i * 3 + 1] = -0.5;
    }
    pGeo.attributes.position.needsUpdate = true;
    orbit.rotation.z += dt * 0.02;
    renderer.render(scene, camera);
  };
  const start = () => {
    if (!raf && inView && !document.hidden) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const io = new IntersectionObserver(([e]) => {
    inView = e.isIntersecting;
    if (inView) start();
    else stop();
  });
  io.observe(container);
  const onVis = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", onVis);
  start();

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    disposables.forEach((d) => d.dispose());
    canvas.remove();
  };
}
