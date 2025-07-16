import React from 'react';
import Image from 'next/image';
import { Heart, Zap, Users, Shield, Star, Award, MapPin, Clock, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Info = () => {
  return (
    <div className="info-page">
      <SEO 
        title="Переваги повітряної гімнастики | Студія Катерини"
        description="Дізнайтеся про переваги повітряної гімнастики для дітей та дорослих. Покращення фізичної форми, гнучкості, координації та настрою."
        url="https://aerial-gymnastics-studio.vercel.app/info"
      />
      <Header />
      
      <main className="info-main">
        {/* Hero Section */}
        <section className="info-hero">
          <div className="hero-content">
            <h1>Повітряна гімнастика — це ідеальний вибір!</h1>
            <p>⁉️ Хочете, щоб ваша дитина 🙋‍♀️ стала сильнішою, впевненішою та гнучкішою? 🤔</p>
            <p>⁉️ Мрієте знайти заняття, яке допоможе вам підтримувати фізичну форму і зарядить енергією? 🤔</p>
          </div>
          <div className="hero-image">
            <Image 
              src="/images/IMAGE 2025-07-16 14:45:37.jpg" 
              alt="Переваги повітряної гімнастики"
              width={2020}
              height={1000}
            />
          </div>
        </section>

        {/* Benefits for Children */}
        <section className="benefits-children">
          <div className="container">
            <div className="benefits-header">
              <h2>➡️ Для дівчаток це:</h2>
            </div>
            
            <div className="benefits-content">
              <div className="benefits-image">
                <Image 
                  src="/images/IMAGE 2025-07-16 14:45:51.jpg" 
                  alt="Діти на повітряній гімнастиці"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-number">1</div>
                  <div>
                    <h3>Розвиток фізичної сили та витривалості</h3>
                    <p>Заняття зміцнюють м'язи всього тіла, особливо рук, ніг та спини.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">2</div>
                  <div>
                    <h3>Гнучкість і координація</h3>
                    <p>Вправи на полотнах покращують розтяжку та допомагають розвинути відчуття рівноваги.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">3</div>
                  <div>
                    <h3>Покращення постави</h3>
                    <p>Регулярні тренування сприяють здоровій поставі, що важливо для розвитку в дитячому віці.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">4</div>
                  <div>
                    <h3>Розвиток впевненості в собі</h3>
                    <p>Виконання складних елементів допомагає дітям долати страхи та відчувати гордість за свої досягнення.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-number">5</div>
                  <div>
                    <h3>Творчий розвиток</h3>
                    <p>Повітряна гімнастика включає елементи танцю, що стимулює художнє мислення та естетичне почуття.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Adults */}
        <section className="benefits-adults">
          <div className="container">
            <div className="benefits-header">
              <h2>➡️ Для жінок:</h2>
            </div>
            
            <div className="benefits-content reverse">
              <div className="benefits-image">
                <Image 
                  src="/images/IMAGE 2025-07-16 14:46:00.jpg" 
                  alt="Дорослі на повітряній гімнастиці"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-number">1</div>
                  <div>
                    <h3>Фізичний тонус і підтягнуте тіло</h3>
                    <p>Заняття допомагають зміцнити м'язи, зробити тіло гнучким і витонченим.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">2</div>
                  <div>
                    <h3>Зниження стресу</h3>
                    <p>Тренування на полотнах дають відчуття легкості та свободи, що сприяє зняттю напруги та підвищенню настрою.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">3</div>
                  <div>
                    <h3>Поліпшення рівноваги та координації</h3>
                    <p>Це допомагає не лише у спорті, а й у повсякденному житті.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-number">4</div>
                  <div>
                    <h3>Впевненість у собі</h3>
                    <p>Оволодіння новими трюками зміцнює віру у власні сили та можливості.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-number">5</div>
                  <div>
                    <h3>Естетика і грація</h3>
                    <p>Повітряна гімнастика допомагає жінкам розкрити свою жіночність і навчитися рухатися красиво та впевнено.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Message */}
        <section className="personal-message">
          <div className="container">
            <div className="message-content">
              <h2>Допоможу вашій дитині розвинути силу, гнучкість та впевненість у собі</h2>
              <p>А вам — знайти баланс, гармонію та підтягнуте тіло.</p>
            </div>
          </div>
        </section>

        {/* Schedule and Location */}
        <section className="schedule-location">
          <div className="container">
            <div className="info-cards">
              <div className="info-card">
                <Clock size={48} />
                <h3>✏️ Дні занять:</h3>
                <p>Вівторок, Четвер, Субота, Неділя</p>
              </div>
              
              <div className="info-card">
                <MapPin size={48} />
                <h3>✏️ Адреса:</h3>
                <p>м. Київ, бульв. Миколи Руденка, 12</p>
                <p>Торговий центр Дніпро (адмін будівля на ринку) 4 поверх.</p>
              </div>
              
              <div className="info-card">
                <Phone size={48} />
                <h3>Попередній запис обов'язковий</h3>
                <p><strong>📱0677051520</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="final-cta">
          <div className="container">
            <h2>Долучайтесь до занять і підкорюйте висоти разом із нами!</h2>
          </div>
        </section>

        <CTASection 
          title="Готові почати?"
          subtitle="Зв'яжіться з нами для запису на заняття"
          primaryButton={{
            text: "ЗАПИСАТИСЯ НА ЗАНЯТТЯ",
            href: "https://t.me/Kateryna_Demydenko_V"
          }}
          secondaryButton={{
            text: "ПЕРЕГЛЯНУТИ РОЗКЛАД",
            href: "/schedule"
          }}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Info; 