import React, { useEffect, useRef, useState } from 'react';
import { Gamepad2, Zap, Trophy, Flame, Play, RotateCcw, Cpu, Layers } from 'lucide-react';
import { flagshipProject } from '../data/portfolioData';

export default function PixelRacerShowcase() {
  const canvasRef = useRef(null);
  const [isDrsActive, setIsDrsActive] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [lapTime, setLapTime] = useState("0:14.28");
  const [autoDrive, setAutoDrive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Track points (Oval circuit with chicanes)
    const trackPoints = [
      { x: 80, y: 70 },
      { x: 260, y: 50 },
      { x: 380, y: 80 },
      { x: 420, y: 150 },
      { x: 380, y: 220 },
      { x: 280, y: 240 },
      { x: 180, y: 200 },
      { x: 100, y: 230 },
      { x: 50, y: 160 },
    ];

    let progress = 0;
    let botProgress = 0.35;
    let currentSpeed = 160;
    let lapStart = Date.now();

    const carColor = '#6366f1';
    const botColor = '#f43f5e';

    const getTrackPos = (t) => {
      const n = trackPoints.length;
      const index = Math.floor(t * n) % n;
      const nextIndex = (index + 1) % n;
      const subT = (t * n) % 1;
      
      const p1 = trackPoints[index];
      const p2 = trackPoints[nextIndex];
      
      return {
        x: p1.x + (p2.x - p1.x) * subT,
        y: p1.y + (p2.y - p1.y) * subT,
        angle: Math.atan2(p2.y - p1.y, p2.x - p1.x)
      };
    };

    const render = () => {
      // Resize canvas to actual container dimensions
      const width = (canvas.width = canvas.parentElement.clientWidth);
      const height = (canvas.height = canvas.parentElement.clientHeight);

      // Scale factors
      const scaleX = width / 480;
      const scaleY = height / 280;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Asphalt Circuit
      ctx.save();
      ctx.scale(scaleX, scaleY);

      // Track Border / Run-off
      ctx.beginPath();
      ctx.moveTo(trackPoints[0].x, trackPoints[0].y);
      for (let i = 1; i < trackPoints.length; i++) {
        ctx.lineTo(trackPoints[i].x, trackPoints[i].y);
      }
      ctx.closePath();

      // Outer grass / curb
      ctx.lineWidth = 42;
      ctx.strokeStyle = '#1e293b';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Asphalt surface
      ctx.lineWidth = 32;
      ctx.strokeStyle = '#0f172a';
      ctx.stroke();

      // Centerline dashes
      ctx.setLineDash([8, 12]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. DRS Zone (Along top straight x: 100 to 300)
      ctx.beginPath();
      ctx.moveTo(trackPoints[0].x, trackPoints[0].y);
      ctx.lineTo(trackPoints[1].x, trackPoints[1].y);
      ctx.lineTo(trackPoints[2].x, trackPoints[2].y);
      ctx.lineWidth = 30;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.18)';
      ctx.stroke();

      // Finish line
      ctx.beginPath();
      ctx.moveTo(trackPoints[0].x - 15, trackPoints[0].y - 12);
      ctx.lineTo(trackPoints[0].x + 15, trackPoints[0].y + 12);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // 3. Update Positions
      const inDrsZone = progress > 0.05 && progress < 0.35;
      setIsDrsActive(inDrsZone);

      const targetSpeed = inDrsZone ? 245 : 175;
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;
      setSpeed(Math.round(currentSpeed));

      progress += (currentSpeed / 100000);
      if (progress >= 1) {
        progress = 0;
        lapStart = Date.now();
      }

      botProgress += (160 / 100000);
      if (botProgress >= 1) botProgress = 0;

      // Update Lap Timer
      const elapsed = ((Date.now() - lapStart) / 1000).toFixed(2);
      setLapTime(`0:${elapsed < 10 ? '0' + elapsed : elapsed}`);

      // 4. Draw Bot Car
      const botPos = getTrackPos(botProgress);
      ctx.save();
      ctx.translate(botPos.x, botPos.y);
      ctx.rotate(botPos.angle);
      ctx.fillStyle = botColor;
      ctx.fillRect(-10, -5, 20, 10);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(4, -3, 4, 6);
      ctx.restore();

      // 5. Draw Player Car (with glow trail)
      const playerPos = getTrackPos(progress);
      ctx.save();
      ctx.translate(playerPos.x, playerPos.y);
      ctx.rotate(playerPos.angle);

      // DRS Boost Flame/Trail
      if (inDrsZone) {
        ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
        ctx.beginPath();
        ctx.moveTo(-12, -3);
        ctx.lineTo(-24, 0);
        ctx.lineTo(-12, 3);
        ctx.fill();
      }

      // Car Body
      ctx.fillStyle = carColor;
      ctx.shadowColor = inDrsZone ? '#06b6d4' : '#6366f1';
      ctx.shadowBlur = inDrsZone ? 16 : 8;
      ctx.fillRect(-11, -6, 22, 12);
      ctx.shadowBlur = 0;

      // Windshield & Wheels
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(2, -4, 5, 8);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(8, -5, 2, 2);
      ctx.fillRect(8, 3, 2, 2);
      ctx.restore();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoDrive]);

  return (
    <section id="flagship" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Gamepad2 size={16} />
            <span>Featured Flagship Project</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Pixel Racer</span> 2D Engine & Platform
          </h2>
          <p className="section-subtitle">
            An interactive top-down 2D racing game built with Python and Pygame, backed by a Flask web architecture for player profiles and global leaderboards.
          </p>
        </div>

        <div className="flagship-wrapper">
          <div className="flagship-grid">
            {/* Left: Interactive Game Simulator */}
            <div>
              <div className="arcade-screen-card">
                <div className="arcade-screen-header">
                  <div className="arcade-hud-status">
                    <span className="hero-status-dot"></span>
                    <span>Pygame 2D Simulation Preview</span>
                  </div>
                  <span className="badge badge-indigo">Python / Pygame</span>
                </div>

                <div className="canvas-container">
                  <canvas ref={canvasRef} className="arcade-canvas" />
                  
                  {/* HUD Overlay */}
                  <div className="canvas-overlay-hud">
                    <div className="hud-speedometer">
                      ⚡ {speed} <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>KM/H</span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      {isDrsActive && (
                        <div className="hud-drs-badge">
                          DRS ACTIVE 🚀
                        </div>
                      )}
                      <div className="hud-speedometer" style={{ borderColor: 'var(--primary-light)' }}>
                        LAP {lapTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="arcade-controls-bar">
                  <div className="arcade-control-hint">
                    <span>Physics:</span>
                    <span className="key-badge">Inertia</span>
                    <span className="key-badge">Collisions</span>
                    <span className="key-badge">Camera Follow</span>
                  </div>
                  <div className="arcade-control-hint">
                    <span className="key-badge" style={{ color: 'var(--accent-cyan)' }}>AI Bot Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Architecture & Specs */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {flagshipProject.tech.map((t) => (
                  <span key={t} className="badge badge-cyan">{t}</span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                Complete Game Engine & Web Ecosystem
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Engineered with real-time physics calculations, custom vector math for vehicle rotations, and smooth camera interpolation. Supported by a synchronized Flask web interface with SQLite persistence for recording best lap times and player metrics.
              </p>

              {/* Core Features List */}
              <div className="flagship-features-list">
                {flagshipProject.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="feature-item">
                    <Zap size={18} className="feature-icon" />
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
                <a
                  href="#projects"
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.9rem' }}
                >
                  <Cpu size={16} />
                  <span>View All Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
