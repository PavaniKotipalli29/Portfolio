
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', position: 'relative' }}>
            About Me
            <span style={{ 
              content: '""', 
              position: 'absolute', 
              bottom: '-10px', 
              left: 0, 
              width: '60px', 
              height: '4px', 
              backgroundColor: 'var(--accent-color)' 
            }}></span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow)', filter: 'grayscale(0%)' }} 
              />
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '-20px', 
                width: '100%', 
                height: '100%', 
                border: '2px solid var(--accent-color)', 
                borderRadius: '20px', 
                zIndex: -1 
              }}></div>
            </div>

            <div>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                Hi there!
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--muted-text)' }}>
                {DATA.about.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                  <h4 style={{ color: 'var(--accent-color)' }}>Problem Solving</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Strong analytical foundations</p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
                  <h4 style={{ color: 'var(--accent-color)' }}>Web Design</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Clean & modern aesthetics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #about .container > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
