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

const projects: Project[] = [
  {
    id: 'jet-engine-assembly',
    title: 'Jet Engine Assembly',
    hoverCaption: 'High-detail model of a jet engine assembly, showcasing core propulsion system components.',
    description: 'This 3D model illustrates the complexity of a jet engine with visible internal assemblies. It highlights engineering precision in turbine design and flow dynamics. Perfect for demonstrating aerospace mechanical expertise.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('jet_eng-up-Optimized.glb')
  },
  {
    id: 'straight-4-engine',
    title: 'Straight-4 Engine Piston & Crankshaft',
    hoverCaption: 'Interactive visualization of a 4-cylinder piston-crankshaft system highlighting motion dynamics.',
    description: 'A straight-four piston-crankshaft engine design capturing the fundamentals of motion transfer. The model emphasizes accuracy in alignment and component interaction. It demonstrates automotive engineering with clarity and precision.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('portfolio_wngine.glb')
  },
  {
    id: 'exhaust-manifold',
    title: 'Exhaust Manifold System',
    hoverCaption: 'Mechanical design of an exhaust manifold optimized for thermal efficiency and durability.',
    description: 'This manifold system showcases efficient routing for exhaust gases in automotive applications. The 3D design captures structural reinforcement and durability under heat stress. It represents practical design balanced with performance optimization.',
    image: '/api/placeholder/400/300',
    modelUrl: getModelPath('portfolio_exhaustmanifold.glb')
  },
];

export const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openModel3D = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="featured-projects" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-section font-orbitron font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of three flagship mechanical designs 
            demonstrating advanced engineering skills. Each model highlights precision, 
            motion dynamics, and professional-grade visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="industrial-card rounded-lg overflow-hidden cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModel3D(project.id)}
            >
              {/* Project Image or 3D Model */}
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
                  <div className="text-primary text-4xl">
                    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
                      <rect x="20" y="20" width="60" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="15" />
                      <path d="M35 35 L65 35 M35 50 L65 50 M35 65 L65 65" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.hoverCaption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for 3D model viewing */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
          <div 
            className="bg-card rounded-lg p-4 w-full max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-orbitron font-bold">{selectedProject.title}</h3>
              <button 
                onClick={closeModal}
                className="p-1 rounded-full hover:bg-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="h-[60vh]">
              {selectedProject.modelUrl ? (
                <ModelViewer
                  src={selectedProject.modelUrl}
                  alt={selectedProject.title}
                  autoRotate={true}
                  cameraControls={true}
                  className="w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-metallic">
                  <p className="text-muted-foreground">No 3D model available</p>
                </div>
              )}
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};