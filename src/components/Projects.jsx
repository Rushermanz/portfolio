import React, { useState } from 'react';
import { Layers, ExternalLink, CheckCircle2, BarChart2, CloudRain, ShoppingBag, Landmark } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack Web', 'Data & Analytics', 'System Design'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'student-analyzer':
        return <BarChart2 size={24} color="#818cf8" />;
      case 'digital-ration':
        return <Landmark size={24} color="#f59e0b" />;
      case 'weather-app':
        return <CloudRain size={24} color="#06b6d4" />;
      case 'footwear-ecommerce':
        return <ShoppingBag size={24} color="#10b981" />;
      default:
        return <Layers size={24} color="#818cf8" />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={16} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of applications across full-stack web platforms, data analysis pipelines, and digital architecture concepts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div>
                <div className="project-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {getProjectIcon(project.id)}
                    </div>
                    <span className={`badge ${
                      project.badge.includes('Concept') ? 'badge-amber' :
                      project.badge.includes('Analytics') ? 'badge-indigo' :
                      project.badge.includes('E-Commerce') ? 'badge-emerald' : 'badge-cyan'
                    }`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                {/* Key Highlights */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                    Key Engineering Highlights:
                  </div>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="project-highlight-item">
                        <CheckCircle2 size={15} className="project-highlight-dot" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
