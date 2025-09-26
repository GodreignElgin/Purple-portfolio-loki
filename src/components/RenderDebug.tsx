import React, { useEffect, useState } from 'react';

const RenderDebug = () => {
  const [componentCount, setComponentCount] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cssLoaded, setCssLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Count rendered components
    const components = document.querySelectorAll('div, section, header, footer, aside, main, nav');
    setComponentCount(components.length);

    // Get window dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Check if CSS is loaded
    const allStyles = Array.from(document.styleSheets);
    setCssLoaded(allStyles.length > 0);

    // Check if resources are loaded
    window.addEventListener('load', () => {
      setResourcesLoaded(true);
    });

    // Log important information
    console.log('React is rendering');
    console.log('Root element:', document.getElementById('root'));
    console.log('Document body:', document.body);
    console.log('Style sheets:', document.styleSheets);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#00ff00',
        fontFamily: 'monospace',
        fontSize: '12px',
        zIndex: 9999,
        maxWidth: '300px',
        maxHeight: '200px',
        overflow: 'auto',
        border: '1px solid #00ff00',
      }}
    >
  {/* Debug Info removed */}
      <p>React v{React.version} Rendered</p>
      <p>Components: {componentCount}</p>
      <p>Window: {dimensions.width}x{dimensions.height}</p>
      <p>CSS Loaded: {cssLoaded ? 'Yes' : 'No'}</p>
      <p>Resources: {resourcesLoaded ? 'Loaded' : 'Loading'}</p>
      <p>Current Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default RenderDebug;
