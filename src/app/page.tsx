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
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
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
            <h2 className="gradient-heading" style={{ display: 'block', marginTop: '0.5rem' }}>IT Student & Aspiring Tech Professional</h2>
            <p>
              Nangkatrail st. Buhangin Davao City <br />
              09772492444 | markjames082403@gmail.com
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
              My objective is to contribute positively to an organization while developing my professionalism and work discipline. I aim to learn from experienced mentors, growing both personally and professionally in a supportive environment, and to build my knowledge in a role where I can learn, improve, and contribute to the team&apos;s success.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-column">
              <h3 className="column-title"><Briefcase size={24} className="highlight" /> Work Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>SK Kagawad</h4>
                    <span className="timeline-date">Barangay Buhangin Proper</span>
                    <p>Assisted with youth programs and community activities.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Virtual Assistant</h4>
                    <span className="timeline-date">Remote Work</span>
                    <p>Provided remote administrative support from home.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Carinderia Assistant</h4>
                    <span className="timeline-date">Family Business</span>
                    <p>Assisted every summer, handling customer service, dishwashing, and other all-around tasks.</p>
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
                    <span className="timeline-date">2022 - Present</span>
                    <p>Holy Cross of Davao College</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Senior High School</h4>
                    <span className="timeline-date">2020 - 2022</span>
                    <p>Lamb of God SPED Academy</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Junior High School</h4>
                    <span className="timeline-date">2016 - 2020</span>
                    <p>Lamb of God SPED Academy</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Elementary</h4>
                    <span className="timeline-date">2010 - 2016</span>
                    <p>San Isidro Elementary School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
             <h3 className="column-title center"><Atom size={24} className="highlight" /> Core Skills</h3>
             <div className="skills">
               <span className="skill-tag"><Terminal size={18} /> Basic Troubleshooting</span>
               <span className="skill-tag"><FileCode2 size={18} /> MS Office Suite</span>
               <span className="skill-tag"><Palette size={18} /> Document Editing</span>
               <span className="skill-tag"><Layout size={18} /> Digital Management</span>
               <span className="skill-tag"><Briefcase size={18} /> Teamwork</span>
               <span className="skill-tag"><Send size={18} /> Clear Communication</span>
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
                  alt="SKonnect Capstone"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="project-info">
                <h3>SKonnect</h3>
                <p>
                  Capstone: A Smart Youth Engagement Platform Using NLP for Barangay Leadership.
                  <br /><br />
                  <strong>Role:</strong> System Analyst / Documentation
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="Manlupig Marketing"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="project-info">
                <h3>Manlupig Marketing</h3>
                <p>
                  IM101 Project.
                  <br /><br />
                  <strong>Role:</strong> UI/UX / Documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">Professional Skills</h2>
            <p>What I bring to the table.</p>
            <div className="line"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Briefcase size={32} />
              </div>
              <h3>Teamwork</h3>
              <p>
                I work well with different people, take accountability for my actions, and communicate clearly while respecting others&apos; ideas.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Terminal size={32} />
              </div>
              <h3>Computer Operations</h3>
              <p>
                Proficient in Microsoft Office (Word, Excel, PowerPoint), basic troubleshooting, and managing digital documents.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Palette size={32} />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Creating intuitive, user-centered interfaces with a focus on modern aesthetics and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications section bg-alt">
        <div className="container">
          <div className="section-header center">
            <h2 className="gradient-heading">Certifications</h2>
            <p>Professional courses and certificates.</p>
            <div className="line"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{ height: '300px', overflow: 'hidden' }}>
                <iframe
                  src="/im102certificate.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', backgroundColor: '#fff' }}
                  title="Web Development Bootcamp Certificate"
                />
              </div>
              <div className="project-info">
                <h3>Web Development Bootcamp</h3>
                <p>Udemy (HTML, CSS, PHP, MySQL, WordPress) - Dec 2024</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{ height: '300px', overflow: 'hidden' }}>
                <iframe
                  src="/JimCert.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', backgroundColor: '#fff' }}
                  title="Introduction to Front End Development Certificate"
                />
              </div>
              <div className="project-info">
                <h3>Introduction to Front End Development</h3>
                <p>Simplilearn SkillUP - Apr 2026</p>
              </div>
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
                  <a href="mailto:markjames082403@gmail.com">markjames082403@gmail.com</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/Markjamesasumbrado" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Terminal size={20} />
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
