import React from 'react';
import { Cpu, Code2, Layers, Database, Wrench, Sparkles, Compass } from 'lucide-react';
import { skillCategories, currentFocus } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={22} />;
      case 'Layers':
        return <Layers size={22} />;
      case 'Database':
        return <Database size={22} />;
      case 'Wrench':
        return <Wrench size={22} />;
      default:
        return <Cpu size={22} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive technical toolkit developed across project builds, hackathons, and practical full-stack training.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid-2" style={{ gap: '28px' }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon-wrapper">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{cat.category}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {cat.skills.length} Technologies
                  </span>
                </div>
              </div>

              <div className="skill-items-grid">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-chip">
                    <div className="skill-info">
                      <span className="skill-emoji">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus Banner */}
        <div className="current-focus-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Compass size={24} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
              Current Focus & Exploration Areas
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Constantly expanding capabilities into next-generation paradigms and AI integrations.
          </p>

          <div className="focus-list">
            {currentFocus.map((focus, fIdx) => (
              <div key={fIdx} className="focus-item">
                <Sparkles size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
