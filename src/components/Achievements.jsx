import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={16} />
            <span>Hackathon & Competitive Milestones</span>
          </div>
          <h2 className="section-title">
            Hackathon <span className="accent-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated rapid prototyping, problem-solving, and team presentation in collegiate software engineering hackathons.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '28px' }}>
          {achievements.map((item) => (
            <div key={item.id} className="achievement-card">
              <div>
                <div className="achievement-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="skill-category-icon" style={{ background: 'var(--accent-amber-bg)', borderColor: 'var(--accent-amber-border)', color: 'var(--accent-amber)' }}>
                      <Trophy size={20} />
                    </div>
                    <div>
                      <span className="badge badge-amber">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {item.date}
                  </span>
                </div>

                <h3 className="achievement-title" style={{ marginTop: '12px' }}>{item.title}</h3>
                <div className="achievement-org">Hosted by {item.date}</div>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
