import { Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import './About.css';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3 / SCSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 92 },
    { name: 'JavaScript (ES6+)', percentage: 90 },
    { name: 'React JS', percentage: 98 },
    { name: 'UI/UX Design', percentage: 87 },
    { name: 'Responsive Design', percentage: 93 },
  ];

  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Pvt Ltd',
      period: '2021 - Present',
      description:
        'Leading the frontend development team, building fast, responsive, and pixel-perfect web applications using React JS, HTML5, CSS3, and modern JavaScript.',
      achievements: [
        'Built 30+ responsive websites and web apps using React JS & HTML/CSS',
        'Improved page load speed by 60% through code optimization and lazy loading',
        'Developed reusable component libraries that reduced dev time by 40%',
        'Collaborated with UI/UX designers to deliver pixel-perfect interfaces',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Digital Agency',
      period: '2019 - 2021',
      description:
        'Developed modern, mobile-first frontend interfaces for clients ranging from e-commerce stores to SaaS platforms using HTML, CSS, Bootstrap, and JavaScript.',
      achievements: [
        'Delivered 40+ client projects with clean, semantic HTML & CSS code',
        'Integrated REST APIs with React JS frontend for dynamic data rendering',
        'Converted Figma/Adobe XD designs into fully responsive web pages',
        'Improved mobile responsiveness across all client projects by 100%',
      ],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Web Craft Studio',
      period: '2017 - 2019',
      description:
        'Started career building static websites and landing pages using HTML, CSS, Bootstrap, and basic JavaScript for local businesses and startups.',
      achievements: [
        'Created 20+ landing pages with clean HTML5 and CSS3',
        'Used Bootstrap to build fully responsive, mobile-friendly layouts',
        'Learned and applied JavaScript basics for interactive UI elements',
        'Gained experience with Git version control and team collaboration',
      ],
    },
  ];

  const certifications = [
    {
      name: 'HTML5',
      issuer: 'Frontend Skill',
      date: '2023',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS / SCSS',
      issuer: 'Google Certified',
      date: '2022',
      icon: <BsFiletypeScss />,
    },
    {
      name: 'Bootstrap',
      issuer: 'Meta (Facebook)',
      date: '2023',
      icon: <FaBootstrap />,
    },
    {
      name: 'JavaScript',
      issuer: 'JS Institute',
      date: '2021',
      icon: <DiJavascript />,
    },
    {
      name: 'React JS',
      issuer: 'Meta Certified',
      date: '2022',
      icon: <FaReact />,
    },
    {
      name: 'Node.js Basics',
      issuer: 'OpenJS Foundation',
      date: '2023',
      icon: <FaNodeJs />,
    },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate Frontend Developer — Building Beautiful & Fast Web Experiences
        </p>

        <div className="about-bio">
          <p>
            I am a dedicated <strong>Frontend Developer</strong> with over <strong>6+ years of experience</strong> in
            building modern, responsive, and high-performance web applications. I specialize in
            <strong> HTML5, CSS3, Bootstrap, JavaScript (ES6+), and React JS</strong> — turning creative
            designs into clean, functional, and user-friendly websites.
          </p>
          <p style={{ marginTop: '1rem' }}>
            My focus is always on writing clean, maintainable code and delivering pixel-perfect
            UI that works flawlessly across all devices and browsers. Whether it's a landing page,
            a full web app, or a complex React project — I bring both technical skill and
            attention to detail to every project I work on.
          </p>
        </div>

        <h3 className="about-section-title">Technical Expertise</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="about-section-title">Professional Experience</h3>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h4 className="experience-role">{exp.role}</h4>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-period">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="about-section-title">Certifications & Skills</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h4 className="certification-name">{cert.name}</h4>
              <div className="certification-issuer">{cert.issuer}</div>
              <div className="certification-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}