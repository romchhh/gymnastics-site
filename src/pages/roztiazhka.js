import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Roztiazhka = () => {
  const galleryPhotos = [
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:27.jpg',
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:32.jpg',
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:34.jpg',
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:35.jpg',
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:37.jpg',
    '/images/roztiazhka/IMAGE 2025-07-17 12:17:38.jpg'
  ];

  return (
    <div className="roztiazhka-page">
      <SEO 
        title="Заминка та розтяжка | Студія повітряної гімнастики Катерини"
        description="Фотогалерея заминки та розтяжки. Завершення тренування розтяжкою для відновлення та покращення гнучкості."
        url="https://aerial-gymnastics-studio.vercel.app/roztiazhka"
      />
      <Header />
      
      <main className="roztiazhka-main">
        {/* Hero Section */}
        <section className="roztiazhka-hero">
          <div className="hero-content">
            <h1>Заминка та розтяжка</h1>
            <p>Завершення тренування розтяжкою для відновлення та покращення гнучкості</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Фотогалерея заминки та розтяжки</h2>
              <p className="section-subtitle">
                Подивіться, як проходить заминка та розтяжка на наших заняттях
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <Image 
                      src={photo}
                      alt={`Заминка та розтяжка - фото ${index + 1}`}
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

export default Roztiazhka; 