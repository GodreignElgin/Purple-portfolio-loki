// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ParticleField from '@/components/portfolio/ParticleField';
import AnimatedBackgroundJSX from '@/components/portfolio/AnimatedBackground';
import SimpleBackground from '@/components/portfolio/SimpleBackground';
import Hero3DBackground from '@/components/portfolio/Hero3DBackground';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

// FPS Counter Component
function FPSCounter() {
  const [fps, setFps] = useState(0);
  
  useEffect(() => {
    let lastTime = Date.now();
    let frameCount = 0;

    const countFrames = () => {
      const currentTime = Date.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-green-400 px-4 py-2 rounded font-mono text-sm border border-green-400/30 z-50">
      FPS: {fps}
    </div>
  );
}

// Individual Component Viewers
const viewers = {
  particle: {
    label: '🎯 Particle Field (800 particles)',
    component: () => (
      <div className="w-full h-full relative">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <ParticleField color="#8f5cff" />
          </Suspense>
        </Canvas>
      </div>
    ),
    description: 'Shows 800 animated particles with complex sine/cosine calculations per frame'
  },
  animatedBg3D: {
    label: '🔷 AnimatedBackground.jsx (3D Canvas)',
    component: () => (
      <div className="w-full h-full relative">
        <AnimatedBackgroundJSX />
      </div>
    ),
    description: 'Three.js Canvas with 2 animated boxes + ParticleField + Environment preset'
  },
  simpleBackground: {
    label: '🎨 SimpleBackground (CSS)',
    component: () => (
      <div className="w-full h-full relative">
        <SimpleBackground />
      </div>
    ),
    description: 'Pure CSS gradients and grid - lightweight'
  },
  hero3D: {
    label: '💫 Hero3DBackground (3D Spheres)',
    component: () => (
      <div className="w-full h-full relative">
        <Hero3DBackground />
      </div>
    ),
    description: 'MeshDistortMaterial spheres + Environment + ParticleField'
  },
  combined: {
    label: '⚡ Combined (Current Setup)',
    component: () => (
      <div className="w-full h-full relative">
        <SimpleBackground />
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.7} />
              <ParticleField color="#c45cff" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    ),
    description: 'SimpleBackground + Particle Canvas overlaid (like current setup)'
  }
};

export default function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState<keyof typeof viewers>('particle');
  const [showStats, setShowStats] = useState(true);

  const currentViewer = viewers[activeComponent];

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-black/90 border-b border-purple-500/50 p-4 z-40">
        <div className="max-w-full">
          <h1 className="text-2xl font-bold text-purple-400 mb-3">
            🔬 Component Performance Showcase
          </h1>
          <p className="text-gray-400 text-sm mb-4">
            Toggle between components to see their performance impact individually
          </p>

          {/* Component Selector Buttons */}
          <div className="flex flex-wrap gap-2 mb-3">
            {Object.entries(viewers).map(([key, value]) => (
              <Button
                key={key}
                onClick={() => setActiveComponent(key as keyof typeof viewers)}
                variant={activeComponent === key ? 'default' : 'outline'}
                className={`text-xs py-1 px-2 ${
                  activeComponent === key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {value.label}
              </Button>
            ))}
          </div>

          {/* Current Component Description */}
          <div className="text-sm text-gray-400 p-2 bg-gray-800/50 rounded border border-gray-700">
            <span className="font-semibold text-purple-300">Description:</span> {currentViewer.description}
          </div>
        </div>
      </div>

      {/* Canvas/Viewer Area */}
      <div className="flex-1 relative overflow-hidden bg-gray-950">
        {currentViewer.component()}
        
        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-3 rounded border border-purple-500/50 text-xs max-w-xs">
          <p className="font-semibold text-purple-300 mb-2">ℹ️ Testing Tips:</p>
          <ul className="space-y-1 text-gray-300">
            <li>• Watch the FPS counter (top right)</li>
            <li>• Switch between components to compare</li>
            <li>• Note which ones cause lag</li>
            <li>• Check browser DevTools for GPU usage</li>
          </ul>
        </div>

        {/* FPS Counter */}
        {showStats && <FPSCounter />}
      </div>

      {/* Footer Controls */}
      <div className="bg-black/90 border-t border-purple-500/50 p-4 flex items-center justify-between">
        <div className="text-gray-400 text-sm">
          <span className="font-semibold text-purple-300">Active:</span> {currentViewer.label}
        </div>
        
        <Button
          onClick={() => setShowStats(!showStats)}
          variant="outline"
          className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700"
        >
          {showStats ? '📊 Hide Stats' : '📊 Show Stats'}
        </Button>
      </div>
    </div>
  );
}
