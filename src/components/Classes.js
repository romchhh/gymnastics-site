import React, { useState } from 'react';
import { Clock, Users, Award, Calendar, ArrowRight } from 'lucide-react';

const Classes = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ageGroups = [
    {
      title: "Малюки (3-5 років)",
      subtitle: "Перші кроки у світі гімнастики",
      description: "Розвиток координації, гнучкості та базових навичок через гру та творчість",
      schedule: "Пн, Ср, Пт: 16:00-17:00",
      groupSize: "6-8 дітей",
      price: "1200 грн/місяць",
      features: [
        "Основи координації та балансу",
        "Розвиток гнучкості через ігри",
        "Музично-ритмічні вправи",
        "Формування правильної постави",
        "Соціалізація в групі"
      ],
      equipment: ["Мякі килимки", "Кольорові стрічки", "Музичні інструменти"]
    },
    {
      title: "Дошкільнята (6-8 років)",
      subtitle: "Базова підготовка",
      description: "Вивчення основних елементів художньої гімнастики та роботи з предметами",
      schedule: "Пн, Ср, Пт: 17:00-18:30",
      groupSize: "8-10 дітей",
      price: "1500 грн/місяць",
      features: [
        "Базові елементи без предметів",
        "Знайомство з мячем та обручем",
        "Розвиток артистичності",
        "Підготовка до змагань",
        "Індивідуальна корекція техніки"
      ],
      equipment: ["Гімнастичні м'ячі", "Обручі", "Стрічки", "Скакалки"]
    },
    {
      title: "Молодші (9-12 років)",
      subtitle: "Поглиблене навчання",
      description: "Вдосконалення техніки та підготовка до серйозних змагань",
      schedule: "Пн, Ср, Пт: 18:30-20:00",
      groupSize: "6-8 дітей",
      price: "1800 грн/місяць",
      features: [
        "Складні елементи з предметами",
        "Підготовка змагальних програм",
        "Розвиток спеціальної витривалості",
        "Робота над артистичністю",
        "Психологічна підготовка"
      ],
      equipment: ["Професійні предмети", "Булави", "Стрічки різної довжини"]
    },
    {
      title: "Старші (13+ років)",
      subtitle: "Професійна підготовка",
      description: "Високий рівень майстерності та участь у престижних змаганнях",
      schedule: "Щодня: 19:00-21:00",
      groupSize: "4-6 дітей",
      price: "2500 грн/місяць",
      features: [
        "Індивідуальні програми",
        "Участь у всеукраїнських змаганнях",
        "Робота з особистим тренером",
        "Професійна хореографія",
        "Спортивна психологія"
      ],
      equipment: ["Професійне обладнання", "Індивідуальні предмети", "Костюми для змагань"]
    }
  ];

  const additionalServices = [
    {
      title: "Індивідуальні заняття",
      description: "Персональний підхід для швидкого прогресу",
      price: "800 грн/заняття",
      duration: "60 хв",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Літні збори",
      description: "Інтенсивна підготовка під час канікул",
      price: "5000 грн/тиждень",
      duration: "Щодня 4 години",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Підготовка до змагань",
      description: "Спеціальна програма для юних спортсменок",
      price: "2000 грн/місяць",
      duration: "Додаткові заняття",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <section className="classes-section">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Наші програми навчання</h2>
          <p className="section-subtitle">
            Професійна підготовка з художньої гімнастики для дітей різного віку та рівня підготовки
          </p>
        </div>

        {/* Age Groups Tabs */}
        <div className="age-tabs">
          {ageGroups.map((group, index) => (
            <button
              key={index}
              className={`age-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Active Group Content */}
        <div className="group-content">
          <div className="group-header">
            <h3 className="group-title">{ageGroups[activeTab].title}</h3>
            <p className="group-subtitle">{ageGroups[activeTab].subtitle}</p>
            <p className="group-description">{ageGroups[activeTab].description}</p>
          </div>

          <div className="group-details">
            <div className="group-info">
              <div className="info-grid">
                <div className="info-item">
                  <Clock className="w-6 h-6 text-pink-500" />
                  <div>
                    <h4>Розклад</h4>
                    <p>{ageGroups[activeTab].schedule}</p>
                  </div>
                </div>
                <div className="info-item">
                  <Users className="w-6 h-6 text-pink-500" />
                  <div>
                    <h4>Розмір групи</h4>
                    <p>{ageGroups[activeTab].groupSize}</p>
                  </div>
                </div>
                <div className="info-item">
                  <Award className="w-6 h-6 text-pink-500" />
                  <div>
                    <h4>Вартість</h4>
                    <p>{ageGroups[activeTab].price}</p>
                  </div>
                </div>
              </div>

              <div className="features-section">
                <h4>Що включено:</h4>
                <ul className="features-list">
                  {ageGroups[activeTab].features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <ArrowRight className="w-4 h-4 text-pink-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="equipment-section">
                <h4>Обладнання:</h4>
                <div className="equipment-list">
                  {ageGroups[activeTab].equipment.map((item, index) => (
                    <span key={index} className="equipment-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <p className="text-white text-center">
                    Фото групи<br />
                    {ageGroups[activeTab].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h3 className="services-title">Додаткові послуги</h3>
          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration">{service.duration}</span>
                </div>
                <button className="service-button">
                  Дізнатися більше
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Готові розпочати навчання?</h3>
            <p>Запишіться на пробне заняття та оцініть рівень нашого викладання</p>
            <button className="cta-button-large">
              Записатися на пробне заняття
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;