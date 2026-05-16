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

import { motion } from "motion/react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Mengatur sembunyi/muncul Navbar saat scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Jika menu mobile sedang terbuka, jangan sembunyikan navbar
      if (menuOpen) return;

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // 2. Mengunci scroll body saat menuOpen bernilai true
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <main className="portfolio-page">    
      {/* NAVBAR CONTAINER */}
      <nav className={`nav-container ${showNavbar ? "show-nav" : "hide-nav"}`}>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Tombol Hamburger dengan onClick yang dipaksa stop propagation */}
        <button 
          className="hamburger-btn"
          onClick={(e) => {
            e.stopPropagation(); // Mencegah interupsi klik dari luar
            setMenuOpen(!menuOpen);
          }}
          aria-expanded={menuOpen}
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
        >
          <span className="hamburger-bar bar-1"></span>
          <span className="hamburger-bar bar-2"></span>
          <span className="hamburger-bar bar-3"></span>
        </button>
      </nav>

      {/* OVERLAY MENU MOBILE */}
      <div 
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobile-menu"
        onClick={() => setMenuOpen(false)} // Klik di luar area menu untuk menutup
      >
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* SEKSI HERO */}
      <section className="hero">
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
          <p className="namaku-desc">
            Exploring cybersecurity while creating engaging digital content.
          </p>
        </div>
      </section>

      {/* SEKSI ABOUT */}
      <section className="about-section">
        <ScrollReveal
          baseOpacity={0.9}
          enableBlur
          baseRotation={5}
          blurStrength={9}
        >
          I’m Hanif, an Information Technology student passionate about technology, creativity, and continuous learning. I was initially interested in visual design, but recently I’ve become more interested in cybersecurity and exploring how systems work behind the scenes. I enjoy learning through hands-on experiences such as building projects, practicing Linux fundamentals, and exploring cybersecurity challenges. I aim to grow as a developer who combines creativity, curiosity, and problem solving to create simple and meaningful digital experiences.
        </ScrollReveal>
      </section>

      {/* SEKSI EXPERIENCE */}
      <section className="experience-section" id="work">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-grid">
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="experience-card"
              >
                <img
                  src="/lawson.png"
                  alt="OverTheWire Logo"
                  className="experience-logo"
                />
                <div className="experience-info">
                  <h3>Cybersecurity Learning</h3>
                  <p>OverTheWire & CTF Practice</p>
                </div>
              </motion.div>
            </DialogTrigger>

            <DialogContent className="experience-dialog">
              <img
                src="/lawson.png"
                alt="Cybersecurity"
                className="dialog-image"
              />
              <DialogHeader>
                <DialogTitle className="dialog-title">
                  Cybersecurity Learning
                </DialogTitle>
                <DialogDescription className="dialog-description">
                  I have been exploring cybersecurity through platforms such as OverTheWire and CTF challenges to strengthen my understanding of Linux fundamentals, security concepts, and problem solving through hands-on practice.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}