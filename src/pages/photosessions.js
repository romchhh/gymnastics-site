import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Photosessions = () => {
  const galleryPhotos = [
    '/images/photosession/IMAGE 2025-07-17 12:19:42.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:40.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:38.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:36.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:33.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:31.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:28.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:27.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:22.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:20.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:17.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:15.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:11.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:09.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:07.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:05.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:03.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:19:01.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:58.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:56.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:55.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:53.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:51.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:49.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:47.jpg',
    '/images/photosession/IMAGE 2025-07-17 12:18:45.jpg',
    '/images/photosession/IMGP9120.JPG',
    '/images/photosession/IMGP9110.JPG',
    '/images/photosession/IMGP9108.JPG',
    '/images/photosession/IMGP9065.JPG'
  ];

  return (
    <div className="photosessions-page">
      <SEO 
        title="Фотосесії | Студія повітряної гімнастики Катерини"
        description="Галерея фотосесій на повітряних полотнах. Яскраві моменти та красиві кадри наших учениць."
        url="https://aerial-gymnastics-studio.vercel.app/photosessions"
      />
      <Header />
      
      <main className="photosessions-main">
        {/* Hero Section */}
        <section className="photosessions-hero">
          <div className="hero-content">
            <h1>Фотосесії</h1>
            <p>Яскраві моменти та красиві кадри наших учениць</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Галерея фотосесій</h2>
              <p className="section-subtitle">
                Подивіться найкращі кадри з наших фотосесій на повітряних полотнах
              </p>
            </div>

            <div className="gallery-grid">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <Image 
                      src={photo}
                      alt={`Фотосесія - фото ${index + 1}`}
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
          title="Хочете свою фотосесію?"
          subtitle="Запишіться на заняття та створіть свої неповторні кадри"
          primaryButtonText="Записатися на заняття"
          secondaryButtonText="Подивитися розклад"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Photosessions; 