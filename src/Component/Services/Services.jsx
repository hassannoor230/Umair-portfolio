import {
  Code,
  Smartphone,
  Server,
  Cloud,
  Palette,
  Shield,
  Zap,
  Briefcase,
} from 'lucide-react';
import './Services.css';

export function Services() {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description:
        'Building responsive, high-performance web applications using modern frameworks and best practices.',
      features: [
        'React, Next.js, Vue.js applications',
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description:
        'Creating native and cross-platform mobile applications that deliver seamless user experiences.',
      features: [
                'React, Node.js, ',

      ],
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description:
        'Designing robust, scalable backend systems and APIs that power modern applications.',
      features: [
                       'React, Node.js, ',

      ],
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      description:
        'Implementing cloud infrastructure and automation for reliable, scalable deployments.',
      features: [
                        'React, Node.js, ',

      ],
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description:
        'Crafting intuitive, beautiful interfaces that enhance user engagement and satisfaction.',
      features: [
                        'React, Node.js, ',

      ],
    },
    {
      icon: <Shield size={32} />,
      title: 'Security & Compliance',
      description:
        'Ensuring applications meet industry security standards and compliance requirements.',
      features: [
                       'React, Node.js, ',

      ],
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description:
        'Enhancing application speed and efficiency to deliver superior user experiences.',
      features: [
                        'React, Node.js, ',

      ],
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Technical Consulting Consul' ,
      description:
        'Providing expert guidance on technology strategy, architecture, and best practices experiences',
      features: [
                        'React, Node.js, ',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Understanding your business goals, requirements, and target audience to create the perfect solution.',
    },
    {
      number: '02',
      title: 'Planning',
      description:
        'Developing comprehensive project roadmap, architecture design, and technical specifications.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Agile development with regular updates, code reviews, and quality assurance throughout.',
    },
    {
      number: '04',
      title: 'Deployment',
      description:
        'Seamless launch with monitoring, documentation, and ongoing support for continuous success.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions tailored to your business needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2 className="section-title">Development Process</h2>
          <p className="section-subtitle">
            A proven methodology that delivers exceptional results
          </p>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
