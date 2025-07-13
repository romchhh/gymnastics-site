import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Zap, Users, Shield, Star, Award } from 'lucide-react';
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
            <h1>Переваги повітряної гімнастики</h1>
            <p>Відкрийте для себе унікальний вид спорту</p>
          </div>
          <div className="hero-image">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" 
              alt="Переваги повітряної гімнастики"
              width={2020}
              height={400}
            />
          </div>
        </section>

        {/* Benefits for Children */}
        <section className="benefits-children">
          <div className="container">
            <div className="benefits-header">
              <h2>Переваги для дітей</h2>
              <p>Повітряна гімнастика сприяє гармонійному розвитку дитини</p>
            </div>
            
            <div className="benefits-content">
              <div className="benefits-image">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Діти на повітряній гімнастиці"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Heart size={24} />
                  <div>
                    <h3>Фізичний розвиток</h3>
                    <p>Покращує координацію, гнучкість та силу м&apos;язів</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Zap size={24} />
                  <div>
                    <h3>Впевненість у собі</h3>
                    <p>Подолання страхів та досягнення нових висот</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Users size={24} />
                  <div>
                    <h3>Соціальні навички</h3>
                    <p>Робота в команді та нові дружні стосунки</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Shield size={24} />
                  <div>
                    <h3>Безпека</h3>
                    <p>Навчання правильного падіння та контролю тіла</p>
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
              <h2>Переваги для дорослих</h2>
              <p>Ідеальний спосіб підтримувати форму та знімати стрес</p>
            </div>
            
            <div className="benefits-content reverse">
              <div className="benefits-image">
                <Image 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Дорослі на повітряній гімнастиці"
                  width={600}
                  height={400}
                />
              </div>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Heart size={24} />
                  <div>
                    <h3>Кардіо тренування</h3>
                    <p>Ефективне спалювання калорій та покращення витривалості</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Zap size={24} />
                  <div>
                    <h3>Зняття стресу</h3>
                    <p>Медитативний ефект та відключення від повсякденних турбот</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Star size={24} />
                  <div>
                    <h3>Гнучкість</h3>
                    <p>Покращення рухливості суглобів та розтяжки м&apos;язів</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <Award size={24} />
                  <div>
                    <h3>Нові досягнення</h3>
                    <p>Постійний розвиток та освоєння нових елементів</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="health-benefits">
          <div className="container">
            <h2>Вплив на здоров&apos;я</h2>
            <div className="health-grid">
              <div className="health-card">
                <div className="health-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Покращення постави"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="health-content">
                  <h3>Покращення постави</h3>
                  <p>Зміцнення м&apos;язів спини та корекція постави</p>
                </div>
              </div>
              
              <div className="health-card">
                <div className="health-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" 
                    alt="Покращення координації"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="health-content">
                  <h3>Покращення координації</h3>
                  <p>Розвиток вестибулярного апарату та просторової орієнтації</p>
                </div>
              </div>
              
              <div className="health-card">
                <div className="health-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Зміцнення м'язів"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="health-content">
                  <h3>Зміцнення м&apos;язів</h3>
                  <p>Розвиток всіх груп м&apos;язів, особливо кора</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="what-to-expect">
          <div className="container">
            <h2>Чого очікувати на першому занятті</h2>
            <div className="expect-timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h3>Знайомство</h3>
                  <p>Розповідь про техніку безпеки та базові принципи</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h3>Розминка</h3>
                  <p>Підготовка тіла до тренування, розігрів м&apos;язів</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h3>Базові елементи</h3>
                  <p>Вивчення простих елементів та позицій</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h3>Практика</h3>
                  <p>Закріплення вивченого матеріалу</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Готові спробувати?"
          subtitle="Попередній запис обов'язковий"
          primaryButtonText="Записатися на заняття"
          secondaryButtonText="Подивитися розклад"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Info; 