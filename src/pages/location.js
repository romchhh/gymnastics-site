import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Location = () => {
  return (
    <div className="location-page">
      <SEO 
        title="Локація та контакти | Студія повітряної гімнастики Катерини"
        description="Знайдіть нашу студію повітряної гімнастики в Києві. Адреса: бульв. Миколи Руденка, 12, ТЦ Дніпро, 3 поверх. Телефон: 067-705-15-20"
        url="https://aerial-gymnastics-studio.vercel.app/location"
      />
      <Header />
      
      <main className="location-main">
        {/* Hero Section */}
        <section className="location-hero">
          <div className="hero-content">
            <h1>Локація та контакти</h1>
            <p>Знайдіть нас у самому серці міста</p>
          </div>
          <div className="hero-image">
            <Image 
              src="/images/IMAGE 2025-07-16 15:18:44.jpg" 
              alt="Студія повітряної гімнастики"
              width={2070}
              height={400}
            />
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={32} />
                </div>
                <h3>Адреса</h3>
                <p>бульв. Миколи Руденка, 12</p>
                <p>ТЦ Дніпро, 3 поверх</p>
                <p>м. Київ</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={32} />
                </div>
                <h3>Телефон</h3>
                <a href="tel:+380677051520">+38 (067) 705-15-20</a>
                <p>Катерина - тренер</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Instagram size={32} />
                </div>
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/i_n_s_p_i_r_a_t_i_o_n_2019?utm_source=qr&igsh=Z2VpbDVpOHZhdHRp" target="_blank" rel="noopener noreferrer">
                  @i_n_s_p_i_r_a_t_i_o_n_2019
                </a>
                <p>Слідкуйте за нашими новинами</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={32} />
                </div>
                <h3>Години роботи</h3>
                <p>Вт, Чт, Cб: 15:00 - 16:00, 16:00 - 17:00</p>
                <p>Нд: 14:00 - 15:00, 15:00 - 16:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Photos */}
        <section className="studio-photos">
          <div className="container">
            <h2>Наша студія</h2>
            <div className="photos-grid">
              <div className="photo-item">
                <Image 
                  src="/images/IMAGE 2025-07-16 15:18:48.jpg" 
                  alt="Зал для повітряної гімнастики"
                  width={800}
                  height={800}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="photo-overlay">
                  <h3>Просторий зал</h3>
                  <p>Професійне обладнання для безпечних тренувань</p>
                </div>
              </div>
              
              <div className="photo-item">
                <Image 
                  src="/images/IMAGE 2025-07-16 15:18:51.jpg" 
                  alt="Роздягальня"
                  width={800}
                  height={800}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="photo-overlay">
                  <h3>Зручні роздягальні</h3>
                  <p>Комфортні умови для переодягання</p>
                </div>
              </div>
              
              <div className="photo-item">
                <Image 
                  src="/images/IMAGE 2025-07-16 15:18:53.jpg" 
                  alt="Зона відпочинку"
                  width={800}
                  height={800}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="photo-overlay">
                  <h3>Зона відпочинку</h3>
                  <p>Місце для відновлення після тренування</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2>Як нас знайти</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <Image 
                  src="/images/Знімок екрана 2025-07-16 о 15.17.21.png" 
                  alt="Карта локації"
                  width={800}
                  height={500}
                />
                <div className="map-overlay">
                  <h3>ТЦ Дніпро</h3>
                  <p>бульв. Миколи Руденка, 12</p>
                  <p>3 поверх</p>
                </div>
              </div>
              <div className="directions">
                <h3>Як дістатися</h3>
                <ul>
                  <li>🚇 Метро: станція &quot;Святошино&quot; (далеко)</li>
                  <li>🚊 Швидкісний трамвай: зупинка &quot;Ринок Дніпро&quot;</li>
                  <li>🚗 Автомобіль: безкоштовна парковка</li>
                  <li>🚶 Пішки: від центру міста 20 хвилин</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Готові розпочати?"
          subtitle="Попередній запис обов'язковий"
          primaryButtonText="Записатися на заняття"
          secondaryButtonText="Подивитися розклад"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Location; 