export default function Home() {
  return (
    <main className="portfolio-page">
      <nav className="nav-container">
        <div className="nav-liquid-glass">
          <div className="nav-logo">HANIF</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <section className="hero hero-centered">
        <img
          className="hero-portrait"
          src="/hanif.svg"
          alt="Portrait of Hanif"
          width={435}
          height={653}
          loading="eager"
        />
      </section>
    </main>
  );
}
