import React from "react";
import heroImage from '../assets/hero-wall.png'; // keep image in src folder

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <img src={heroImage} className="hero-image" alt="Lumo Walls Art" />
          <h1>Transform Walls Into Living Art</h1>
          <p>Your Walls. Your Art. Your Story.</p>
          <button>Explore Designs</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Custom Wall Art</h3>
          <p>Unique, personalized wall designs made for your space.</p>
        </div>

        <div className="feature-card">
          <h3>Premium Materials</h3>
          <p>High-quality textures, paints, and finishes.</p>
        </div>

        <div className="feature-card">
          <h3>Creative Experts</h3>
          <p>Designed by professional artists & designers.</p>
        </div>
      </section>

      <section className="gallery">
        <h2>Featured Wall Projects</h2>
        <div className="gallery-grid">
          <div className="img-box"></div>
          <div className="img-box"></div>
          <div className="img-box"></div>
          <div className="img-box"></div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready To Upgrade Your Walls?</h2>
        <button>Get A Free Consultation</button>
      </section>
    </>
  );
}

export default Home;
