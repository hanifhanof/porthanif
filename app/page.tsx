"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ShinyText";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { motion, Variants } from "motion/react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Data Experience - Silakan ganti gambar, judul, dan deskripsi di sini
  const experiences = [
    {
      id: 1,
      title: "Pradita Future Expert",
      role: "Video Content Competition",
      thumbnail: "juara-rame.png",
      images: ["juara-rame.png", "/juara.png"], // Tambahkan banyak path gambar di sini
      description: "I have been exploring cybersecurity through platforms such as OverTheWire and CTF challenges to strengthen my understanding of Linux fundamentals, security concepts, and problem solving through hands-on practice."
    },
    {
      id: 2,
      title: "DIGIFEST 2025",
      role: "",
      thumbnail: "/digifest-1.png",
      images: ["/digifest-1.png", "/digifest-2.png", "/digifest-3.png"], // Tambahkan banyak path gambar di sini
      description: "Add your detailed description for the second experience here."
    },
    {
      id: 3,
      title: "Experience Title 3",
      role: "Company / Role Name",
      thumbnail: "/arya-1.png",
      images: ["/arya-1.png", "/arya-3.png", "/arya-2.png"], // Tambahkan banyak path gambar di sini
      description: "Add your detailed description for the third experience here."
    },
    {
      id: 4,
      title: "Experience Title 4",
      role: "Company / Role Name",
      thumbnail: "/lawson.png",
      images: ["/lawson.png"],
      description: "Add your detailed description for the fourth experience here."
    }
  ];

  // Animation variants for Apple-like reveal
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.2, 0, 0.2, 1] }
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (menuOpen) return;
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main className="portfolio-page">    
      {/* NAVBAR CONTAINER */}
      <nav className={`nav-container ${showNavbar ? "show-nav" : "hide-nav"}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <a href="#hero">Rizqhnif</a>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className="hamburger-btn"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-bar bar-1"></span>
            <span className="hamburger-bar bar-2"></span>
            <span className="hamburger-bar bar-3"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobile-menu" onClick={() => setMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* SEKSI HERO */}
      <section className="hero" id="hero">
        <div className="hero-stack">
          <img
            className="hero-portrait"
            src="/hanif.svg"
            alt="Portrait of Hanif"
            width={435}
            height={653}
            loading="eager"
          />
        </div>

        <div className="namaku">
          <h1 className="namaku-title">
            <ShinyText text="Hello, I'm Hanif!" />
          </h1>
          <p className="namaku-role">Cybersecurity Enthusiast & Digital Creator</p>
        </div>
      </section>

      {/* SEKSI ABOUT */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-visual">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="about-image-wrapper"
            >
              <img src="/hanif-about.png" alt="Hanif" className="about-img" />
              <div className="about-status-tag">
                <span className="status-dot"></span>
                Open for Collaboration
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="about-mini-card"
            >
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>Linux</span>
                <span>Next.js</span>
                <span>CyberSec</span>
              </div>
            </motion.div>
          </div>

          <div className="about-content">
            <h2 className="section-label">About Me</h2>
            <div className="about-text">
              <ScrollReveal 
                baseOpacity={0.2} 
                enableBlur 
                blurStrength={10}
                textClassName="text-xs tracking-tight md:text-lg md:tracking-wide"
              >
                Welcome to my personal website! I'm Muhammad Rizqi Hanif, an IT student dedicated to continuous learning, structured problem-solving, and digital innovation. My tech journey started with a fascination for UI/UX, but as I explored deeper, I found my true passion in Cybersecurity. I love the challenge of dissecting complex systems, understanding how they function under the hood, and learning how to keep them secure. Currently, I am actively sharpening my knowledge through cybersecurity professional courses on Coursera. Whenever I encounter complex bugs or get stuck on a technical roadblock, my immediate instinct is to research deeply, leverage AI tools responsibly, and experiment until the problem is solved.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI EXPERIENCE */}
      <section className="experience-section" id="work">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.2, 0, 0.2, 1] }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="experience-card"
                  >
                    <img src={exp.thumbnail} alt={exp.title} className="experience-logo" />
                    <div className="experience-info">
                      <h3>{exp.title}</h3>
                      <p>{exp.role}</p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="experience-dialog">
                  <div className="dialog-carousel-container">
                    <div className="dialog-carousel">
                      {exp.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`${exp.title} ${idx}`} className="dialog-image" />
                      ))}
                    </div>
                    {exp.images.length > 1 && (
                      <div className="carousel-indicator">
                        <span>&rsaquo; swipe to see more</span>
                      </div>
                    )}
                  </div>
                  <DialogHeader>
                    <DialogTitle className="dialog-title">
                      {exp.title}
                    </DialogTitle>
                    <DialogDescription className="dialog-description">
                      {exp.description}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
