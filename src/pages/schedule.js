import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Calendar, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Schedule = () => {
  const scheduleData = [
    {
      day: 'Вівторок',
      classes: [
        { time: '15:00 - 16:00', group: 'Всі віки', level: 'Всі рівні' },
        { time: '16:00 - 17:00', group: 'Всі віки', level: 'Всі рівні' }
      ]
    },
    {
      day: 'Четвер',
      classes: [
        { time: '15:00 - 16:00', group: 'Всі віки', level: 'Всі рівні' },
        { time: '16:00 - 17:00', group: 'Всі віки', level: 'Всі рівні' }
      ]
    },
    {
      day: 'Субота',
      classes: [
        { time: '15:00 - 16:00', group: 'Всі віки', level: 'Всі рівні' },
        { time: '16:00 - 17:00', group: 'Всі віки', level: 'Всі рівні' }
      ]
    },
    {
      day: 'Неділя',
      classes: [
        { time: '14:00 - 15:00', group: 'Всі віки', level: 'Всі рівні' },
        { time: '15:00 - 16:00', group: 'Всі віки', level: 'Всі рівні' }
      ]
    }
  ];

  return (
    <div className="schedule-page">
      <SEO 
        title="Розклад занять | Студія повітряної гімнастики Катерини"
        description="Розклад занять повітряної гімнастики для дітей та дорослих. Вівторок, четвер, субота, неділя. Попередній запис обов'язковий."
        keywords="розклад занять, повітряна гімнастика, час тренувань, запис на заняття"
      />
      <Header />
      
      <main className="schedule-main">
        {/* Hero Section */}
        <section className="schedule-hero">
          <div className="hero-content">
            <h1>Розклад занять</h1>
            <p>Оберіть зручний час для тренувань</p>
          </div>
          <div className="hero-image">
            <Image 
              src="/images/IMAGE 2025-07-16 15:33:12.jpg" 
              alt="Розклад занять повітряної гімнастики"
              width={2070}
              height={400}
            />
          </div>
        </section>

        {/* Schedule Table */}
        <section className="schedule-table-section">
          <div className="container">
            <div className="schedule-table">
              <table>
                <thead>
                  <tr>
                    <th>День тижня</th>
                    <th>Час</th>
                    <th>Група</th>
                    <th>Рівень</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((day, dayIndex) => (
                    day.classes.map((classItem, classIndex) => (
                      <tr key={`${dayIndex}-${classIndex}`}>
                        {classIndex === 0 && (
                          <td rowSpan={day.classes.length} className="day-cell">
                            {day.day}
                          </td>
                        )}
                        <td className="time-cell">
                          <Clock size={16} />
                          {classItem.time}
                        </td>
                        <td className="group-cell">{classItem.group}</td>
                        <td className="level-cell">
                          <span className={`level-badge ${classItem.level.toLowerCase()}`}>
                            {classItem.level}
                          </span>
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="training-process">
          <div className="container">
            <h2>Як проходять тренування</h2>
            <div className="process-grid">
              <Link href="/rozmynka" className="process-item">
                <div className="process-image">
                  <Image 
                    src="/images/IMAGE 2025-07-16 15:32:44.jpg" 
                    alt="Розминка, підказка, розвиток гнучкості"
                    width={2020}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Розминка</h3>
                  <p>Кожне заняття починається з ретельної розминки для підготовки м&apos;язів та суглобів</p>
                </div>
              </Link>
              
              <Link href="/osnovna" className="process-item">
                <div className="process-image">
                  <Image 
                    src="/images/IMAGE 2025-07-16 15:33:33.jpg" 
                    alt="Основна частина, відпрацювання техніки, створення зв'язок"
                    width={2070}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Основна частина</h3>
                  <p>Вивчення нових елементів, відпрацювання техніки та створення зв&apos;язок</p>
                </div>
              </Link>
              
              <Link href="/roztiazhka" className="process-item">
                <div className="process-image">
                  <Image 
                    src="/images/IMAGE 2025-07-16 15:33:51.jpg" 
                    alt="Заминка"
                    width={2070}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Заминка та розтяжка</h3>
                  <p>Завершення тренування розтяжкою для відновлення та покращення гнучкості</p>
                </div>
              </Link>

              <Link href="/parni" className="process-item">
                <div className="process-image">
                  <Image 
                    src="/images/parni/photo_2025-07-16_22-27-08.jpg" 
                    alt="Парні елементи"
                    width={2070}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Парні елементи</h3>
                  <p>Виконання складних елементів у парі на повітряних полотнах</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="important-info">
          <div className="container">
            <h2>Важлива інформація</h2>
            <div className="info-grid">
              <div className="info-card">
                <Users size={32} />
                <h3>Розмір групи</h3>
                <p>Максимум 8 учасників в групі для індивідуального підходу</p>
              </div>
              
              <div className="info-card">
                <Calendar size={32} />
                <h3>Запис на заняття</h3>
                <p>Попередній запис обов&apos;язковий за 24 години</p>
              </div>
              
              <div className="info-card">
                <Clock size={32} />
                <h3>Тривалість</h3>
                <p>Стандартне заняття триває 60 хвилин</p>
              </div>
              
              <div className="info-card">
                <DollarSign size={32} />
                <h3>Вартість занять</h3>
                <p>Перше заняття - 250 грн, наступні заняття - 300 грн</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Готові приєднатися?"
          subtitle="Попередній запис обов'язковий"
          primaryButtonText="Записатися на заняття"
          secondaryButtonText="Дізнатися більше"
          secondaryButtonUrl="/info"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Schedule; 