//@ts-nocheck
// ParticleField.jsx - Interactive particle background for portfolio
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Constants for the particle field
const COUNT = 800;
const PARTICLE_SIZE = 0.02;

export default function ParticleField({ color = "#8f5cff" }) {
  // Reference to the instanced mesh
  const particles = useRef();
  
  // Create particles once with useMemo
  const particleData = useMemo(() => {
    const temp = [];
    // Create an array with random positions and speeds
    for (let i = 0; i < COUNT; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10, // x
        (Math.random() - 0.5) * 10, // y
        (Math.random() - 0.5) * 10  // z
      );
      
      // Random speeds for particle movement
      const speed = Math.random() * 0.01 + 0.002;
      const angle = Math.random() * Math.PI * 2;
      const offset = Math.random() * Math.PI * 2;
      
      temp.push({ position, speed, angle, offset });
    }
    return temp;
  }, []);
  
  // Animation loop
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    // Update each particle position
    for (let i = 0; i < COUNT; i++) {
      const { position, speed, angle, offset } = particleData[i];
      
      // Create a flowing motion
      const x = position.x + Math.sin(time * speed + offset) * 0.01;
      const y = position.y + Math.cos(time * speed + offset + angle) * 0.01;
      const z = position.z + Math.cos(time * speed + offset) * 0.01;
      
      // Set the instance matrix
      const matrix = new THREE.Matrix4();
      matrix.setPosition(x, y, z);
      particles.current.setMatrixAt(i, matrix);
    }
    
    // Update the instance
    particles.current.instanceMatrix.needsUpdate = true;
  });
  
  return (
    <instancedMesh ref={particles} args={[null, null, COUNT]}>
      <sphereGeometry args={[PARTICLE_SIZE, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
}
