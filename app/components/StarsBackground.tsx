"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <Stars radius={80} depth={40} count={1500} factor={4}  speed={0.35} />
    </Canvas>
  );
}
