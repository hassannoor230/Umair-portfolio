import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
        { label: 'Contact', id: 'Contact' },

  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <div className="navbar-logo-icon">D</div>
          <span className="navbar-logo-text">DevPro</span>
        </div>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-contact-btn-mobile" style={{ display: 'none' }}>
            <a
              href="#contact"
              className="navbar-link navbar-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <span>Login</span>
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <a
            href="#contact"
            className="navbar-link navbar-contact-btn"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <span>Login</span>
          </a>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </nav>
  );
}