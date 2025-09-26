import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ModelViewer } from './ModelViewer';
import { getModelPath } from '@/lib/asset-paths';

interface Project {
  id: string;
  title: string;
  hoverCaption: string;
  description: string;
  image: string;
  modelUrl?: string;
}

const galleryProjects: Project[] = [
  {
    id: 'drone-toroidal',
    title: 'Drone with Toroidal Propeller',
    hoverCaption: 'Experimental UAV equipped with toroidal propellers for noise reduction and efficiency.',
    description: 'A futuristic UAV integrating toroidal propellers to minimize sound levels. This design enhances thrust efficiency while reducing turbulence. It demonstrates next-generation aerospace innovation.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('portfolio_drone.glb')
  },
  {
    id: 'hydrofoil-drone',
    title: 'Hydrofoil Drone',
    hoverCaption: 'Innovative drone design integrating hydrofoil principles for stability and lift efficiency.',
    description: 'A hybrid drone concept merging aerial and hydrodynamic engineering principles. The hydrofoil structure enhances lift stability when transitioning between mediums. It demonstrates creative thinking in modern UAV design.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('hydrofoilsurfboarf.glb')
  },
  {
    id: 'hybrid-drone',
    title: 'Hybrid Drone',
    hoverCaption: 'Multi-purpose drone design combining aerodynamic wings and vertical lift systems.',
    description: 'This hybrid drone merges fixed-wing aerodynamics with rotor-based lift. The dual system improves endurance and maneuverability. It reflects adaptability in modern UAV design.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('rear_wing_drone.glb')
  },
  {
    id: 'bogie-frame',
    title: 'Bogie Frame',
    hoverCaption: 'Structural bogie frame model engineered for load distribution and durability.',
    description: 'Designed for transportation systems, the bogie frame ensures balanced load handling. The model highlights robust joints and optimized geometry for stability. It demonstrates precision in structural automotive engineering.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('bogie_frame.glb')
  },
  {
    id: 'army-launcher',
    title: 'Army Launcher',
    hoverCaption: 'Conceptual launcher design built for precision, reliability, and robust engineering.',
    description: 'This launcher system model demonstrates rugged mechanical design for defense applications. It balances functional accuracy with structural strength. The concept emphasizes reliability under demanding conditions.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('launcher_army.glb')
  },
  {
    id: 'hydrofoil-surfboard',
    title: 'Hydrofoil Surfboard',
    hoverCaption: 'Cutting-edge surfboard concept using hydrofoil lift technology for high-speed gliding.',
    description: 'The surfboard integrates hydrofoil mechanics to lift above water at high speeds. It emphasizes fluid dynamics and structural stability in motion. A blend of creativity and engineering for sports innovation.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('hydrofoilsurfboarf.glb')
  },
  {
    id: 'uav',
    title: 'Unmanned Aerial Vehicle (UAV)',
    hoverCaption: 'Lightweight UAV prototype focused on endurance and versatile flight applications.',
    description: 'A UAV model designed for surveillance, mapping, or delivery applications. It emphasizes lightweight build and structural efficiency for long-duration flight. This design showcases versatility in aerospace engineering.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('uav_0.glb')
  },
  {
    id: 'shock-absorber',
    title: 'Shock Absorber',
    hoverCaption: 'Detailed absorber assembly demonstrating advanced vibration control mechanics.',
    description: 'This model shows the inner structure of a shock absorber for automotive use. It demonstrates how mechanical damping controls motion and enhances stability. A detailed representation of precision engineering for performance.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('shock_absorber.glb')
  },
  {
    id: 'fertilizer-spreader',
    title: 'Fertilizer Spreader',
    hoverCaption: 'Efficient agricultural spreader mechanism designed for uniform distribution.',
    description: 'The spreader system provides consistent fertilizer distribution across wide areas. Its mechanism highlights efficiency in rotating and dispersing components. It reflects practical design for agricultural productivity.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('spreaderasmb.glb')
  },
  {
    id: 'leaf-spring',
    title: 'Leaf Spring Suspension',
    hoverCaption: 'Classic suspension system model emphasizing flexibility and load-bearing performance.',
    description: 'A leaf spring assembly designed to absorb shocks and balance loads. The model emphasizes layered structure and energy transfer during compression. It\'s a staple in automotive design for reliability.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('leaf_spring_ass.glb')
  },
  {
    id: 'tractor-carrier',
    title: 'Tractor Carrier',
    hoverCaption: 'Heavy-duty carrier frame engineered for agricultural and industrial utility.',
    description: 'This tractor carrier design supports heavy loads for farming and industrial transport. It focuses on structural reinforcement and stability under stress. The model showcases durable design for real-world utility.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('tractor_carrier.glb')
  },
  {
    id: 'water-cleaning-robot',
    title: 'Water Surface Cleaning Robot',
    hoverCaption: 'Autonomous cleaning bot designed for efficient debris removal on water surfaces.',
    description: 'A robotics concept aimed at addressing water pollution challenges. The bot combines automation with hydrodynamic design for smooth operation. It highlights engineering solutions for environmental sustainability.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('water_surface_cleaning_bot.glb')
  }
];

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-section font-orbitron font-bold text-foreground mb-4">
            Design <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse collection of engineering models spanning 
            automotive, aerospace, industrial, and conceptual designs. 
            This gallery emphasizes creativity, technical accuracy, 
            and interactive 3D presentation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryProjects.map((project, index) => (
            <div
              key={project.id}
              className="industrial-card rounded-lg overflow-hidden cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Thumbnail */}
              <div className="relative w-full h-48 bg-gradient-metallic flex items-center justify-center">
                {project.modelUrl ? (
                  <ModelViewer
                    src={project.modelUrl}
                    alt={project.title}
                    autoRotate={true}
                    cameraControls={true}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="text-primary text-2xl">
                    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
                      <rect x="25" y="25" width="50" height="50" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="10" />
                      <path d="M30 30 L70 30 M30 45 L70 45 M30 60 L70 60" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="font-orbitron font-bold text-sm text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {project.hoverCaption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal/Lightbox would go here */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="industrial-card max-w-2xl w-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[60vh] bg-gradient-metallic flex items-center justify-center">
                {selectedProject.modelUrl ? (
                  <ModelViewer
                    src={selectedProject.modelUrl}
                    alt={selectedProject.title}
                    autoRotate={true}
                    cameraControls={true}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="text-primary text-6xl">
                    <svg viewBox="0 0 100 100" className="w-24 h-24" fill="currentColor">
                      <rect x="20" y="20" width="60" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="15" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setSelectedProject(null)}
                    className="btn-industrial"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};