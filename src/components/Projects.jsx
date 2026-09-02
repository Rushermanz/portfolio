import React, { useRef } from 'react';
import { Layers, Gamepad2, Landmark, CloudRain, ShoppingBag, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    const cardStep = 460;

    if (direction === 'right') {
      if (scrollLeft >= maxScroll - 30) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    } else {
      if (scrollLeft <= 30) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardStep, behavior: 'smooth' });
      }
    }
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'pixel-racer':
        return <Gamepad2 size={22} />;
      case 'digital-ration':
        return <Landmark size={22} />;
      case 'weather-app':
        return <CloudRain size={22} />;
      case 'footwear-ecommerce':
        return <ShoppingBag size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="accent-text">Projects & Systems</span>
          </h2>
        </div>

        <div className="projects-scroll-wrapper">
          {/* Top Right Scroll Controls */}
          <div className="projects-controls">
            <button
              onClick={() => scroll('left')}
              className="scroll-ctrl-btn"
              aria-label="Scroll Projects Left"
              title="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="scroll-ctrl-btn"
              aria-label="Scroll Projects Right"
              title="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Horizontal Scrolling Cards Container */}
          <div ref={scrollRef} className="projects-scroll-container">
            {projects.map((project) => (
              <div key={project.id} className="project-card project-card-horizontal">
                <div>
                  <div className="project-card-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="skill-category-icon">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <span className="badge badge-blue">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-subtitle">{project.subtitle}</div>
                  <p className="project-card-desc">{project.description}</p>

                  {/* Key Highlights */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                      Key Technical Deliverables:
                    </div>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="project-highlight-item">
                          <CheckCircle2 size={15} className="project-highlight-icon" />
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
      </div>
    </section>
  );
}
