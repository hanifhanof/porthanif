"use client";

import { useState } from "react";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";

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
            {!introDone ? (
              <SplitText
                text="Hello, I'm Hanif"
                tag="span"
                splitType="chars"
                delay={45}
                duration={0.9}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                onLetterAnimationComplete={() => setIntroDone(true)}
                className="hero-intro-text"
              />
            ) : (
              <ShinyText text="Hello, I'm Hanif" />
            )}
          </h1>

          <p className="namaku-role">Cybersecurity Enthusiast & Digital Creator</p>
          <p className="namaku-desc">
            Exploring cybersecurity while creating engaging digital content.
          </p>
        </div>
      </section>
    </main>
  );
}