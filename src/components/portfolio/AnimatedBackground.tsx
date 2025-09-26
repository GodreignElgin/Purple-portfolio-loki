import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Industrial Grid Pattern */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      
      {/* Wireframe Background */}
      <div className="absolute inset-0 wireframe-bg" />
      
      {/* Blueprint Lines */}
      <div className="absolute inset-0 blueprint-lines opacity-30" />
      
      {/* Parallax Layer */}
      <div ref={parallaxRef} className="absolute inset-0 parallax-layer">
        {/* Rotating Gears */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-rotate text-primary"
            fill="currentColor"
          >
            <path d="M50 10 L54 20 L46 20 Z M90 50 L80 54 L80 46 Z M50 90 L46 80 L54 80 Z M10 50 L20 46 L20 54 Z" />
            <circle cx="50" cy="50" r="8" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-16 w-24 h-24 opacity-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-rotate text-primary"
            style={{ animationDirection: 'reverse', animationDuration: '15s' }}
            fill="currentColor"
          >
            <path d="M50 5 L55 25 L45 25 Z M95 50 L75 55 L75 45 Z M50 95 L45 75 L55 75 Z M5 50 L25 45 L25 55 Z" />
            <circle cx="50" cy="50" r="12" />
          </svg>
        </div>
        
        <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-rotate text-primary"
            style={{ animationDuration: '25s' }}
            fill="currentColor"
          >
            <path d="M50 15 L52 30 L48 30 Z M85 50 L70 52 L70 48 Z M50 85 L48 70 L52 70 Z M15 50 L30 48 L30 52 Z" />
            <circle cx="50" cy="50" r="6" />
          </svg>
        </div>
      </div>
      
      {/* Sliding Diagonal Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1 h-1 bg-primary opacity-20 animate-slide-diagonal" />
        <div 
          className="absolute top-0 left-0 w-1 h-1 bg-primary opacity-20 animate-slide-diagonal"
          style={{ animationDelay: '5s' }}
        />
        <div 
          className="absolute top-0 left-0 w-1 h-1 bg-primary opacity-20 animate-slide-diagonal"
          style={{ animationDelay: '10s' }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;