import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock } from 'lucide-react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      projectType: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Ready to bring your project to life? Get in touch today
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <h3 className="contact-card-title">Email</h3>
              </div>
              <div className="contact-card-content">
                <a href="mailto:contact@devpro.com" className="contact-card-link">
                  umair@gmail.com
                </a>
                <br />
                <a href="mailto:projects@devpro.com" className="contact-card-link">
                  Umair@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <Phone size={24} />
                </div>
                <h3 className="contact-card-title">Phone</h3>
              </div>
              <div className="contact-card-content">
                <a href="tel:+1234567890" className="contact-card-link">
                  =92 300 6406480
                </a>
                <br />
                Mon - Fri, 9:00 AM - 6:00 PM EST
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="contact-card-title">Location</h3>
              </div>
              <div className="contact-card-content">
               Gujranwala
                <br />
                Available for remote work worldwide
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <Clock size={24} />
                </div>
                <h3 className="contact-card-title">Availability</h3>
              </div>
              <div className="contact-card-content">
                <div className="availability-status">
                  <span className="availability-dot"></span>
                  Available for new projects
                </div>
                <div style={{ marginTop: '1rem' }}>
                  Response time: Within 24 hours
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <h3 className="contact-card-title">Connect on Social</h3>
              </div>
              <div className="contact-social">
                <a href="#contact" className="contact-social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#contact" className="contact-social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="contact-social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType" className="form-label">Project Type *</label>
              <select
                id="projectType"
                name="projectType"
                className="form-select"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select project type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="backend">Backend Development</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="uiux">UI/UX Design</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget" className="form-label">Project Budget</label>
              <select
                id="budget"
                name="budget"
                className="form-select"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="" style={{color:"black"}}>Select budget range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k+">$250,000+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Project Details *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}