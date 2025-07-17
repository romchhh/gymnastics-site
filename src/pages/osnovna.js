import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Osnovna = () => {
  const galleryPhotos = [
    '/images/osnovna/IMAGE 2025-07-17 12:16:14.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:19.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:22.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:24.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:27.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:29.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:31.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:33.jpg',

    '/images/osnovna/IMAGE 2025-07-17 12:16:35.jpg',
    '/images/osnovna/IMAGE 2025-07-17 12:16:38.jpg',

    '/images/osnovna/IMAGE 2025-07-17 12:16:41.jpg',
  ];

  return (
    <div className="osnovna-page">
      <SEO 
        title="Основна частина тренування | Студія повітряної гімнастики Катерини"
        description="Фотогалерея основної частини тренувань. Вивчення нових елементів, відпрацювання техніки та створення зв'язок."
        url="https://aerial-gymnastics-studio.vercel.app/osnovna"
      />
      <Header />
      
      <main className="osnovna-main">
        {/* Hero Section */}
        <section className="osnovna-hero">
          <div className="hero-content">
            <h1>Основна частина тренування</h1>
            <p>Вивчення нових елементів, відпрацювання техніки та створення зв&apos;язок</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Фотогалерея основної частини</h2>
              <p className="section-subtitle">
                Подивіться, як проходить основна частина тренувань
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <Image 
                      src={photo}
                      alt={`Основна частина - фото ${index + 1}`}
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

export default Osnovna; 