import ShinyText from "@/components/ShinyText";
import DecryptedText from "@/components/DecryptedText";


export default function Home() {
  return (
    <main className="portfolio-page">
      <nav className="nav-container">
        <div className="nav-liquid-glass">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
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
            <ShinyText text="Hello, I'm Hanif" />
          </h1>
          <p className="namaku-role">
            Cybersecurity Enthusiast & Digital Creator
          </p>
          <p className="namaku-desc">
            Exploring cybersecurity while creating engaging digital content.
          </p>
        </div>
    </section>
  </main>
  );
}
