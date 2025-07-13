import React from 'react';
import { MapPin, Phone, Instagram, Clock, Users, Car } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Location.css';
import '../styles/Global.css';

const Location = () => {
  return (
    <div className="location-page">
      <Header />
      
      <main className="location-main">
        {/* Hero Section */}
        <section className="location-hero">
          <div className="hero-content">
            <h1>Локація та контакти</h1>
            <p>Знайдіть нас у самому серці міста</p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Студія повітряної гімнастики"
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
                <a href="https://instagram.com/kateryna__demydenko" target="_blank" rel="noopener noreferrer">
                  @kateryna__demydenko
                </a>
                <p>Слідкуйте за нашими новинами</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={32} />
                </div>
                <h3>Години роботи</h3>
                <p>Вт, Чт: 18:00 - 21:00</p>
                <p>Сб, Нд: 10:00 - 16:00</p>
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
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" 
                  alt="Зал для повітряної гімнастики"
                />
                <div className="photo-overlay">
                  <h3>Просторий зал</h3>
                  <p>Професійне обладнання для безпечних тренувань</p>
                </div>
              </div>
              
              <div className="photo-item">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Роздягальня"
                />
                <div className="photo-overlay">
                  <h3>Зручні роздягальні</h3>
                  <p>Комфортні умови для переодягання</p>
                </div>
              </div>
              
              <div className="photo-item">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Зона відпочинку"
                />
                <div className="photo-overlay">
                  <h3>Зона відпочинку</h3>
                  <p>Місце для відновлення після тренування</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="location-features">
          <div className="container">
            <h2>Переваги нашої локації</h2>
            <div className="features-grid">
              <div className="feature-item">
                <Car size={48} />
                <h3>Зручне паркування</h3>
                <p>Велика парковка біля торгового центру</p>
              </div>
              
              <div className="feature-item">
                <MapPin size={48} />
                <h3>Центр міста</h3>
                <p>Легко дістатися громадським транспортом</p>
              </div>
              
              <div className="feature-item">
                <Users size={48} />
                <h3>Безпечне середовище</h3>
                <p>Охорона та відеоспостереження 24/7</p>
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
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Карта локації"
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
                  <li>🚇 Метро: станція "Позняки" (5 хвилин пішки)</li>
                  <li>🚌 Автобус: зупинка "ТЦ Дніпро"</li>
                  <li>🚗 Автомобіль: безкоштовна парковка</li>
                  <li>🚶 Пішки: від центру міста 20 хвилин</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Готові розпочати?</h2>
              <p>Попередній запис обов&apos;язковий</p>
              <a href="https://t.me/kateryna_demydenko" className="cta-button">
                Записатися на заняття
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Location; 