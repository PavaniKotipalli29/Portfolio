
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about',  'skills', 'projects', 'education','internships', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Internships', id: 'internships' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow)' : 'none',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent-color)', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PK.
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '2rem' }} className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 500,
                    color: activeSection === link.id ? 'var(--accent-color)' : 'var(--text-color)',
                    opacity: activeSection === link.id ? 1 : 0.7,
                    transition: 'all 0.3s'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'var(--card-bg)', padding: '0.25rem', borderRadius: '20px', border: '1px solid var(--card-border)' }}>
            {(['light', 'dark', 'system'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  textTransform: 'capitalize',
                  backgroundColor: theme === t ? 'var(--accent-color)' : 'transparent',
                  color: theme === t ? (resolvedTheme === 'dark' ? '#000' : '#fff') : 'var(--muted-text)',
                  transition: 'all 0.3s'
                }}
              >
                {t === 'system' ? 'OS' : t}
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
