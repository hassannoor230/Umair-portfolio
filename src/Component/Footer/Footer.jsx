import { ArrowUp } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-stats">
          <div className="footer-stat">
            <span className="footer-stat-number">250+</span>
            <span className="footer-stat-label">Projects Delivered</span>
          </div>
          <div className="footer-stat">
            <span className="footer-stat-number">100+</span>
            <span className="footer-stat-label">Happy Clients</span>
          </div>
          <div className="footer-stat">
            <span className="footer-stat-number">12+</span>
            <span className="footer-stat-label">Years Experience</span>
          </div>
          <div className="footer-stat">
            <span className="footer-stat-number">99.9%</span>
            <span className="footer-stat-label">Client Satisfaction</span>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">DevPro</div>
            <p className="footer-tagline">
              Building exceptional digital experiences for Fortune 500 companies and innovative
              startups. Specializing in full-stack development, cloud architecture, and technical
              leadership.
            </p>
          </div>

          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Web Development</a></li>
              <li><a href="#services" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">Cloud Solutions</a></li>
              <li><a href="#services" className="footer-link">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:contact@devpro.com" className="footer-link">umair@gmail.com</a></li>
              <li><a href="tel:+1234567890" className="footer-link">+92 300 6406480</a></li>
              <li><a href="#contact" className="footer-link">Gujranwala</a></li>
              <li><a href="#contact" className="footer-link">Get in Touch</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 DevPro. All rights reserved. Built with React & TypeScript.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}