"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Stars radius={80} depth={40} count={10000} factor={4} fade speed={1} />
    </Canvas>
  );
}