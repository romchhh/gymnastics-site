import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Heart, MapPin, Clock, Phone, Instagram, Zap, Users, Trophy } from 'lucide-react';

// Імпорт стилів
import '../styles/Global.css';
import '../styles/Home.css';

const HomePage = () => {
  const quickInfo = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Розклад",
      description: "Вівторок, Четвер, Субота, Неділя",
      link: "/schedule"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Локація",
      description: "бульв. Миколи Руденка, 12, ТЦ Дніпро",
      link: "/location"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Групи",
      description: "Діти від 8 років та дорослі",
      link: "/info"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Фізична сила",
      description: "Розвиток м'язів всього тіла"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Впевненість",
      description: "Подолання страхів і досягнення цілей"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Грація",
      description: "Красивий та впевнений рух"
    }
  ];

  return (
    <div className="homepage">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Info Section */}
        <section className="quick-info-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="section-title">Швидка інформація</h2>
            </div>
            <div className="quick-info-grid">
              {quickInfo.map((item, index) => (
                <a key={index} href={item.link} className="quick-info-card">
                  <div className="quick-info-icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Trainer Section */}
        <section className="about-trainer-section">
          <div className="container mx-auto px-6 py-16">
            <div className="about-trainer-content">
              <div className="trainer-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <Heart className="w-16 h-16 mb-4" />
                    <p>Фото тренера<br />Катерини</p>
                  </div>
                </div>
              </div>
              <div className="trainer-text">
                <h2>Привіт, я Катерина!</h2>
                <p className="trainer-intro">
                  Я тренер з повітряної гімнастики з багаторічним досвідом. 
                  Проводжу заняття для дітей від 8 років та дорослих.
                </p>
                <p>
                  Моя мета — допомогти кожному учню розкрити свій потенціал, 
                  розвинути силу, гнучкість та впевненість у собі через красу 
                  повітряних полотен.
                </p>
                <div className="trainer-contact">
                  <a href="https://t.me/kateryna_demydenko" className="contact-button">
                    <Phone className="w-5 h-5" />
                    Telegram
                  </a>
                  <a href="https://instagram.com/kateryna__demydenko" className="contact-button">
                    <Instagram className="w-5 h-5" />
                    @kateryna__demydenko
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="section-title">Чому повітряна гімнастика?</h2>
              <p className="section-subtitle">
                Переваги занять для вашого розвитку
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/info" className="cta-button primary">
                Дізнатися всі переваги
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="final-cta-section">
          <div className="container mx-auto px-6 py-16">
            <div className="cta-content">
              <h2>Готові розпочати?</h2>
              <p>Попередній запис обов&apos;язковий</p>
              <div className="cta-buttons">
                <a href="https://t.me/kateryna_demydenko" className="cta-button primary">
                  Записатися на заняття
                </a>
                <a href="/schedule" className="cta-button secondary">
                  Подивитися розклад
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;