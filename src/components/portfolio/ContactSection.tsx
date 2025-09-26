import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-section font-orbitron font-bold text-foreground mb-4">
            Let's Build Something <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open for collaborations, freelance projects, or full-time roles. 
            Ready to bring precision engineering and innovative design to your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="industrial-card p-8 rounded-lg fade-in-left">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 industrial-input rounded-md text-foreground"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 industrial-input rounded-md text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 industrial-input rounded-md text-foreground resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button type="submit" className="w-full btn-industrial py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in-right">
            <div className="industrial-card p-6 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-4">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:lokesh.balamurugan@example.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>lokesh.balamurugan@example.com</span>
                </a>

                <a 
                  href="https://linkedin.com/in/lokesh-balamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a 
                  href="https://github.com/lokesh-balamurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  <span>GitHub Portfolio</span>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="industrial-card p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                <h4 className="font-orbitron font-bold text-foreground">
                  Available for Projects
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new opportunities in mechanical design, 
                3D modeling, and engineering consulting projects.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="industrial-card p-6 rounded-lg">
              <h4 className="font-orbitron font-bold text-foreground mb-4">
                Project Expertise
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Automotive System Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Aerospace Component Engineering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Product Development & Prototyping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">CAD Modeling & Simulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};