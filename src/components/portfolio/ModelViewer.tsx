import React, { useEffect, useRef } from 'react';

interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  environmentImage?: string;
  exposure?: number;
  poster?: string;
  shadowIntensity?: number;
  shadowSoftness?: number;
  cameraOrbit?: string;
  fieldOfView?: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  minFieldOfView?: string;
  maxFieldOfView?: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt,
  className = '',
  autoRotate = true,
  cameraControls = true,
  environmentImage = 'neutral',
  exposure = 1.2,
  poster,
  shadowIntensity = 1,
  shadowSoftness = 1,
  cameraOrbit = 'auto auto 25m',
  fieldOfView = 'auto',
  minCameraOrbit = 'auto auto 15m',
  maxCameraOrbit = 'auto auto 40m',
  minFieldOfView = 'auto',
  maxFieldOfView = 'auto',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import the model-viewer web component
    import('@google/model-viewer');
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <model-viewer
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        environment-image={environmentImage}
        exposure={exposure}
        poster={poster}
        shadow-intensity={shadowIntensity}
        shadow-softness={shadowSoftness}
        framing="tight"
        interaction-prompt-threshold="0"
        interaction-prompt-style="basic"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1a0033 0%, #2d1b69 25%, #4c1d95 50%, #7c3aed 75%, #2d1b69 100%)',
          backgroundSize: '400% 400%',
          animation: 'modelViewerGradient 8s ease infinite'
        }}
      ></model-viewer>
    </div>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        alt: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'environment-image'?: string;
        exposure?: number;
        poster?: string;
        'shadow-intensity'?: number;
        'shadow-softness'?: number;
        framing?: string;
        'interaction-prompt-threshold'?: string;
        'interaction-prompt-style'?: string;
        ar?: boolean;
        'ar-modes'?: string;
      }, HTMLElement>;
    }
  }
}
