import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-line">Повітряна</span>
              <span className="hero-title-line">гімнастика</span>
              <span className="hero-title-line">з Катериною</span>
            </h1>
            <p className="hero-subtitle">
              Для дітей від 8 років та дорослих
            </p>
            <p className="hero-description">
              Розвиток сили, гнучкості та впевненості у собі через красу повітряних полотен
            </p>
            <div className="hero-buttons">
              <a href="https://t.me/kateryna_demydenko" className="cta-button primary">
                ЗАПИСАТИСЯ НА ЗАНЯТТЯ
              </a>
              <a href="/info" className="cta-button secondary">
                ДІЗНАТИСЯ БІЛЬШЕ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;