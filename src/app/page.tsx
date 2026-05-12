"use client";

import { useEffect, useState, useRef } from "react";
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
  GraduationCap,
  FileText,
  MapPin,
  Phone,
  ExternalLink,
  Eye
} from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "../components/TextType";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const scrollStep = 1; // Speed of auto-scroll
    
    const animateScroll = () => {
      if (!isDragging && !isHovered) {
        // Since we duplicated the items, the total width is roughly twice the original content
        // When we scroll halfway, we jump back to 0.
        if (track.scrollLeft >= track.scrollWidth / 2) {
           // Snap back exactly half the scrollWidth
           track.scrollLeft -= track.scrollWidth / 2;
        } else {
           track.scrollLeft += scrollStep;
        }
      }
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, isHovered]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    if (isLoading) return;

    // Refresh ScrollTrigger when page loads
    ScrollTrigger.refresh();

    // GSAP ScrollTrigger animations
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Parallax blobs
    gsap.to(".blob-1", {
      y: -100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });

    gsap.to(".blob-2", {
      y: -150,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });

    // Scroll Progress Bar
    gsap.to(".scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    // Magnetic Buttons
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", ((e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      }) as EventListener);
      
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        "service_6azv3hd",
        "template_gyxedv5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Mark James",
        },
        "TxvFC4Dowhp6MfZf7"
      );
      console.log("EmailJS Success:", result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error.text || error.message || error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`main-content-wrapper ${isLoading ? 'is-loading' : 'is-loaded'}`}>
      <div className="scroll-progress"></div>
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            MJA<span>.</span>
          </a>
          <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
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
            <h1 className="gradient-heading hero-title">
              <TextType
                as="span"
                text="Hi, I'm"
                typingSpeed={80}
                loop={false}
                showCursor={false}
              />
              <TextType
                as="span"
                className="highlight"
                text="Mark James B. Asumbrado"
                typingSpeed={80}
                initialDelay={600}
                loop={false}
                cursorBlinkDuration={0.6}
              />
            </h1>
            <TextType
              as="h2"
              className="gradient-heading hero-subtitle-type"
              style={{ display: 'block', marginTop: '0.5rem' }}
              text={["IT Student", "Aspiring Tech Professional", "Creative Problem Solver", "UI/UX Enthusiast"]}
              typingSpeed={70}
              pauseDuration={2000}
              deletingSpeed={40}
              cursorBlinkDuration={0.6}
            />
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href="/ASUMBRADO_CV.pdf" download="ASUMBRADO_CV.pdf" className="btn btn-secondary">
                <FileText size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Download CV
              </a>
            </div>
          </div>
          <div className="hero-image float-anim" style={{ position: 'relative' }}>
            <div className="profile-glow"></div>
            <div className="profile-blob-container">
              <Image
                src="/jimmy.jpg"
                alt="Mark James B. Asumbrado"
                width={420}
                height={420}
                className="profile-blob-img"
                priority
                quality={100}
                unoptimized={true}
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


          <div className="skills-section">
            <h3 className="column-title center"><Atom size={24} className="highlight" /> Core Skills</h3>
            <div className="skills">
              <span className="skill-tag"><Terminal size={18} /> Basic Troubleshooting</span>
              <span className="skill-tag"><Briefcase size={18} /> Teamwork</span>
              <span className="skill-tag"><Palette size={18} /> UI/UX Design</span>
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
                  src="/skonnect-logo.jpg"
                  alt="SKonnect Capstone"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
                <div className="project-overlay">
                  <div className="project-tags">
                    <span>Next.js</span>
                    <span>NLP</span>
                    <span>Firebase</span>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>SKonnect</h3>
                <p>
                  Capstone: A Smart Youth Engagement Platform Using NLP for Barangay Leadership.
                </p>
                <div className="project-role">
                  <strong>Role:</strong> System Analyst / Documentation / UI/UX
                </div>
                <div className="project-actions">
                  <a href="https://skonnect-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    View Project <Globe size={16} />
                  </a>
                </div>
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
                <div className="project-overlay">
                  <div className="project-tags">
                    <span>UI/UX</span>
                    <span>Design</span>
                    <span>Research</span>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Manlupig Marketing</h3>
                <p>
                  IM101 Project
                </p>
                <div className="project-role">
                  <strong>Role:</strong> UI/UX / Documentation
                </div>
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
          <div className="certifications-marquee-container">
            <div 
              className={`certifications-marquee-track ${isDragging ? 'dragging' : ''}`}
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onMouseEnter={onMouseEnter}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
            >
              {/* First Set */}
              <div className="project-card certification-card">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                  <img
                    src="/im102certificate_page-0001.jpg"
                    alt="Web Development Bootcamp Certificate"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                  />
                  <div className="cert-overlay">
                    <a href="/im102certificate_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Web Development Bootcamp</h3>
                  <p>Udemy (HTML, CSS, PHP, MySQL, WordPress) - Dec 2024</p>
                </div>
              </div>
              <div className="project-card certification-card">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                  <img
                    src="/JimCert_page-0001.jpg"
                    alt="Introduction to Front End Development Certificate"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                  />
                  <div className="cert-overlay">
                    <a href="/JimCert_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Front End Development</h3>
                  <p>Simplilearn SkillUP - Apr 2026</p>
                </div>
              </div>
              <div className="project-card certification-card">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                  <img
                    src="/jimcertificate_full_stack_java.jpg"
                    alt="Full Stack Java Development Certificate"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                  />
                  <div className="cert-overlay">
                    <a href="/jimcertificate_full_stack_java.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Full Stack Java Development</h3>
                  <p>Simplilearn SkillUP - May 2026</p>
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="project-card certification-card" aria-hidden="true">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                   <img src="/im102certificate_page-0001.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                   <div className="cert-overlay">
                    <a href="/im102certificate_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Web Development Bootcamp</h3>
                  <p>Udemy - Dec 2024</p>
                </div>
              </div>
              <div className="project-card certification-card" aria-hidden="true">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                  <img src="/JimCert_page-0001.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  <div className="cert-overlay">
                    <a href="/JimCert_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Front End Development</h3>
                  <p>Simplilearn SkillUP - Apr 2026</p>
                </div>
              </div>
              <div className="project-card certification-card" aria-hidden="true">
                <div className="project-image" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc', padding: '10px' }}>
                  <img src="/jimcertificate_full_stack_java.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  <div className="cert-overlay">
                    <a href="/jimcertificate_full_stack_java.jpg" target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                      <Eye size={20} /> View Certificate
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="cert-badge"><Award size={14} /> Certified</div>
                  <h3>Full Stack Java Development</h3>
                  <p>Simplilearn SkillUP - May 2026</p>
                </div>
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
            <form className="contact-form" id="contactForm" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary btn-block ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'} 
                {!isSubmitting && submitStatus !== 'success' && <Send size={20} />}
              </button>
              
              {submitStatus === "success" && (
                <div className="form-feedback success">
                  Your message has been sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="form-feedback error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>

            <div className="contact-info">
              <div className="contact-item">
                <a href="https://www.google.com/maps/search/?api=1&query=Nangkatrail+st.+Buhangin+Davao+City" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Location">
                  <MapPin size={24} />
                </a>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Nangkatrail st. Buhangin Davao City</p>
                </div>
              </div>
              <div className="contact-item">
                <a href="tel:09772492444" className="contact-icon" aria-label="Call Me">
                  <Phone size={24} />
                </a>
                <div className="contact-text">
                  <h4>Call Me</h4>
                  <a href="tel:09772492444" className="contact-link">09772492444</a>
                </div>
              </div>
              <div className="contact-item">
                <a href="mailto:markjames082403@gmail.com" className="contact-icon" aria-label="Email Me">
                  <Mail size={24} />
                </a>
                <div className="contact-text">
                  <h4>Email Me</h4>
                  <a href="mailto:markjames082403@gmail.com" className="contact-link">markjames082403@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <a href="https://github.com/Markjamesasumbrado" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
                  <Terminal size={24} />
                </a>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Markjamesasumbrado" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Markjamesasumbrado</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; 2026 Mark James B. Asumbrado. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home" className="back-to-top" onClick={scrollToTop}>
              Back to top <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
