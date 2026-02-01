
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" style={{ padding: '100px 0', backgroundColor: 'rgba(0,0,0,0.01)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Education</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              left: '0', 
              top: '0', 
              bottom: '0', 
              width: '2px', 
              backgroundColor: 'var(--card-border)' 
            }}></div>

            {DATA.education.map((edu, idx) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ position: 'relative', paddingLeft: '40px', marginBottom: '3rem' }}
              >
                <div style={{ 
                  position: 'absolute', 
                  left: '-6px', 
                  top: '8px', 
                  width: '14px', 
                  height: '14px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--accent-color)',
                  border: '2px solid var(--bg-color)'
                }}></div>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{edu.period}</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{edu.degree}</h3>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--muted-text)', margin: '0.25rem 0' }}>{edu.institution}</h4>
                <p style={{ fontWeight: 600 }}>{edu.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
