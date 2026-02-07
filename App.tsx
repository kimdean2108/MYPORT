import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CompetencySection from './components/CompetencySection';
import CurriculumSection from './components/CurriculumSection';
import HistorySection from './components/HistorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'History', href: '#history' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll for sticky nav styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Sticky header state
      setScrolled(window.scrollY > 50);

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsNavOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Update active section immediately for better UX
      setActiveSection(targetId);
      
      // Smooth scroll
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className={`text-2xl font-bold tracking-tighter cursor-pointer ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            Near AI
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    scrolled 
                      ? (isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-500') 
                      : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <X className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isNavOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col items-center space-y-6 animate-[fadeIn_0.3s_ease-out]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-500'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <CompetencySection />
        <CurriculumSection />
        <HistorySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;