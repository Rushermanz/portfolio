import React, { useEffect, useRef, useState } from 'react';
import { Gamepad2, Zap } from 'lucide-react';
import { flagshipProject } from '../data/portfolioData';

export default function PixelRacerShowcase() {
  const canvasRef = useRef(null);
  const [isDrsActive, setIsDrsActive] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [lapTime, setLapTime] = useState("0:14.28");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

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

    const carColor = '#3b82f6';
    const botColor = '#ef4444';

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
      const width = (canvas.width = canvas.parentElement.clientWidth);
      const height = (canvas.height = canvas.parentElement.clientHeight);

      const scaleX = width / 480;
      const scaleY = height / 280;

      ctx.clearRect(0, 0, width, height);

      // Track background
      ctx.save();
      ctx.scale(scaleX, scaleY);

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
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.stroke();
      ctx.setLineDash([]);

      // Finish line
      ctx.beginPath();
      ctx.moveTo(trackPoints[0].x - 15, trackPoints[0].y - 12);
      ctx.lineTo(trackPoints[0].x + 15, trackPoints[0].y + 12);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Positions update
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

      const elapsed = ((Date.now() - lapStart) / 1000).toFixed(2);
      setLapTime(`0:${elapsed < 10 ? '0' + elapsed : elapsed}`);

      // Draw Bot Car
      const botPos = getTrackPos(botProgress);
      ctx.save();
      ctx.translate(botPos.x, botPos.y);
      ctx.rotate(botPos.angle);
      ctx.fillStyle = botColor;
      ctx.fillRect(-10, -5, 20, 10);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(4, -3, 4, 6);
      ctx.restore();

      // Draw Player Car
      const playerPos = getTrackPos(progress);
      ctx.save();
      ctx.translate(playerPos.x, playerPos.y);
      ctx.rotate(playerPos.angle);

      ctx.fillStyle = carColor;
      ctx.fillRect(-11, -6, 22, 12);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(2, -4, 5, 8);
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
  }, []);

  return (
    <section id="flagship" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Gamepad2 size={16} />
            <span>Featured Flagship System</span>
          </div>
          <h2 className="section-title">
            <span className="accent-text">Pixel Racer</span> 2D Engine & Web Platform
          </h2>
          <p className="section-subtitle">
            An interactive 2D racing game engine built with Python and Pygame, backed by a Flask backend for persistent player profiles and web leaderboards.
          </p>
        </div>

        <div className="executive-card" style={{ padding: '32px' }}>
          <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
            {/* Left: Interactive Canvas */}
            <div>
              <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="hero-status-dot"></span>
                    Pygame Engine Simulation
                  </div>
                  <span className="badge badge-blue">Python / Pygame</span>
                </div>

                <div className="canvas-container" style={{ background: '#0b0f19', height: '240px' }}>
                  <canvas ref={canvasRef} className="arcade-canvas" />
                  
                  <div className="canvas-overlay-hud">
                    <div className="hud-speedometer" style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}>
                      ⚡ {speed} KM/H
                    </div>
                    <div className="hud-speedometer" style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}>
                      LAP {lapTime}
                    </div>
                  </div>
                </div>

                {/* Clean, perfectly aligned physics badges row starting after KM/H */}
                <div style={{
                  marginTop: '10px',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '8px',
                  flexWrap: 'wrap',
                  paddingLeft: '111px'
                }}>
                  <span className="badge badge-slate">Inertia Physics</span>
                  <span className="badge badge-slate">Collision Engine</span>
                  <span className="badge badge-slate">AI Competitor</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Features */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {flagshipProject.tech.map((t) => (
                  <span key={t} className="badge badge-blue">{t}</span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Game Engine & Flask Web Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '18px' }}>
                Engineered with real-time physics calculations, custom vector math for vehicle rotations, and camera interpolation. Supported by a synchronized Flask web interface with SQLite persistence for recording best lap times and player metrics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {flagshipProject.features.slice(0, 3).map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <Zap size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
