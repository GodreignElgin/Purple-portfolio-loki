import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
// Import the Hero3DBackground component
import Hero3DBackground from './Hero3DBackground';
// Import a simple background as fallback
import SimpleBackground from './SimpleBackground';

export const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-transparent">
      {/* Try to use 3D background with SimpleBackground as fallback */}
      <SimpleBackground />
      {/* We'll enable this when we confirm the rest of the app is working
      <Suspense fallback={<SimpleBackground />}>
        <Hero3DBackground />
      </Suspense>
      */}
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 fade-in-up">
        <h1 className="text-hero font-orbitron font-bold text-foreground leading-tight drop-shadow-xl">
          <span className="block">Lokesh</span>
          <span className="block text-primary animate-pulse-glow">Balamurugan</span>
        </h1>
        <div className="space-y-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xl md:text-2xl font-inter font-medium text-muted-foreground">
            Mechanical Engineer | 3D Design Specialist | Creo Parametric | NX CAD
          </h2>
          <p className="text-lg md:text-xl font-orbitron font-bold text-primary tracking-wider">
            "Innovating in Design & Efficiency"
          </p>
        </div>
        <Button 
          onClick={scrollToProjects}
          className="btn-gradient text-lg px-8 py-3 mt-8 fade-in-up shadow-xl"
          style={{ animationDelay: '0.6s' }}
        >
          Explore My Designs
        </Button>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center glassmorphic">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Glassmorphic 3D Cube Component (optional SVG backup for hero section if 3D rendering fails)
function GlassCube({ size = 80, color1 = "#8f5cff", color2 = "#4f8cff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" style={{ filter: 'blur(0.2px)', opacity: 0.7 }}>
      <defs>
        <linearGradient id="cube-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color1} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color2} stopOpacity="0.2" />
        </linearGradient>
        <filter id="cube-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#cube-blur)">
        <rect x="10" y="10" width="60" height="60" rx="16" fill="url(#cube-gradient)" fillOpacity="0.7" />
        <rect x="20" y="20" width="40" height="40" rx="10" fill="#fff" fillOpacity="0.08" />
      </g>
      <rect x="10" y="10" width="60" height="60" rx="16" fill="none" stroke={color1} strokeOpacity="0.18" strokeWidth="3" />
    </svg>
  );
}