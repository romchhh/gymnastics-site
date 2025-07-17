import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Parni = () => {
  const galleryPhotos = [
    '/images/parni/photo_2025-07-16_22-27-08.jpg',
    '/images/parni/photo_2025-07-16_22-27-21.jpg',
    '/images/parni/photo_2025-07-16_22-27-43.jpg',
  ];

  return (
    <div className="parni-page">
      <SEO 
        title="Парні елементи | Студія повітряної гімнастики Катерини"
        description="Фотогалерея парних елементів на повітряних полотнах. Виконання складних елементів у парі."
        url="https://aerial-gymnastics-studio.vercel.app/parni"
      />
      <Header />
      
      <main className="parni-main">
        {/* Hero Section */}
        <section className="parni-hero">
          <div className="hero-content">
            <h1>Парні елементи</h1>
            <p>Виконання складних елементів у парі на повітряних полотнах</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Фотогалерея парних елементів</h2>
              <p className="section-subtitle">
                Подивіться, як виконуються парні елементи на наших заняттях
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <Image 
                      src={photo}
                      alt={`Парні елементи - фото ${index + 1}`}
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

export default Parni; 