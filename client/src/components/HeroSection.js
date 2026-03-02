import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="badge">UI/UX DESIGNER</div>
          <h1 className="hero-title">
            I’m <span className="highlight">Umme Habiba</span>,<br />
            UI/UX Designer crafting intuitive digital experiences.
          </h1>
          <p className="hero-description">
            I design clean, user-centered mobile and web interfaces focused on usability, clarity, and modern aesthetics.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              View Portfolio <span className="icon">↓</span>
            </button>
            <button className="btn btn-outline">
              <span className="icon">⬇</span> Download Resume
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Internships Completed</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>UI/UX Projects</p>
            </div>
            <div className="stat">
              <h3>Figma</h3>
              <p>Figma & UX Research Skilled</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-circle-wrapper">
            <div className="hero-center-circle">
              <img src="/profile.png" alt="Umme Habiba" />
            </div>
            <div className="hero-middle-circle"></div>

            <div className="orbit orbit-1">Wireframing</div>
            <div className="orbit orbit-2">Figma</div>
            <div className="orbit orbit-3">UX Research</div>
            <div className="orbit orbit-4">Prototyping</div>
            <div className="orbit orbit-5">UI Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;