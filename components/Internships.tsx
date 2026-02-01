
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Internships: React.FC = () => {
  return (
    <section id="internships" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {DATA.internships.map(intern => (
                <div key={intern.role} style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'var(--card-bg)', 
                  borderRadius: '16px', 
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--shadow)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 600 }}>{intern.period}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem' }}>{intern.role}</h3>
                  <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{intern.company}</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{intern.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Certifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {DATA.certifications.map(cert => (
                <div key={cert} style={{ 
                  padding: '1rem 1.5rem', 
                  backgroundColor: 'var(--card-bg)', 
                  borderRadius: '12px', 
                  border: '1px solid var(--card-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>📜</span>
                  <span style={{ fontWeight: 500 }}>{cert}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ opacity: 0.7, fontStyle: 'italic' }}>And many more on Coursera & NPTEL...</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          #internships .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Internships;
