import React from 'react';
import { Trophy, Award, GraduationCap, Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievements } from '../data/portfolioData';

export default function Experience() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.7 }
    });
  };

  const getAchievementIcon = (category) => {
    if (category.includes('Award')) return '🥈';
    if (category.includes('Debut')) return '🏅';
    if (category.includes('Training')) return '⚡';
    return '🎓';
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={16} />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated problem-solving agility through competitive hackathons and intensive practical software development training.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '24px' }}>
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-card achievement-card"
              onClick={triggerConfetti}
              style={{ cursor: 'pointer' }}
              title="Click to celebrate!"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="achievement-icon">{getAchievementIcon(item.category)}</span>
                <span className={`badge ${
                  item.badge.includes('Silver') ? 'badge-amber' :
                  item.badge.includes('Top 5') ? 'badge-indigo' :
                  item.badge.includes('Practical') ? 'badge-cyan' : 'badge-emerald'
                }`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
