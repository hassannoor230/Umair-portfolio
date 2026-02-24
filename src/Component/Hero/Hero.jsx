import { Github, Linkedin, X, Mail } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1 className="hero-title"> Frontend Developer </h1>
          <p className="hero-subtitle">Transforming Ideas into Scalable Solutions</p>
          <p className="hero-description">
            Specialized in building enterprise-grade applications for Fortune 500 companies.
            Expert in modern web technologies, cloud architecture, and delivering high-performance solutions.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">250+</span>
              <span className="hero-stat-label">Projects Completed</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">12+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
          </div>

        

          <div className="hero-social">
            <a href="#contact" className="hero-social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#contact" className="hero-social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="hero-social-link" aria-label="Twitter">
              <X size={20} />
            </a>
            <a href="#contact" className="hero-social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-profile">
            <img
              src="/assets/ChatGPT Image Feb 23, 2026, 03_36_53 PM.png"
          </div>
        </div>

      </div>
    </section>
  );
}