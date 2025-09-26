import React from 'react';

export default function BasicPage() {
  return (
    <div style={{ backgroundColor: '#121212', color: 'white', padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#8F5CFF', fontSize: '3rem' }}>Hello World</h1>
      <p>This is a basic page component</p>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{ 
          backgroundColor: '#8F5CFF', 
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
    </div>
  );
}
