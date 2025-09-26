import * as THREE from 'three'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

// Simple glassmorphic sphere component
function GlassSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color="#8a2be2" 
        roughness={0.1} 
        metalness={0.2} 
        transmission={0.9} 
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function Demo3D() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <GlassSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
