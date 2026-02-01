
import React from 'react';
import { DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--card-border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} {DATA.profile.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
          <a href="#about" style={{ opacity: 0.7 }}>About</a>
          <a href="#projects" style={{ opacity: 0.7 }}>Projects</a>
          <a href="#contact" style={{ opacity: 0.7 }}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
