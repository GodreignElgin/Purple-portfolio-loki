import {
  Activity,
  BarChart2,
  Box,
  Camera,
  Car,
  Layers,
  Monitor,
  Plane,
  Settings,
  Users,
  Wrench,
  Zap
} from 'lucide-react';

const skillIcons = [
  { icon: <Box size={32} />, label: '3D Modeling' },
  { icon: <Layers size={32} />, label: 'Assemblies' },
  { icon: <Settings size={32} />, label: 'CAD Design' },
  { icon: <Activity size={32} />, label: 'Simulation' },
  { icon: <Zap size={32} />, label: 'Prototyping' },
  { icon: <Wrench size={32} />, label: 'DFM' },
  { icon: <Car size={32} />, label: 'Automotive' },
  { icon: <Plane size={32} />, label: 'Aeronautics' },
  { icon: <BarChart2 size={32} />, label: 'Efficiency' },
  { icon: <Camera size={32} />, label: 'Photography' },
  { icon: <Monitor size={32} />, label: 'Visualization' },
  { icon: <Users size={32} />, label: 'Collaboration' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Bio */}
          <div className="space-y-8 fade-in-left">
            <h2 className="text-section font-orbitron font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a highly skilled mechanical engineer with expertise in <span className="text-primary font-semibold">Creo Parametric 3D modeling</span> and deep knowledge in automotive and aeronautics industries.
              </p>
              <p>
                My work focuses on <span className="text-primary font-semibold">precision, efficiency, and innovative problem-solving</span> in mechanical design. Beyond engineering, I am also a skilled photographer and video editor, with a strong ability to communicate technical concepts through creative visuals.
              </p>
            </div>
          </div>
          {/* Skills & Portrait */}
          <div className="space-y-10 fade-in-right">
            
            <div className="flex justify-center mb-8">
              {/* <div className="w-48 h-48 bg-gradient-metallic rounded-2xl shadow-2xl flex items-center justify-center">
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-32 h-32 text-primary"
                  fill="currentColor"
                >
                  
                  <circle cx="100" cy="60" r="25" />
                  <rect x="85" y="85" width="30" height="80" rx="5" />
                  <rect x="70" y="100" width="15" height="40" rx="3" />
                  <rect x="115" y="100" width="15" height="40" rx="3" />
                  <path d="M75 165 Q100 180 125 165" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div> */}
              <div className="w-48 h-48 bg-gradient-metallic rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/pic.jpeg" 
                  alt="Lokesh Balamurugan - Mechanical Engineer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Skills Icons Grid */}
            <div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-6 text-center">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
                {skillIcons.map(({ icon, label }, idx) => (
                  <div key={label} className="flex flex-col items-center group transition-transform duration-300 hover:scale-110">
                    <span className="text-primary mb-2 animate-pulse-glow group-hover:animate-none">
                      {icon}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground text-center mt-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};