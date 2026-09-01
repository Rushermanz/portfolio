import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={16} />
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in collaborating, recruiting, or discussing software projects? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Copy Email */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
                Let's Build Something Great
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Whether you have a question, an opportunity, or a collaborative vision, I'd love to connect with you.
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div className="contact-info-label">Direct Email</div>
                <div className="contact-info-val" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {personalInfo.email}
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="btn btn-secondary"
                style={{ padding: '8px 12px', fontSize: '0.8rem' }}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-val">{personalInfo.location}</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <FileText size={18} />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Working Message Form */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'var(--accent-emerald)'
                }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for reaching out, {formData.name || 'there'}. I'll get back to you promptly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Hi Agnivesh, I'd like to discuss a project..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {copied && (
        <div className="copy-toast">
          <Check size={18} />
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
