import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Play, Heart, Star, Users, Camera, Award } from 'lucide-react';
import '../styles/Global.css';
import '../styles/StudioLife.css';

const StudioLifePage = () => {
  const galleryItems = [
    {
      type: 'photo',
      title: 'Тренування на повітряних полотнах',
      description: 'Учениці вивчають базові елементи',
      category: 'training'
    },
    {
      type: 'video',
      title: 'Демонстрація прогресу',
      description: 'Як виглядає результат через місяць занять',
      category: 'progress'
    },
    {
      type: 'photo',
      title: 'Групові заняття',
      description: 'Атмосфера підтримки та дружби',
      category: 'group'
    },
    {
      type: 'photo',
      title: 'Індивідуальні досягнення',
      description: 'Кожна учениця має свої перемоги',
      category: 'achievement'
    },
    {
      type: 'video',
      title: 'Розминка та розтяжка',
      description: 'Важлива частина кожного заняття',
      category: 'warmup'
    },
    {
      type: 'photo',
      title: 'Студійна атмосфера',
      description: 'Затишний простір для навчання',
      category: 'studio'
    },
    {
      type: 'photo',
      title: 'Виступи та свята',
      description: 'Демонстрація вивченого матеріалу',
      category: 'performance'
    },
    {
      type: 'video',
      title: 'Складні елементи',
      description: 'Рівень просунутих учениць',
      category: 'advanced'
    }
  ];

  const testimonials = [
    {
      name: 'Марія, 14 років',
      text: 'Завдяки заняттям я стала набагато сильнішою і впевненішою в собі. Катерина - чудовий тренер!',
      rating: 5
    },
    {
      name: 'Олена, мама Софії',
      text: 'Дочка з радістю йде на кожне заняття. Помітний прогрес у фізичному розвитку та поставі.',
      rating: 5
    },
    {
      name: 'Анна, 28 років',
      text: 'Знайшла тут не лише спосіб підтримувати форму, а й справжню пристрасть. Рекомендую всім!',
      rating: 5
    }
  ];

  return (
    <div className="studio-life-page">
      <Header />
      <main className="studio-life-main">
        {/* Hero Section */}
        <section className="studio-life-hero">
          <div className="hero-background">
            <div className="hero-image-placeholder">
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1>Життя нашої студії</h1>
                <p>Подивіться, як проходять наші заняття та які результати досягають наші учениці</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Фото та відео з занять</h2>
              <p className="section-subtitle">
                Атмосфера студії, прогрес учениць та яскраві моменти тренувань
              </p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image">
                    <div className="image-placeholder">
                      {item.type === 'video' && (
                        <div className="video-overlay">
                          <Play className="w-12 h-12" />
                        </div>
                      )}
                      {item.type === 'photo' && (
                        <div className="photo-overlay">
                          <Camera className="w-12 h-12" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="gallery-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={`category-tag ${item.category}`}>
                      {item.category === 'training' && 'Тренування'}
                      {item.category === 'progress' && 'Прогрес'}
                      {item.category === 'group' && 'Групові'}
                      {item.category === 'achievement' && 'Досягнення'}
                      {item.category === 'warmup' && 'Розминка'}
                      {item.category === 'studio' && 'Студія'}
                      {item.category === 'performance' && 'Виступи'}
                      {item.category === 'advanced' && 'Просунуті'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Відгуки наших учениць</h2>
              <p className="section-subtitle">
                Що говорять про нашу студію ті, хто вже долучився до занять
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 filled" />
                      ))}
                    </div>
                    <p>&quot;{testimonial.text}&quot;</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <Heart className="w-6 h-6" />
                      </div>
                      <span>{testimonial.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Stats */}
        <section className="studio-stats">
          <div className="container mx-auto px-6 py-16">
            <div className="stats-grid">
              <div className="stat-card">
                <Users className="w-12 h-12 mb-4" />
                <div className="stat-number">50+</div>
                <div className="stat-label">Активних учениць</div>
              </div>
              <div className="stat-card">
                <Award className="w-12 h-12 mb-4" />
                <div className="stat-number">3+</div>
                <div className="stat-label">Роки досвіду</div>
              </div>
              <div className="stat-card">
                <Heart className="w-12 h-12 mb-4" />
                <div className="stat-number">100%</div>
                <div className="stat-label">Задоволених учениць</div>
              </div>
              <div className="stat-card">
                <Star className="w-12 h-12 mb-4" />
                <div className="stat-number">4</div>
                <div className="stat-label">Дні на тиждень</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="studio-life-cta">
          <div className="container mx-auto px-6 py-16">
            <div className="cta-content">
              <h2>Готові приєднатися?</h2>
              <p>Попередній запис обов&apos;язковий</p>
              <div className="cta-buttons">
                <a href="https://t.me/kateryna_demydenko" className="cta-button primary">
                  Записатися на заняття
                </a>
                <Link href="/schedule" className="cta-button secondary">
                  Подивитися розклад
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudioLifePage; 