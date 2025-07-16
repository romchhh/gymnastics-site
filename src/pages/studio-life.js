import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { Heart, Star, Users, Camera, Award, Trophy, Instagram } from 'lucide-react';

const StudioLifePage = () => {
  const galleryItems = [
    {
      type: 'photo',
      title: 'Тренування на повітряних полотнах',
      description: 'Учениці вивчають базові елементи',
      category: 'training',
      photo: '/images/IMAGE 2025-07-16 15:54:27.jpg'
    },
    {
      type: 'photo',
      title: 'Демонстрація прогресу',
      description: 'Як виглядає результат через місяць занять',
      category: 'progress',
      photo: '/images/IMAGE 2025-07-16 15:54:39.jpg'
    },
    {
      type: 'photo',
      title: 'Групові заняття',
      description: 'Атмосфера підтримки та дружби',
      category: 'group',
      photo: '/images/IMAGE 2025-07-16 15:54:57.jpg'
    },
    {
      type: 'photo',
      title: 'Індивідуальні досягнення',
      description: 'Кожна учениця має свої перемоги',
      category: 'achievement',
      photo: '/images/IMAGE 2025-07-16 15:55:10.jpg'
    },
    {
      type: 'photo',
      title: 'Розминка та розтяжка',
      description: 'Важлива частина кожного заняття',
      category: 'warmup',
      photo: '/images/IMAGE 2025-07-16 15:55:32.jpg'
    },
    {
      type: 'photo',
      title: 'Студійна атмосфера',
      description: 'Затишний простір для навчання',
      category: 'studio',
      photo: '/images/IMAGE 2025-07-16 15:55:51.jpg'
    },
    {
      type: 'photo',
      title: 'Виступи та свята',
      description: 'Демонстрація вивченого матеріалу',
      category: 'performance',
      photo: '/images/IMAGE 2025-07-16 15:56:04.jpg'
    },
    {
      type: 'photo',
      title: 'Складні елементи',
      description: 'Рівень просунутих учениць',
      category: 'advanced',
      photo: '/images/IMAGE 2025-07-16 15:56:18.jpg'
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

  const trainers = [
    {
      name: 'Катерина Демиденко',
      photos: [
        '/images/IMAGE 2025-07-16 15:53:10.jpg',
        '/images/IMAGE 2025-07-16 14:45:55.jpg',
        '/images/IMAGE 2025-07-16 15:52:51.jpg'
      ],
      description: 'Основний тренер студії повітряної гімнастики'
    },
    {
      name: 'Грищенко Анастасія Валеріївна',
      photos: [
        '/images/IMAGE 2025-07-16 14:48:30.jpg',
        '/images/IMAGE 2025-07-16 14:48:24.jpg',
        '/images/IMAGE 2025-07-16 14:48:37.jpg'
      ],
      description: 'Тренерка з 10-ти річним досвідом циркової діяльності, об\'їздила півсвіту, виступаючи на різних сценах. Люблю повітряну гімнастику та еквілібр за поєднання сили та грації. На тренуваннях працюємо над розвитком сили, гнучкості, а також сценічної майстерності. Зі здоровим та веселим підходом до фізичної культури.'
    }
  ];

  const competitions = [
    {
      title: 'Місцеві змагання',
      description: 'Участь у міських та обласних змаганнях з повітряної гімнастики',
      icon: Trophy,
      photo: '/images/IMAGE 2025-07-16 15:53:32.jpg'
    },
    {
      title: 'Національні турніри',
      description: 'Представлення студії на національному рівні',
      icon: Trophy,
      photo: '/images/IMAGE 2025-07-16 15:53:46.jpg'
    },
    {
      title: 'Міжнародні виступи',
      description: 'Досвід участі у міжнародних фестивалях та виступах',
      icon: Trophy,
      photo: '/images/IMAGE 2025-07-16 15:53:59.jpg'
    }
  ];

  return (
    <div className="studio-life-page">
      <SEO 
        title="Життя студії | Студія повітряної гімнастики Катерини"
        description="Дізнайтеся про життя нашої студії повітряної гімнастики. Фотогалерея, відгуки студентів та атмосфера наших тренувань."
        url="https://aerial-gymnastics-studio.vercel.app/studio-life"
      />
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

        {/* Studio History Section */}
        <section className="history-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Коротка історія</h2>
              <p className="section-subtitle">
                Як все починалося та де ми зараз
              </p>
            </div>
            <div className="history-content">
              <div className="history-text">
                <h3>Наша історія</h3>
                <p>Студія працює з 2019 року. В цьому році студії виповнилось 6 років.</p>
                <div className="history-stats">
                  <div className="stat-item">
                    <span className="stat-number">6</span>
                    <span className="stat-label">років досвіду</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2019</span>
                    <span className="stat-label">рік заснування</span>
                  </div>
                </div>
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
                    <Image 
                      src={item.photo}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="gallery-photo"
                    />
                    <div className="photo-overlay">
                      <Camera className="w-12 h-12" />
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

        {/* Trainers Section */}
        <section className="trainers-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Наші тренери</h2>
              <p className="section-subtitle">
                Професійні тренерки з багаторічним досвідом
              </p>
            </div>

            <div className="trainers-grid">
              {trainers.map((trainer, index) => (
                <div key={index} className="trainer-card">
                  <div className="trainer-photos">
                    {trainer.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="trainer-photo">
                        <Image 
                          src={photo}
                          alt={`${trainer.name} - фото ${photoIndex + 1}`}
                          width={300}
                          height={300}
                          className="trainer-image"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="trainer-info">
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <p className="trainer-description">{trainer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitions Section */}
        <section className="competitions-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Участь в змаганнях</h2>
              <p className="section-subtitle">
                Наші досягнення та участь у різних змаганнях
              </p>
            </div>

            <div className="competitions-grid">
              {competitions.map((competition, index) => (
                <div key={index} className="competition-card">
                  <div className="competition-photo">
                    <Image 
                      src={competition.photo}
                      alt={competition.title}
                      width={400}
                      height={250}
                      className="competition-image"
                    />
                  </div>
                  <div className="competition-content">
                    <div className="competition-icon">
                      <competition.icon className="w-12 h-12" />
                    </div>
                    <h3 className="competition-title">{competition.title}</h3>
                    <p className="competition-description">{competition.description}</p>
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

        {/* Instagram Section */}
        <section className="instagram-section">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="section-title">Ми в Instagram</h2>
              <p className="section-subtitle">
                Слідкуйте за нашими останніми новинами та подіями
              </p>
            </div>
            <div className="instagram-content">
              <div className="instagram-photo">
                <Image 
                  src="/images/IMAGE 2025-07-16 15:58:39.jpg"
                  alt="Instagram фото студії"
                  width={400}
                  height={400}
                  className="instagram-image"
                />
              </div>
              <div className="instagram-info">
                <div className="instagram-icon">
                  <Instagram className="w-16 h-16" />
                </div>
                <h3>Слідкуйте за нами</h3>
                <p>Будьте в курсі всіх подій та новин нашої студії</p>
                <a href="https://www.instagram.com/i_n_s_p_i_r_a_t_i_o_n_2019?utm_source=qr&igsh=Z2VpbDVpOHZhdHRp" target="_blank" rel="noopener noreferrer" className="instagram-link">
                  Перейти в Instagram
                </a>
              </div>
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

export default StudioLifePage; 