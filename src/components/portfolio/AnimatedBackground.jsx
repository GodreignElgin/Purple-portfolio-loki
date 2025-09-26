//@ts-nocheck
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import ParticleField from './ParticleField';

/**
 * Animated background component with floating elements
 */
export default function AnimatedBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -10, pointerEvents: 'none', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#5c8fff" />
          
          {/* Simple animated box with glassmorphic effect */}
          <Box position={[-2, -1, 0]} color="#8f5cff" />
          <Box position={[2, 1, -2]} color="#5c8fff" rotation={[0.5, 0.5, 0]} />
          
          {/* Add particle field for extra visual appeal */}
          <ParticleField color="#c45cff" />
          
          <Environment preset="city" background={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/**
 * Basic rotating box component with improved animation
 */
function Box({ position, color, rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  // Use useFrame for smoother animation
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation based on elapsed time
    meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.3;
    meshRef.current.rotation.z = rotation[2] + Math.cos(state.clock.getElapsedTime() * 0.1) * 0.1;
    
    // Gentle floating motion
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime()) * 0.001;
  });
  
  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial 
        color={color} 
        opacity={0.7}
        transparent
        roughness={0.1} 
        metalness={0.3}
        transmission={0.2}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
