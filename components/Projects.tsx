
import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
            <p style={{ color: 'var(--muted-text)' }}>A selection of my recent technical work and creative experiments.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {DATA.projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid var(--card-border)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', backgroundColor: 'var(--card-bg)', overflow: 'hidden', borderBottom: '1px solid var(--card-border)' }}>
                   {project.image ? (
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                       onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                       onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                       onError={(e) => {
                         // Fallback to icon if image fails to load
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.parentElement!.innerHTML = '<div style="font-size: 3rem; opacity: 0.2;">💻</div>';
                       }}
                     />
                   ) : (
                     <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '3rem', opacity: 0.2 }}>💻</div>
                     </div>
                   )}
                </div>
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.2rem 0.6rem', 
                        backgroundColor: 'var(--accent-color)', 
                        color: 'white', 
                        borderRadius: '4px' 
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={DATA.profile.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 600, 
                      color: 'var(--accent-color)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem' 
                    }}
                  >
                    View Source Code →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
