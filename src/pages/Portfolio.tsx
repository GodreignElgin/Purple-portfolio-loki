import { useEffect } from 'react';
import { HeroSection } from '../components/portfolio/HeroSection';
import { AboutSection } from '../components/portfolio/AboutSection';
import { FeaturedProjects } from '../components/portfolio/FeaturedProjects';
import { ProjectGallery } from '../components/portfolio/ProjectGallery';
import { ContactSection } from '../components/portfolio/ContactSection';
import { FooterSection } from '../components/portfolio/FooterSection';
// Fix import to use default export
import AnimatedBackground from '../components/portfolio/AnimatedBackground';

const Portfolio = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Set document title
  useEffect(() => {
    document.title = "Lokesh Balamurugan | 3D Design Portfolio - Mechanical Engineer & CAD Specialist";
  }, []);
  
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ProjectGallery />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Portfolio;