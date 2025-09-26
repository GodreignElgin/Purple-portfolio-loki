import React from 'react';

export default function SimpleBackground() {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(135deg, #151525 0%, #1E1E2E 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Simple gradient circles */}
      <div style={{
        position: 'absolute',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(143,92,255,0.3) 0%, rgba(143,92,255,0) 70%)',
        top: '20%',
        left: '10%',
        filter: 'blur(40px)',
      }} />
      
      <div style={{
        position: 'absolute',
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,140,255,0.2) 0%, rgba(79,140,255,0) 70%)',
        bottom: '10%',
        right: '5%',
        filter: 'blur(50px)',
      }} />
      
      <div style={{
        position: 'absolute',
        width: '30vw',
        height: '30vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,92,255,0.25) 0%, rgba(196,92,255,0) 70%)',
        top: '40%',
        right: '20%',
        filter: 'blur(60px)',
      }} />
      
      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
    </div>
  );
}
