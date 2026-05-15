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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
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
  }, []);

  return (
    <main className="portfolio-page">    
      <nav className={`nav-container ${showNavbar ? "show-nav" : "hide-nav"}`}>
        <div className="nav-liquid-glass">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

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

      <section className="experience-section" id="work">
  <h2 className="experience-title">Experience</h2>
</section>
    </main>
  );
}