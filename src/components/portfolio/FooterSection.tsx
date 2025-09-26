export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-background border-t border-border/50">
      {/* Abstract background elements */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 text-primary"
          fill="currentColor"
        >
          {/* Gear/mechanical element */}
          <path d="M50 10 L54 20 L46 20 Z M90 50 L80 54 L80 46 Z M50 90 L46 80 L54 80 Z M10 50 L20 46 L20 54 Z" />
          <circle cx="50" cy="50" r="8" />
          <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Logo */}
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-foreground">
              Lokesh <span className="text-primary">Balamurugan</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Mechanical Engineer & 3D Design Specialist
            </p>
            <p className="text-muted-foreground text-sm">
              Precision engineering meets innovative design solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Me
              </a>
              <a 
                href="#featured-projects" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Featured Projects
              </a>
              <a 
                href="#gallery" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-foreground">Technologies</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Creo Parametric</div>
              <div>NX CAD</div>
              <div>SolidWorks</div>
              <div>AutoCAD</div>
              <div>ANSYS Simulation</div>
              <div>3D Printing & Prototyping</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Lokesh Balamurugan | Portfolio
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Built with precision engineering principles
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:lokesh.balamurugan@example.com"
                className="p-2 bg-card border border-border rounded-md hover:border-primary hover:shadow-glow transition-all"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/lokesh-balamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md hover:border-primary hover:shadow-glow transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/lokesh-balamurugan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md hover:border-primary hover:shadow-glow transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  );
};