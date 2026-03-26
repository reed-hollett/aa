"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

// SVG "A" path from A.svg, flipped & scaled to Three.js coordinates
function createAShape(): THREE.Shape {
  const s = 1 / 140; // scale factor (SVG is ~287x264)
  const svgH = 263.422;

  // Flip Y: y → svgH - y
  function p(x: number, y: number): [number, number] {
    return [(x - 143.39) * s, (svgH - y) * s];
  }

  const shape = new THREE.Shape();

  // Outer path from SVG
  const outer: [number, number][] = [
    p(188.672, 219.938),
    p(95.9531, 219.938),
    p(83.1953, 263.422),
    p(0, 263.422),
    p(99.0078, 0),
    p(187.773, 0),
    p(286.781, 263.422),
    p(201.609, 263.422),
  ];

  shape.moveTo(...outer[0]);
  for (let i = 1; i < outer.length; i++) {
    shape.lineTo(...outer[i]);
  }
  shape.closePath();

  // Inner triangle hole
  const hole = new THREE.Path();
  const holePoints: [number, number][] = [
    p(171.602, 162.977),
    p(142.492, 68.2812),
    p(113.562, 162.977),
  ];
  hole.moveTo(...holePoints[0]);
  hole.lineTo(...holePoints[1]);
  hole.lineTo(...holePoints[2]);
  hole.closePath();
  shape.holes.push(hole);

  return shape;
}

function WireframeA() {
  const geometry = useMemo(() => {
    const shape = createAShape();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.45,
      bevelEnabled: false,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial transparent opacity={0} />
      <Edges threshold={15} color="#1a1a1a" lineWidth={1} />
    </mesh>
  );
}

// Base rotation matching the reference isometric angle
const BASE_ROTATION: [number, number, number] = [0.55, 0.6, -0.1];

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    const targetY = BASE_ROTATION[1] + pointer.x * 0.4;
    const targetX = BASE_ROTATION[0] - pointer.y * 0.3;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.05;
  });

  const scale = Math.min(viewport.width / 6, 1);

  return (
    <group ref={groupRef} scale={scale} rotation={BASE_ROTATION} position={[0, 0.4, 0]}>
      <WireframeA />
    </group>
  );
}

export default function AboutLogo3D() {
  return (
    <div className="w-full h-[50vh] md:h-[60vh] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
