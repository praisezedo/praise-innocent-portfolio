"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.2]}
      performance={{ min: 0.5 }}
    >
      <Stars radius={70} depth={28} count={900} factor={3} speed={0.28} />
    </Canvas>
  );
}
