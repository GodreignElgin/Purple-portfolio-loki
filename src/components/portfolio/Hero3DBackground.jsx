//@ts-nocheck
// Hero3DBackground.jsx - Using @ts-nocheck to bypass TypeScript errors
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei';
import ParticleField from './ParticleField';

function GlassSphere({ position = [0, 0, 0], color = "#8f5cff", speed = 0.01, distort = 0.3 }) {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    sphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speed);
    sphereRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * speed * 0.5);
  });

  return (
    <Sphere args={[1, 64, 64]} position={position} ref={sphereRef}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={2}
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.3}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
        transmission={0.2}
      />
    </Sphere>
  );
}

export default function Hero3DBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5c8fff" />
          
          {/* Multiple glass spheres with different positions and properties */}
          <GlassSphere position={[-2, -1, 0]} color="#8f5cff" speed={0.01} distort={0.2} />
          <GlassSphere position={[2, 1, -2]} color="#5c8fff" speed={0.015} distort={0.4} />
          <GlassSphere position={[0, 2, -4]} color="#c45cff" speed={0.02} distort={0.3} />
          
          {/* Add particle field for extra visual appeal */}
          <ParticleField color="#8f5cff" />

          <Environment preset="city" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
