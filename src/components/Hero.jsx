import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Trophy, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Full-Stack Developer",
  "Pygame & Game Systems Builder",
  "2x Hackathon Podium Finisher",
  "Python, React & Backend Engineer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Bio & CTAs */}
          <div>
            <div className="hero-status">
              <span className="hero-status-dot"></span>
              <span>{personalInfo.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="hero-typewriter-wrapper">
              <span>{displayedText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
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

            {/* Quick Stats Strip */}
            <div className="stats-bar">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value gradient-text-primary">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Dev Terminal Card */}
          <div className="hero-code-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
              </div>
              <span className="terminal-title">agnivesh_profile.py</span>
              <Sparkles size={16} color="var(--accent-cyan)" />
            </div>
            <div className="terminal-body">
              <div><span className="code-keyword">class</span> <span className="code-func">SoftwareEngineer</span>:</div>
              <div style={{ paddingLeft: '1.2rem' }}>
                <span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):
              </div>
              <div style={{ paddingLeft: '2.4rem' }}>
                self.name = <span className="code-string">"{personalInfo.name}"</span><br />
                self.degree = <span className="code-string">"BCA"</span><br />
                self.core_stack = [<br />
                &nbsp;&nbsp;<span className="code-string">"Python"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Flask"</span>,<br />
                &nbsp;&nbsp;<span className="code-string">"Pygame"</span>, <span className="code-string">"SQLite"</span>, <span className="code-string">"Java"</span><br />
                ]<br />
                self.hackathons = <span className="code-prop">&#123;</span><br />
                &nbsp;&nbsp;<span className="code-string">"podiums"</span>: <span className="code-keyword">2</span>,<br />
                &nbsp;&nbsp;<span className="code-string">"best_finish"</span>: <span className="code-string">"2nd Place"</span><br />
                <span className="code-prop">&#125;</span>
              </div>
              <br />
              <div style={{ paddingLeft: '1.2rem' }}>
                <span className="code-keyword">def</span> <span className="code-func">build_impactful_software</span>(self):
              </div>
              <div style={{ paddingLeft: '2.4rem' }}>
                <span className="code-keyword">return</span> <span className="code-string">"Transforming logic into scalable user experiences."</span>
              </div>
              <br />
              <div><span className="code-comment"># Ready to build, innovate, and solve.</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
