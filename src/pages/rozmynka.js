import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Rozmynka = () => {
  const galleryPhotos = [
    '/images/rozmynka/IMG-1ae6c9ca37906b83573465a4170549df-V.jpg',
    '/images/rozmynka/photo_2025-07-16_22-27-16.jpg',
    '/images/rozmynka/photo_2025-07-16_22-27-24.jpg',
    '/images/rozmynka/photo_2025-07-16_22-27-34.jpg',
  ];

  return (
    <div className="rozmynka-page">
      <SEO 
        title="Розминка | Студія повітряної гімнастики Катерини"
        description="Фотогалерея розминки на повітряних полотнах. Підготовка м'язів та суглобів для безпечних тренувань."
        url="https://aerial-gymnastics-studio.vercel.app/rozmynka"
      />
      <Header />
      
      <main className="rozmynka-main">
        {/* Hero Section */}
        <section className="rozmynka-hero">
          <div className="hero-content">
            <h1>Розминка</h1>
            <p>Кожне заняття починається з ретельної розминки для підготовки м&apos;язів та суглобів</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Фотогалерея розминки</h2>
              <p className="section-subtitle">
                Подивіться, як проходить розминка на наших заняттях
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <Image 
                      src={photo}
                      alt={`Розминка - фото ${index + 1}`}
                      className="gallery-photo"
                      width={600}
                      height={900}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Готові приєднатися?"
          subtitle="Попередній запис обов'язковий"
          primaryButtonText="Записатися на заняття"
          secondaryButtonText="Подивитися розклад"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Rozmynka; 