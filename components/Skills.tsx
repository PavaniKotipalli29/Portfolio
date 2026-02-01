
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '100px 0', backgroundColor: 'rgba(0,0,0,0.02)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>My Skills</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {DATA.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid var(--card-border)'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-color)', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {skillGroup.items.map(skill => (
                    <span 
                      key={skill} 
                      style={{ 
                        padding: '0.4rem 0.8rem', 
                        backgroundColor: 'rgba(0, 121, 107, 0.05)', 
                        border: '1px solid rgba(0, 121, 107, 0.1)',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
