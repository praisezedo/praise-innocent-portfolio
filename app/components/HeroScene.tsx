"use client";

import {Canvas} from "@react-three/fiber";
import {Float ,  Stars} from "@react-three/drei";

function FloatingSphere() {
    return (
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
            <mesh>
                <icosahedronGeometry args={[1.4 , 1]}/>
                    <meshStandardMaterial
                    color="#22d3ee"
                    wireframe
                    emissive="#0891b2"
                    emissiveIntensity={0.4}
                    />
            </mesh>
        </Float>
    )
} 


export default function HeroScene() {
    return (
        <Canvas
            camera={{position: [0,0,5], fov: 45}}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
        >
             <ambientLight intensity={0.6}/>
             <pointLight position={[4,4,4]} intensity={1.5}/>
             <Stars radius={80} depth={40} count={700} factor={4} fade speed={0.4}/>
             <FloatingSphere/>
        </Canvas>
    )
}
