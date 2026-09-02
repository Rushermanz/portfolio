import React from 'react';
import { Layout, Server, Wrench, Code2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Wrench':
        return <Wrench size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">

          <h2 className="section-title">
            Skills & <span className="accent-text">Technologies</span>
          </h2>

        </div>

        <div className="grid-3" style={{ gap: '28px' }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="skill-category-title">{cat.category}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {cat.skills.length} Technologies
                  </span>
                </div>
              </div>

              <div className="skill-items-grid" style={{ gridTemplateColumns: '1fr' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-chip">
                    <div className="skill-info">
                      <span className="skill-emoji">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="badge badge-slate">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
