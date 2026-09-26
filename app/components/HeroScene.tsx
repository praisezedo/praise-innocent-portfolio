"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingWireframeSphere() {
  return (
    <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#67e8f9"
          wireframe
          emissive="#22d3ee"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.4]}
      gl={{ antialias: true }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={1.2} color="#67e8f9" />
      <FloatingWireframeSphere />
    </Canvas>
  );
}
