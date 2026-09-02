import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { Layers, Gamepad2, Landmark, CloudRain, ShoppingBag, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const COPIES = 5;
const MIDDLE_COPY_INDEX = 2; // Middle index: 0, 1, [2], 3, 4

export default function Projects() {
  const scrollRef = useRef(null);
  const isNormalizingRef = useRef(false);
  const scrollEndTimerRef = useRef(null);

  // Duplicate the projects array across 5 copies for seamless infinite scrolling
  const displayProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    return Array.from({ length: COPIES }).flatMap((_, copyIndex) =>
      projects.map((project) => ({
        ...project,
        uniqueKey: `copy-${copyIndex}-${project.id}`,
      }))
    );
  }, []);

  const getStep = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.children.length < 2) return 464;
    const card0 = container.children[0];
    const card1 = container.children[1];
    const diff = card1.offsetLeft - card0.offsetLeft;
    return diff > 50 ? diff : card0.offsetWidth + 24;
  }, []);

  const getSetWidth = useCallback(() => {
    if (!projects || projects.length === 0) return 0;
    return getStep() * projects.length;
  }, [getStep]);

  // Keep scroll position within the middle copy range seamlessly
  const normalizeScrollPosition = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !projects || projects.length === 0) return;

    const setWidth = getSetWidth();
    if (setWidth <= 0) return;

    const currentScroll = container.scrollLeft;
    const middleStart = setWidth * MIDDLE_COPY_INDEX;
    const middleEnd = setWidth * (MIDDLE_COPY_INDEX + 1);

    // Scrolled past the middle copy into copy 3 or 4
    if (currentScroll >= middleEnd) {
      isNormalizingRef.current = true;
      const setsToShift = Math.floor((currentScroll - middleStart) / setWidth);
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = currentScroll - (setsToShift * setWidth);
      requestAnimationFrame(() => {
        container.style.scrollBehavior = '';
        isNormalizingRef.current = false;
      });
    }
    // Scrolled before the middle copy into copy 0 or 1
    else if (currentScroll < middleStart) {
      isNormalizingRef.current = true;
      const setsToShift = Math.ceil((middleStart - currentScroll) / setWidth);
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = currentScroll + (setsToShift * setWidth);
      requestAnimationFrame(() => {
        container.style.scrollBehavior = '';
        isNormalizingRef.current = false;
      });
    }
  }, [getSetWidth]);

  // Initialize scroll position to the middle copy on mount and resize
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !projects || projects.length === 0) return;

    const initPosition = () => {
      const setWidth = getSetWidth();
      if (setWidth > 0) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = setWidth * MIDDLE_COPY_INDEX;
        requestAnimationFrame(() => {
          container.style.scrollBehavior = '';
        });
      }
    };

    const frameId = requestAnimationFrame(initPosition);
    window.addEventListener('resize', initPosition);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', initPosition);
    };
  }, [getSetWidth]);

  // Listen for scroll end to seamlessly normalize position without interrupting smooth animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      normalizeScrollPosition();
    };

    const handleScroll = () => {
      if (isNormalizingRef.current) return;
      clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(handleScrollEnd, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('scrollend', handleScrollEnd, { passive: true });

    return () => {
      clearTimeout(scrollEndTimerRef.current);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [normalizeScrollPosition]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const step = getStep();

    container.style.scrollBehavior = 'smooth';
    if (direction === 'right') {
      container.scrollBy({ left: step });
    } else {
      container.scrollBy({ left: -step });
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
    <section id="projects" className="section section-alt section-visible">
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
            {displayProjects.map((project) => (
              <div key={project.uniqueKey} className="project-card project-card-horizontal">
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
