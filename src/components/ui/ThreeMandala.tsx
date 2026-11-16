'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeMandala() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number = 0;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create Sacred Geometry Gold Particle Group
      const group = new THREE.Group();
      scene.add(group);

      // Gold particles color palette
      const goldColors = [
        new THREE.Color(0xb68a42), // Antique Gold
        new THREE.Color(0xd8bc83), // Soft Gold
        new THREE.Color(0xe8d5a0), // Light Gold
        new THREE.Color(0x173d32), // Forest Green accent
      ];

      // Geometry 1: Outer Celestial Ring
      const ringCount = 280;
      const ringPos = new Float32Array(ringCount * 3);
      const ringColorArray = new Float32Array(ringCount * 3);

      for (let i = 0; i < ringCount; i++) {
        const theta = (i / ringCount) * Math.PI * 2;
        const radius = 8 + Math.sin(i * 6) * 0.4;
        ringPos[i * 3] = Math.cos(theta) * radius;
        ringPos[i * 3 + 1] = Math.sin(theta) * radius;
        ringPos[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

        const c = goldColors[i % 3];
        ringColorArray[i * 3] = c.r;
        ringColorArray[i * 3 + 1] = c.g;
        ringColorArray[i * 3 + 2] = c.b;
      }

      const ringGeom = new THREE.BufferGeometry();
      ringGeom.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
      ringGeom.setAttribute('color', new THREE.BufferAttribute(ringColorArray, 3));

      const ringMat = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
      });

      const ringPoints = new THREE.Points(ringGeom, ringMat);
      group.add(ringPoints);

      // Geometry 2: Inner Sacred Octagonal Mandala
      const innerCount = 200;
      const innerPos = new Float32Array(innerCount * 3);
      const innerColorArray = new Float32Array(innerCount * 3);

      for (let i = 0; i < innerCount; i++) {
        const u = i / innerCount;
        const angle = u * Math.PI * 8;
        const r = 2.5 + Math.sin(angle * 4) * 2.5;

        innerPos[i * 3] = Math.cos(angle) * r;
        innerPos[i * 3 + 1] = Math.sin(angle) * r;
        innerPos[i * 3 + 2] = Math.cos(angle * 2) * 1.2;

        const c = goldColors[(i + 1) % 4];
        innerColorArray[i * 3] = c.r;
        innerColorArray[i * 3 + 1] = c.g;
        innerColorArray[i * 3 + 2] = c.b;
      }

      const innerGeom = new THREE.BufferGeometry();
      innerGeom.setAttribute('position', new THREE.BufferAttribute(innerPos, 3));
      innerGeom.setAttribute('color', new THREE.BufferAttribute(innerColorArray, 3));

      const innerMat = new THREE.PointsMaterial({
        size: 0.16,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
      });

      const innerPoints = new THREE.Points(innerGeom, innerMat);
      group.add(innerPoints);

      // Interactive mouse/touch sway
      let targetRotX = 0;
      let targetRotY = 0;

      const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        let clientX = 0;
        let clientY = 0;
        if ('touches' in e && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if ('clientX' in e) {
          clientX = e.clientX;
          clientY = e.clientY;
        }
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;
        targetRotY = x * 0.35;
        targetRotX = -y * 0.25;
      };

      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('touchmove', handlePointerMove, { passive: true });

      // Resize observer
      const handleResize = () => {
        if (!container || !renderer) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      // Smooth Animation loop
      let clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Continuous delicate celestial rotation
        ringPoints.rotation.z = elapsedTime * 0.08;
        innerPoints.rotation.z = -elapsedTime * 0.12;
        group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

        // Subtle pulsing scale
        const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
        group.scale.set(scale, scale, scale);

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        if (renderer && container) {
          try {
            container.removeChild(renderer.domElement);
            renderer.dispose();
          } catch {
            // ignore
          }
        }
      };
    } catch (e) {
      console.warn('Three.js canvas setup gracefully bypassed:', e);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-60 sm:opacity-85"
      aria-hidden="true"
    />
  );
}
