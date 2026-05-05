"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  Brush,
  Layout,
  FileCode2,
  Atom,
  Smartphone,
  Palette,
  PenTool,
  Code,
  Hexagon,
  Send,
  Mail,
  Briefcase,
  Terminal,
  Globe,
  ArrowUp,
  X,
  ArrowRight,
  Award,
  GraduationCap
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            Portfolio<span>.</span>
          </a>
          <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="gradient-heading">
              Hi, I&apos;m <span className="highlight">Mark James B. Asumbrado</span>
            </h1>
            <h2 className="gradient-heading" style={{ display: 'block', marginTop: '0.5rem' }}>UI/UX Designer & Developer</h2>
            <p>
              I design clean, modern, and user-focused digital experiences
              that make a difference.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image float-anim" style={{ position: 'relative' }}>
            <div className="profile-glow"></div>
            <div className="profile-blob-container">
              <Image
                src="/image.png"
                alt="Mark James B. Asumbrado"
                width={420}
                height={420}
                className="profile-blob-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">About Me</h2>
            <div className="line"></div>
          </div>
          
          <div className="about-intro">
            <p>
              I’m a UI/UX designer and data analyst who enjoys turning ideas into simple, user-friendly experiences. I like blending creativity with data to create designs that not only look good but also work well for real people.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-column">
              <h3 className="column-title"><Briefcase size={24} className="highlight" /> Work Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Senior UI/UX Designer</h4>
                    <span className="timeline-date">2023 - Present</span>
                    <p>Leading design systems and user research for enterprise SaaS products. Improved user retention by 25% through UX revamps.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Data Analyst</h4>
                    <span className="timeline-date">2021 - 2023</span>
                    <p>Analyzed user behavior data to inform product design decisions. Created interactive dashboards using modern web tools.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-column">
              <h3 className="column-title"><GraduationCap size={24} className="highlight" /> Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>BS in Information Technology</h4>
                    <span className="timeline-date">2017 - 2021</span>
                    <p>University of Example. Graduated with Honors. Specialized in Human-Computer Interaction and Data Science.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>UX Design Certification</h4>
                    <span className="timeline-date">2022</span>
                    <p>Google UX Design Professional Certificate. Completed 7-course program on design thinking and prototyping.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
             <h3 className="column-title center"><Atom size={24} className="highlight" /> Core Skills</h3>
             <div className="skills">
               <span className="skill-tag"><Brush size={18} /> Figma</span>
               <span className="skill-tag"><Layout size={18} /> HTML/CSS</span>
               <span className="skill-tag"><FileCode2 size={18} /> JavaScript</span>
               <span className="skill-tag"><Atom size={18} /> React</span>
               <span className="skill-tag"><Smartphone size={18} /> Responsive Design</span>
               <span className="skill-tag"><Palette size={18} /> UI/UX</span>
             </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section bg-alt">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">Featured Projects</h2>
            <p>A selection of my recent work and case studies.</p>
            <div className="line"></div>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="Portfolio Website"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="project-info">
                <h3>Portfolio Website</h3>
                <p>
                  A modern, dark-mode portfolio built with vanilla web technologies
                  focusing on performance and micro-interactions.
                </p>
                <div className="project-actions">
                  <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="E-commerce App"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="project-info">
                <h3>E-commerce App</h3>
                <p>
                  A complete mobile shopping experience with seamless checkout flows
                  and dynamic product discovery.
                </p>
                <div className="project-actions">
                  <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="Mobile UI Design"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="project-info">
                <h3>Fintech Mobile UI</h3>
                <p>
                  A futuristic and secure mobile banking interface focusing on data
                  visualization and ease of use.
                </p>
                <div className="project-actions">
                  <a href="#" className="btn btn-sm btn-outline">Case Study</a>
                  <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">My Services</h2>
            <p>What I can do for you.</p>
            <div className="line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <PenTool size={32} />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Creating beautiful, user-centered interfaces that solve real problems
                and elevate your brand identity.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Code size={32} />
              </div>
              <h3>Web Development</h3>
              <p>
                Building fast, responsive, and accessible websites using modern
                technologies and best practices.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Hexagon size={32} />
              </div>
              <h3>Branding</h3>
              <p>
                Developing cohesive visual systems, logos, and style guides to make
                your product memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications section bg-alt">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">My Certifications</h2>
            <p>Professional achievements and qualifications.</p>
            <div className="line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Award size={32} />
              </div>
              <h3></h3>
              <p>
                Advanced data analysis, visualization, and statistical modeling.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Award size={32} />
              </div>
              <h3>UI/UX Design Professional</h3>
              <p>
                Comprehensive certification in user experience and interface design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">Let’s Work Together</h2>
            <p>Have a project in mind? I&apos;d love to hear about it.</p>
            <div className="line"></div>
          </div>
          <div className="contact-container">
            <form className="contact-form" id="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message <Send size={20} />
              </button>
            </form>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:your@email.com">your@email.com</a>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Briefcase size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <Terminal size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Dribbble">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; 2026 Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home" className="back-to-top" onClick={scrollToTop}>
              Back to top <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
