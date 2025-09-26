import React from 'react';

export default function Debug() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      background: 'rgba(0,0,0,0.8)', 
      color: 'lime', 
      padding: '10px', 
      zIndex: 9999,
      fontFamily: 'monospace',
      maxWidth: '80vw',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
  {/* Debug Info removed */}
      <p>Window Size: {window.innerWidth} x {window.innerHeight}</p>
      <p>React Version: {React.version}</p>
      <p>Components Loaded: ✓</p>
      <p>User Agent: {navigator.userAgent}</p>
      <button onClick={() => console.log('Debug button clicked')}>
        Log to Console
      </button>
    </div>
  );
}
