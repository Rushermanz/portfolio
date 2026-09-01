import React from 'react';
import { ArrowRight, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="about" className="hero-section section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Bio */}
          <div>
            <div className="hero-status">
              <span className="hero-status-dot"></span>
              <span>{personalInfo.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="accent-text">{personalInfo.name}</span>
            </h1>

            <div className="hero-role">
              {personalInfo.title}
            </div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary">
                <span>View Experience & Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Contact Pills */}
            <div className="hero-contact-bar">
              <div className="contact-pill">
                <MapPin size={16} className="contact-pill-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="contact-pill">
                <Mail size={16} className="contact-pill-icon" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-pill">
                <Phone size={16} className="contact-pill-icon" />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-pill">
                <GithubIcon size={16} className="contact-pill-icon" />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-pill">
                <LinkedinIcon size={16} className="contact-pill-icon" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="stats-bar">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Executive Profile Overview Card */}
          <div className="hero-profile-card">
            <div className="profile-card-header">
              <div className="profile-avatar">AR</div>
              <div className="profile-info">
                <h3>{personalInfo.name}</h3>
                <p>Full-Stack Engineer & MCA Student</p>
              </div>
            </div>

            <div className="profile-key-details">
              <div className="key-detail-row">
                <GraduationCap size={20} className="key-detail-icon" />
                <div className="key-detail-text">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p>MES Advanced Institute of Management & Technology (2025–2027)</p>
                </div>
              </div>

              <div className="key-detail-row">
                <Briefcase size={20} className="key-detail-icon" />
                <div className="key-detail-text">
                  <h4>Student Intern @ Steyp</h4>
                  <p>Full-Stack & API Development (2023–2025)</p>
                </div>
              </div>

              <div className="key-detail-row">
                <GraduationCap size={20} className="key-detail-icon" />
                <div className="key-detail-text">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>Bharata Mata College of Commerce & Arts (2022–2025)</p>
                </div>
              </div>

              <div className="key-detail-row">
                <Award size={20} className="key-detail-icon" />
                <div className="key-detail-text">
                  <h4>2x Hackathon Podiums</h4>
                  <p>Web It Up 4.0 (2nd Place) & Web It Up 2.0 (Top 5 Finalist)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
