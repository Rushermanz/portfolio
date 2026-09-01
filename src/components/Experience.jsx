import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={16} />
            <span>Career History</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="accent-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Hands-on internship experience in full-stack engineering alongside formal academic computer science degrees.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '36px' }}>
          {/* Left Column: Professional Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div className="skill-category-icon">
                <Briefcase size={20} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Professional Experience</h3>
            </div>

            <div className="timeline-list">
              {experience.map((item) => (
                <div key={item.id} className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">{item.role}</h4>
                      <div className="timeline-company">
                        <span>{item.company}</span>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} /> {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="timeline-period">
                      <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {item.period}
                    </div>
                  </div>

                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="timeline-bullet-item">
                        <CheckCircle2 size={16} className="timeline-bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div className="skill-category-icon">
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Education</h3>
            </div>

            <div className="timeline-list">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">{edu.degree}</h4>
                      <div className="timeline-company" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        {edu.institution}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} /> {edu.location}
                      </div>
                    </div>
                    <div className="timeline-period">
                      {edu.period}
                    </div>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <span className={`badge ${edu.status.includes('Pursuing') ? 'badge-blue' : 'badge-slate'}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
