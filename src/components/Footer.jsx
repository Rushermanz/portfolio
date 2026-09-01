import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: '4px' }}>
            {personalInfo.name}<span style={{ color: 'var(--accent-cyan)' }}>.dev</span>
          </div>
          <div className="footer-text">
            Crafted with React, Vite & pure CSS. Designed for high performance and sleek UX.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="footer-text" style={{ fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Agnivesh. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '8px 12px', fontSize: '0.8rem' }}
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
