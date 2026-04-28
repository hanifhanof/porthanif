"use client";

import { useState } from "react";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="portfolio-page">
      <nav className="nav-container">
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
        <p>
          I'm a passionate cybersecurity enthusiast and digital creator, always eager to learn and explore the latest trends in both fields.
        </p>
      </section>
    </main>
  );
}