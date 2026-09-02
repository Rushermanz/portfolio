import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // NOTE: Replace with the Web3Forms access key generated for agniveshr3@gmail.com at https://web3forms.com
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "acb23924-beaf-4385-8e7f-f40e3e2b024b";

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Portfolio Message from ${formData.name}`,
        from_name: formData.name,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const res = await response.json();

      if (res.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(res.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Unable to send message right now. Please email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={16} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, entry-level full-stack positions, software development opportunities, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                Contact & Details
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Reach out directly via email, phone, or view my profiles on GitHub and LinkedIn.
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={20} />
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
                style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-info-label">Phone Number</div>
                <div className="contact-info-val">{personalInfo.phone}</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-val">{personalInfo.location}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <FileText size={18} />
                <span>View Official Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald-bg)',
                  border: '1px solid var(--accent-emerald-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--accent-emerald)'
                }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Thank you for reaching out! Your message has been delivered to my inbox. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Write your message here..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {errorMessage && (
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444',
                    fontSize: '0.86rem',
                    marginBottom: '16px',
                    textAlign: 'center'
                  }}>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {copied && (
        <div className="copy-toast">
          <Check size={16} color="#10b981" />
          <span>Email address copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
