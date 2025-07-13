import React from 'react';
import Image from 'next/image';
import { Clock, Users, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Schedule.css';
import '../styles/Global.css';

const Schedule = () => {
  const scheduleData = [
    {
      day: 'Вівторок',
      classes: [
        { time: '18:00 - 19:00', group: 'Дитяча група (6-12 років)', level: 'Початковий' },
        { time: '19:15 - 20:15', group: 'Підліткова група (13-17 років)', level: 'Середній' },
        { time: '20:30 - 21:30', group: 'Доросла група (18+)', level: 'Всі рівні' }
      ]
    },
    {
      day: 'Четвер',
      classes: [
        { time: '18:00 - 19:00', group: 'Дитяча група (6-12 років)', level: 'Початковий' },
        { time: '19:15 - 20:15', group: 'Підліткова група (13-17 років)', level: 'Середній' },
        { time: '20:30 - 21:30', group: 'Доросла група (18+)', level: 'Всі рівні' }
      ]
    },
    {
      day: 'Субота',
      classes: [
        { time: '10:00 - 11:00', group: 'Ранкова група (всі віки)', level: 'Початковий' },
        { time: '11:30 - 12:30', group: 'Сімейні заняття', level: 'Всі рівні' },
        { time: '13:00 - 14:30', group: 'Інтенсив для досвідчених', level: 'Продвинутий' },
        { time: '15:00 - 16:00', group: 'Вечірня група', level: 'Середній' }
      ]
    },
    {
      day: 'Неділя',
      classes: [
        { time: '10:00 - 11:00', group: 'Ранкова група (всі віки)', level: 'Початковий' },
        { time: '11:30 - 12:30', group: 'Сімейні заняття', level: 'Всі рівні' },
        { time: '13:00 - 14:30', group: 'Майстер-клас', level: 'Продвинутий' },
        { time: '15:00 - 16:00', group: 'Вечірня група', level: 'Середній' }
      ]
    }
  ];

  return (
    <div className="schedule-page">
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
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
              <div className="process-item">
                <div className="process-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" 
                    alt="Розминка"
                    width={2020}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Розминка</h3>
                  <p>Кожне заняття починається з ретельної розминки для підготовки м&apos;язів та суглобів</p>
                </div>
              </div>
              
              <div className="process-item">
                <div className="process-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Основна частина"
                    width={2070}
                    height={200}
                  />
                </div>
                <div className="process-content">
                  <h3>Основна частина</h3>
                  <p>Вивчення нових елементів, відпрацювання техніки та створення зв&apos;язок</p>
                </div>
              </div>
              
              <div className="process-item">
                <div className="process-image">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Заминка"
                  />
                </div>
                <div className="process-content">
                  <h3>Заминка та розтяжка</h3>
                  <p>Завершення тренування розтяжкою для відновлення та покращення гнучкості</p>
                </div>
              </div>
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
                <p>Попередній запис обов'язковий за 24 години</p>
              </div>
              
              <div className="info-card">
                <Clock size={32} />
                <h3>Тривалість</h3>
                <p>Стандартне заняття триває 60 хвилин</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Готові приєднатися?</h2>
              <p>Попередній запис обов'язковий</p>
              <div className="cta-buttons">
                <a href="https://t.me/kateryna_demydenko" className="cta-button primary">
                  Записатися на заняття
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

export default Schedule; 