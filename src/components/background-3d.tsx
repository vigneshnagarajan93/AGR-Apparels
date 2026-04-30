"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Preload } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractFabric({
  position,
  scale,
  color,
  speed,
  distort,
  offset,
  scrollBehavior
}: {
  position: [number, number, number],
  scale: number,
  color: string,
  speed: number,
  distort: number,
  offset: number,
  scrollBehavior: 'hero' | 'legacy' | 'background'
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const progress = scrollY / (document.body.scrollHeight - height);
      const t = state.clock.elapsedTime;

      meshRef.current.rotation.y = t * 0.1 * speed + offset;
      meshRef.current.rotation.x = t * 0.05 * speed;

      // Scrollytelling Choreography based on behavior type
      if (scrollBehavior === 'hero') {
        // Hero element moves out and expands as you scroll down
        meshRef.current.position.y = THREE.MathUtils.lerp(position[1], position[1] + 5, progress * 2);
        meshRef.current.position.x = THREE.MathUtils.lerp(position[0], position[0] - 2, progress * 2);
        const currentScale = THREE.MathUtils.lerp(scale, scale * 0.5, progress * 2);
        meshRef.current.scale.set(currentScale, currentScale, currentScale);
      } else if (scrollBehavior === 'legacy') {
        // Legacy element swoops in as you reach the middle
        const visibleProgress = Math.max(0, Math.min(1, (progress - 0.2) * 2));
        meshRef.current.position.y = THREE.MathUtils.lerp(position[1] - 8, position[1], visibleProgress);
        meshRef.current.position.x = THREE.MathUtils.lerp(position[0] + 5, position[0], visibleProgress);
        const currentScale = THREE.MathUtils.lerp(0.1, scale, visibleProgress);
        meshRef.current.scale.set(currentScale, currentScale, currentScale);
      } else {
        // Background element slowly floats
        meshRef.current.position.y = position[1] + Math.sin(t * 0.5 + offset) * 0.5 + progress * 2;
        meshRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
        <torusKnotGeometry args={[1.2, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1.5}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          metalness={0.3}
          roughness={0.2}
          distort={distort}
          speed={speed}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e6d5c3" />
        <Environment preset="city" />

        {/* Main large element */}
        <AbstractFabric position={[2, 0, -2]} scale={1.5} color="#4F6F52" speed={1} distort={0.5} offset={0} scrollBehavior="hero" />

        {/* Smaller secondary element */}
        <AbstractFabric position={[-3, 1, -4]} scale={1.2} color="#9EAC90" speed={1.5} distort={0.6} offset={Math.PI / 2} scrollBehavior="legacy" />

        {/* Subtle background element */}
        <AbstractFabric position={[0, -3, -6]} scale={2.5} color="#f7efe5" speed={0.5} distort={0.3} offset={Math.PI} scrollBehavior="background" />

        <Preload all />
      </Canvas>
    </div>
  );
}
