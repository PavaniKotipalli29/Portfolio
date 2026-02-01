
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', backgroundColor: 'rgba(0,0,0,0.02)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--muted-text)' }}>Feel free to reach out for collaborations or just a friendly hello!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                    <div>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Email</p>
                      <p style={{ fontWeight: 500 }}>{DATA.profile.email}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📱</div>
                    <div>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Phone</p>
                      <p style={{ fontWeight: 500 }}>{DATA.profile.phone}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                    <div>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Location</p>
                      <p style={{ fontWeight: 500 }}>{DATA.profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Social Profiles</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {Object.entries(DATA.profile.socials).map(([name, url]) => (
                    <motion.a 
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      style={{ 
                        width: '45px', 
                        height: '45px', 
                        borderRadius: '12px', 
                        backgroundColor: 'var(--card-bg)', 
                        border: '1px solid var(--card-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: 'var(--shadow)'
                      }}
                      title={name}
                    >
                      {name === 'linkedin' ? 'In' : name === 'github' ? 'Gh' : name === 'hackerrank' ? 'Hr' : 'Lc'}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--card-bg)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--card-border)', boxShadow: 'var(--shadow)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Your Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${errors.name ? '#ff4d4d' : 'var(--card-border)'}`, backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                  placeholder="John Doe"
                />
                {errors.name && <span style={{ color: '#ff4d4d', fontSize: '0.75rem' }}>{errors.name}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${errors.email ? '#ff4d4d' : 'var(--card-border)'}`, backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                  placeholder="john@example.com"
                />
                {errors.email && <span style={{ color: '#ff4d4d', fontSize: '0.75rem' }}>{errors.email}</span>}
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: `1px solid ${errors.message ? '#ff4d4d' : 'var(--card-border)'}`, backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', resize: 'vertical' }}
                  placeholder="Hi Pavani, I'd like to talk about..."
                />
                {errors.message && <span style={{ color: '#ff4d4d', fontSize: '0.75rem' }}>{errors.message}</span>}
              </div>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: submitted ? '#4CAF50' : 'var(--accent-color)',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'background-color 0.3s'
                }}
              >
                {submitted ? 'Message Sent! ✨' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 850px) {
          #contact .container > div > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
