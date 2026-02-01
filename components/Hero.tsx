
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '80px',
      background: 'linear-gradient(135deg, var(--bg-color) 0%, var(--card-bg) 100%)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem' }}
          >
            HELLO, I'M
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            {DATA.profile.name}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--muted-text)', fontWeight: 400, marginBottom: '2rem' }}
          >
            {DATA.profile.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem', opacity: 0.8 }}
          >
            {DATA.profile.shortIntro}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems:'center',justifyContent:'center' }}
          >
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                padding: '0.8rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                boxShadow: 'var(--shadow)'
              }}
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
