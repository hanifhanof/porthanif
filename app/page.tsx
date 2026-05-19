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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  // Project Categories Data
  const projectCategories = [
    {
      id: 'personal',
      title: 'My Personal Projects',
      description: 'Maintenance',
      subcategories: [
        {
          id: 'maintenance',
          title: 'Maintenance',
          projects: []
        }
      ]
    },
    {
      id: 'campus',
      title: 'Projects on Campus',
      description: 'Academic coursework and assignments',
      bgImage: '/pradita-university.png', // Silakan ganti dengan nama file gambar Anda di folder public
      subcategories: [
        {
          id: 'pancasila',
          title: 'Pancasila Course Project',
          description: 'Project ini berfokus pada penerapan nilai-nilai Pancasila di lingkungan kampus melalui riset, wawancara, dan penyajian materi visual. Output utamanya berupa proposal riset, video wawancara, serta video grafis sebagai media edukasi.',
          projects: [
            {
              name: 'Proposal Project',
              description: 'Dokumen proposal lengkap (PDF/Drive).',
              href: 'https://docs.google.com/document/d/1CP1GpujhF6zESEUAGwNOq-an_54TS6q1HiyTW0FVazQ/edit?tab=t.0'
            },
            {
              name: 'YouTube Wawancara',
              description: 'Video wawancara narasumber terkait isu kampus.',
              href: 'https://youtu.be/C29ctHWANA8?si=Ya9W1N6ToK03ckpJ'
            },
            {
              name: 'YouTube Video Grafis',
              description: 'Visualisasi grafis untuk rangkuman hasil riset.',
              href: 'https://youtu.be/HhcY3ht6SIY?si=orZx922WLYydhLed'
            }
          ]
        },
        {
          id: 'data-structure',
          title: 'Data Structures & Algorithms',
          projects: [
            { name: 'Binary Search Tree Implementation', description: 'C++ implementation with visualization' },
            { name: 'Graph Algorithm Solver', description: 'Dijkstra and BFS implementations' }
          ]
        },
        {
          id: 'web-dev',
          title: 'Web Development',
          projects: [
            { name: 'E-commerce Platform', description: 'Full-stack project using Next.js' },
            { name: 'Real-time Chat App', description: 'WebSocket implementation' }
          ]
        }
      ]
    }
  ];

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
      title: "INDOCOMTECH",
      role: "Company / Role Name",
      thumbnail: "/arya-1.png",
      images: ["/arya-1.png", "/arya-3.png", "/arya-2.png"], // Tambahkan banyak path gambar di sini
      description: "Add your detailed description for the third experience here."
    },
    {
      id: 4,
      title: "bluAmbassador",
      role: "BCA Digital",
      thumbnail: "/bluAmbassador.png",
      images: ["/bluAmbassador.png", "/bluAmbassador-2.png"], // Tambahkan banyak path gambar di sini
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

  const selectedCategoryData = projectCategories.find((category) => category.id === selectedCategory);
  const selectedSubCategoryData = selectedCategoryData?.subcategories.find(
    (subcategory) => subcategory.id === selectedSubCategory
  );

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
          <p className="namaku-role">Cybersecurity Learner & Digital Creator</p>
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
                textClassName="text-base tracking-tight md:text-lg md:tracking-wide"
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
      {/* SEKSI PROJECT */}
      <section className="project-section" id="project">
        <h2 className="experience-title">Projects</h2>
        
        {/* Main Category Cards */}
        <div className="project-categories">
          {projectCategories.map((category) => (
            <motion.div
              key={category.id}
              className="project-category-card"
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundImage: category.bgImage 
                  ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${category.bgImage})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <div className="category-arrow">→</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subcategories Modal */}
      {selectedCategory && (
        <motion.div
          className="project-modal-overlay"
          onClick={() => setSelectedCategory(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedCategory(null)}
            >
              ✕
            </button>
            
            <h2>{projectCategories.find(c => c.id === selectedCategory)?.title}</h2>
            
            <div className="subcategories-list">
              {projectCategories
                .find(c => c.id === selectedCategory)
                ?.subcategories.map((subcat) => (
                <motion.div
                  key={subcat.id}
                  className="subcategory-item"
                  onClick={() => setSelectedSubCategory(subcat.id)}
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3>{subcat.title}</h3>
                  <p>{subcat.projects.length} projects</p>
                  <div className="item-arrow">→</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Projects Detail Modal */}
      {selectedCategory && selectedSubCategory && (
        <motion.div
          className="project-modal-overlay"
          onClick={() => setSelectedSubCategory(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedSubCategory(null)}
            >
              ✕
            </button>
            
            <button
              className="modal-back-btn"
              onClick={() => setSelectedSubCategory(null)}
            >
              ← Back
            </button>
            
            <h2>{selectedSubCategoryData?.title}</h2>

            <div
              className={`project-detail-scroll ${
                selectedSubCategoryData?.id === "pancasila" ? "is-scrollable" : ""
              }`}
            >
              {selectedSubCategoryData?.description && (
                <p className="subcategory-description">
                  {selectedSubCategoryData.description}
                </p>
              )}

              <div className="projects-list">
                {selectedSubCategoryData?.projects.map((project, idx) =>
                  project.href ? (
                    <motion.a
                      key={idx}
                      className="project-item project-item-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </motion.a>
                  ) : (
                    <motion.div
                      key={idx}
                      className="project-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CONTACT SECTION */}
      <section className="experience-section" id="contact">
        <h2 className="experience-title">Get in Touch</h2>
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-8">Have a project in mind or just want to chat?</p>
          <a href="mailto:your-email@example.com" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            Say Hello
          </a>
        </div>
      </section>

    </main>
  );
}
