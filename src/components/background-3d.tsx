"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Preload } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function StoryNarrative() {
  const cottonGroup = useRef<THREE.Group>(null);
  const fabricRef = useRef<THREE.Mesh>(null);
  const shirtGroup = useRef<THREE.Group>(null);
  const boxGroup = useRef<THREE.Group>(null);
  const boxLids = useRef<THREE.Group>(null);

  // Pseudo-random generator to avoid impure Math.random() in useMemo
  const cottonPositions = useMemo(() => {
    const seed = 12345;
    const random = (i: number) => {
      const x = Math.sin(seed + i) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 15 }).map((_, i) => [
      (random(i * 3) - 0.5) * 4,
      (random(i * 3 + 1) - 0.5) * 4,
      (random(i * 3 + 2) - 0.5) * 4
    ]);
  }, []);

  useFrame((state) => {
    const scrollY = window.scrollY;
    const height = window.innerHeight;
    const maxScroll = document.body.scrollHeight - height;

    // Safety check for division by zero
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const t = state.clock.elapsedTime;

    // --- CHOREOGRAPHY PROGRESS ---
    // 0.00 - 0.25 : Cotton Bolls (Hero)
    // 0.25 - 0.50 : Fabric Plane (Legacy & Seed)
    // 0.50 - 0.75 : Folded Shirt (Categories & Capabilities)
    // 0.75 - 1.00 : Box Packing (Footer)

    if (cottonGroup.current && fabricRef.current && shirtGroup.current && boxGroup.current && boxLids.current) {

      // 1. COTTON PHASE (0.0 to 0.3)
      const cottonAlpha = 1 - THREE.MathUtils.clamp((progress - 0.2) / 0.1, 0, 1);
      cottonGroup.current.position.y = progress * 2;
      cottonGroup.current.rotation.y = t * 0.2;

      cottonGroup.current.children.forEach((child: THREE.Object3D, i) => {
        const mesh = child as THREE.Mesh;
        if (mesh.material instanceof THREE.Material) {
          mesh.material.opacity = cottonAlpha;
        }
        mesh.visible = cottonAlpha > 0;
        // Float around gently
        mesh.position.y = cottonPositions[i][1] + Math.sin(t + i) * 0.2;
        // Converge towards center as it transitions to fabric
        const convergeProgress = THREE.MathUtils.clamp(progress / 0.25, 0, 1);
        mesh.position.x = THREE.MathUtils.lerp(cottonPositions[i][0], 0, convergeProgress);
        mesh.position.z = THREE.MathUtils.lerp(cottonPositions[i][2], 0, convergeProgress);
      });

      // 2. FABRIC PHASE (0.25 to 0.6)
      const fabricIn = THREE.MathUtils.clamp((progress - 0.25) / 0.1, 0, 1);
      const fabricOut = 1 - THREE.MathUtils.clamp((progress - 0.5) / 0.1, 0, 1);
      const fabricAlpha = Math.min(fabricIn, fabricOut);

      if (fabricRef.current.material instanceof THREE.Material) {
        fabricRef.current.material.opacity = fabricAlpha;
      }
      fabricRef.current.visible = fabricAlpha > 0;
      fabricRef.current.rotation.x = -Math.PI / 2 + Math.sin(t * 0.5) * 0.2;
      fabricRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;

      // Animate fabric vertices for a waving effect
      const positions = (fabricRef.current.geometry as THREE.PlaneGeometry).attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        // Wave based on time and position
        positions.setZ(i, Math.sin(x * 2 + t) * 0.2 + Math.cos(y * 2 + t) * 0.2);
      }
      positions.needsUpdate = true;

      // 3. SHIRT PHASE (0.5 to 0.8)
      const shirtIn = THREE.MathUtils.clamp((progress - 0.5) / 0.1, 0, 1);
      const shirtAlpha = shirtIn; // Stays visible during box phase

      shirtGroup.current.position.y = THREE.MathUtils.lerp(-5, 0, shirtIn);
      shirtGroup.current.rotation.y = t * 0.5;

      shirtGroup.current.children.forEach((child: THREE.Object3D) => {
        const mesh = child as THREE.Mesh;
        if(mesh.material instanceof THREE.Material) {
           mesh.material.opacity = shirtAlpha;
           mesh.material.transparent = true;
        }
        mesh.visible = shirtAlpha > 0;
      });

      // 4. BOX PACKING PHASE (0.75 to 1.0)
      const boxIn = THREE.MathUtils.clamp((progress - 0.75) / 0.1, 0, 1);
      const boxClose = THREE.MathUtils.clamp((progress - 0.85) / 0.15, 0, 1);

      boxGroup.current.position.y = THREE.MathUtils.lerp(-8, 0, boxIn);
      // Box follows shirt rotation
      boxGroup.current.rotation.y = shirtGroup.current.rotation.y;

      boxGroup.current.children.forEach((child: THREE.Object3D) => {
         const mesh = child as THREE.Mesh;
         // Skip the lids group, handle materials of direct children
         if(mesh.material instanceof THREE.Material) {
             mesh.material.opacity = boxIn;
             mesh.material.transparent = true;
         }
         if (mesh.type !== 'Group') {
            mesh.visible = boxIn > 0;
         }
      });

      // Animate box lids closing
      if (boxLids.current) {
         const leftLid = boxLids.current.children[0];
         const rightLid = boxLids.current.children[1];

         // Lids start open (rotated out), then fold in (to 0 or Math.PI/2)
         leftLid.rotation.z = THREE.MathUtils.lerp(Math.PI / 2 + 0.5, Math.PI, boxClose);
         rightLid.rotation.z = THREE.MathUtils.lerp(-Math.PI / 2 - 0.5, -Math.PI, boxClose);
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Cotton Bolls */}
      <group ref={cottonGroup}>
        {cottonPositions.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <MeshDistortMaterial color="#f7efe5" distort={0.4} speed={2} transparent opacity={1} />
          </mesh>
        ))}
      </group>

      {/* 2. Fabric Plane */}
      <mesh ref={fabricRef} visible={false}>
        <planeGeometry args={[6, 4, 32, 32]} />
        <meshStandardMaterial color="#9EAC90" side={THREE.DoubleSide} transparent opacity={0} roughness={0.6} metalness={0.1} />
      </mesh>

      {/* 3. Folded Shirt (Abstract Representation) */}
      <group ref={shirtGroup} visible={false}>
        {/* Shirt Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 3, 0.4]} />
          <meshStandardMaterial color="#4F6F52" transparent opacity={0} roughness={0.8} />
        </mesh>
        {/* Collar */}
        <mesh position={[0, 1.6, 0.1]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#f7efe5" transparent opacity={0} roughness={0.8} />
        </mesh>
        {/* Fold lines/Details */}
        <mesh position={[0, 0, 0.21]}>
          <planeGeometry args={[0.05, 3]} />
          <meshStandardMaterial color="#2D2727" transparent opacity={0} />
        </mesh>
      </group>

      {/* 4. Shipping Box */}
      <group ref={boxGroup} visible={false}>
        {/* Base */}
        <mesh position={[0, -1.6, 0]}>
          <boxGeometry args={[3.2, 0.1, 1.2]} />
          <meshStandardMaterial color="#C19A6B" transparent opacity={0} />
        </mesh>
        {/* Back */}
        <mesh position={[0, 0, -0.55]}>
          <boxGeometry args={[3.2, 3.2, 0.1]} />
          <meshStandardMaterial color="#C19A6B" transparent opacity={0} />
        </mesh>
        {/* Front */}
        <mesh position={[0, 0, 0.55]}>
          <boxGeometry args={[3.2, 3.2, 0.1]} />
          <meshStandardMaterial color="#C19A6B" transparent opacity={0} />
        </mesh>
        {/* Left */}
        <mesh position={[-1.55, 0, 0]}>
          <boxGeometry args={[0.1, 3.2, 1.2]} />
          <meshStandardMaterial color="#C19A6B" transparent opacity={0} />
        </mesh>
        {/* Right */}
        <mesh position={[1.55, 0, 0]}>
          <boxGeometry args={[0.1, 3.2, 1.2]} />
          <meshStandardMaterial color="#C19A6B" transparent opacity={0} />
        </mesh>

        {/* Lids */}
        <group ref={boxLids} position={[0, 1.6, 0]}>
          {/* Left Lid */}
          <mesh position={[-1.55, 0, 0]}>
             <boxGeometry args={[1.6, 0.1, 1.2]} />
             <meshStandardMaterial color="#A68356" transparent opacity={0} />
          </mesh>
          {/* Right Lid */}
          <mesh position={[1.55, 0, 0]}>
             <boxGeometry args={[1.6, 0.1, 1.2]} />
             <meshStandardMaterial color="#A68356" transparent opacity={0} />
          </mesh>
        </group>
      </group>

    </group>
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

        <StoryNarrative />

        <Preload all />
      </Canvas>
    </div>
  );
}
