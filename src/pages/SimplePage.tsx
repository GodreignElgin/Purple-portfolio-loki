import React from 'react';

export default function SimplePage() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #151525 0%, #1E1E2E 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #8F5CFF, #C45CFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Lokesh Balamurugan
      </h1>
      
      <h2 style={{ color: '#E6E6F5', marginBottom: '2rem' }}>
        Mechanical Engineer | 3D Design Specialist
      </h2>
      
      <p style={{ maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6, color: '#C4C4E0' }}>
        Professional engineer specializing in Creo Parametric, NX CAD, 
        automotive & aeronautical design with a passion for innovation
        and efficient design solutions.
      </p>
      
      <button style={{
        background: 'linear-gradient(135deg, #8F5CFF, #4F8CFF)',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '4px',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(143, 92, 255, 0.3)'
      }}>
        Explore My Designs
      </button>
      
      <div style={{ position: 'fixed', bottom: '10px', textAlign: 'center', opacity: 0.7 }}>
        Simple Page - Debugging Version
      </div>
    </div>
  );
}
