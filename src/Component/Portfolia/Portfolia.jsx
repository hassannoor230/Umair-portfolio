import { Building2 } from 'lucide-react';
import './Portfolia.css'

export function Portfolio() {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      category: 'Web Development',
      client: 'Fortune 500 Retail Corp',
      image:
        'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MTQ2MzIxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Developed a scalable e-commerce platform handling 5M+ daily users with advanced search, personalization, and real-time inventory management.',
      duration: '12 months',
      teamSize: '18 developers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],
      results: [
        '+45% conversion rate improvement',
        '$2.5M additional revenue annually',
        '99.99% uptime achieved',
        '2.3s average page load time',
      ],
      testimonial:
        'The platform exceeded our expectations. The team delivered a robust solution that transformed our online presence and significantly boosted our revenue.',
    },
    {
      title: 'FinTech Mobile Banking App',
      category: 'Mobile Development',
      client: 'Leading Digital Bank',
      image:
        'https://images.unsplash.com/photo-1726137065539-1aa2cb315e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc3MTUyNjQxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Built a secure, feature-rich mobile banking application with biometric authentication, instant transfers, and comprehensive financial management tools.',
      duration: '10 months',
      teamSize: '12 developers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],

      results: [
        '500K+ active users in 6 months',
        '4.8/5 App Store rating',
        '+60% customer engagement',
        'Zero security breaches',
      ],
      testimonial:
        'An exceptional mobile banking experience. Our customers love the intuitive interface and the app has become a key driver of our digital strategy.',
    },
    {
      title: 'Healthcare Patient Portal',
      category: 'Full-Stack',
      client: 'Major Healthcare Provider',
      image:
        'https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDg2NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Created HIPAA-compliant patient portal enabling appointment scheduling, telemedicine, prescription management, and secure medical records access.',
      duration: '14 months',
      teamSize: '20 developers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],

      results: [
        '2M+ patients registered',
        '+72% reduction in phone inquiries',
        '95% patient satisfaction score',
        'HIPAA & SOC 2 certified',
      ],
      testimonial:
        'This portal has revolutionized how we interact with patients. The secure telemedicine features were especially crucial during the pandemic.',
    },
    {
      title: 'Enterprise Cloud Dashboard',
      category: 'Cloud & Analytics',
      client: 'Global Tech Corporation',
      image:
        'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE0ODg1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Architected real-time analytics dashboard processing 10TB+ data daily with custom visualizations, predictive insights, and automated reporting.',
      duration: '8 months',
      teamSize: '15 developers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],

      results: [
        '+85% faster data insights',
        '$1.2M infrastructure cost savings',
        '50+ integrated data sources',
        'Real-time processing < 500ms',
      ],
      testimonial:
        'The dashboard provides unprecedented visibility into our operations. The real-time analytics have enabled data-driven decisions at scale.',
    },
    {
      title: 'Smart IoT Platform',
      category: 'IoT & Backend',
      client: 'Smart Home Technology Leader',
      image:
        'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzcxNDY2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Developed IoT platform managing 1M+ connected devices with ML-powered automation, energy optimization, and comprehensive device management.',
      duration: '16 months',
      teamSize: '22 developers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],

      results: [
       
      ],
      testimonial:
        'The platform handles our growing device ecosystem flawlessly. The ML automation features have set new industry standards.',
    },
    {
      title: 'Modern UI Design System',
      category: 'UI/UX Design',
      client: 'SaaS Platform Company',
      image:
        'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDY2OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Created comprehensive design system with 200+ components, accessibility guidelines, and documentation enabling consistent UX across 15+ products.',
      duration: '6 months',
      teamSize: '8 designers',
      techStack: ['React', 'Node.js', 'Html', 'Css', 'Bootstrape', 'Javascript'],

      results: [
        '+55% faster development time',
        '100% WCAG 2.1 AA compliance',
        '200+ reusable components',
        '15 products standardized',
      ],
      testimonial:
        'The design system has transformed our product development. Teams can now ship features 2x faster with consistent quality.',
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          Delivering exceptional results for          Delivering exceptional results for industry-leading clients

        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{project.category}</span>
                </div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <div className="portfolio-client">
                  <Building2 size={14} />
                  {project.client}
                </div>

                <p className="portfolio-description">{project.description}</p>

                {/* <div className="portfolio-meta">
                  { <div className="portfolio-meta-item">
                    <span className="portfolio-meta-label">Duration</span>
                    <span className="portfolio-meta-value">{project.duration}</span>
                  </div> }
                  { <div className="portfolio-meta-item">
                    <span className="portfolio-meta-label">Team Size</span>
                    <span className="portfolio-meta-value">{project.teamSize}</span>
                  </div> }
                </div> */}
{/* 
                <div className="portfolio-tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="portfolio-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* <div className="portfolio-results">
                  <div className="portfolio-results-title">Key Results</div>
                  <ul className="portfolio-results-list">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div> */}

                {/* <div className="portfolio-testimonial">{project.testimonial}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
