import React from 'react';
import { services } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="accent-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Full-stack web engineering, scalable backend and database systems, and custom game development.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-badge">{service.id}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
