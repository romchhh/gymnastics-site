import React from 'react';
import Link from 'next/link';

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
              <a href="https://t.me/Kateryna_Demydenko_V" className="cta-button primary" target="_blank" rel="noopener noreferrer">
                ЗАПИСАТИСЯ НА ЗАНЯТТЯ
              </a>
              <Link href="/info" className="cta-button secondary">
                ДІЗНАТИСЯ БІЛЬШЕ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;