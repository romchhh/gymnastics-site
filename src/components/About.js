import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-pink-500" />,
      number: "15+",
      title: "Років досвіду",
      description: "Професійного викладання художньої гімнастики"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      number: "200+",
      title: "Учениць",
      description: "Навчаються в нашій академії щороку"
    },
    {
      icon: <Clock className="w-12 h-12 text-pink-500" />,
      number: "6",
      title: "Днів на тиждень",
      description: "Проводимо заняття для різних вікових груп"
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      number: "100%",
      title: "Любові",
      description: "До художньої гімнастики та наших учениць"
    }
  ];

  return (
    <section className="about-section">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="section-title">Про нашу академію</h2>
          <p className="section-subtitle">
            Художня гімнастика - це не тільки спорт, а й мистецтво, 
            що розвиває грацію, 
            витривалість та впевненість у собі
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-content">
            <h3 className="about-title">Ганна Різатдінова</h3>
            <p className="about-text">
              Заслужена майстриня спорту України з художньої гімнастики, олімпійська чемпіонка 
              та багаторазова переможниця міжнародних змагань. Присвятила своє життя розвитку 
              художньої гімнастики в Україні.
            </p>
            <p className="about-text">
              В нашій академії кожна дівчинка отримує індивідуальний підхід, професійне 
              навчання та можливість розкрити свій талант у прекрасному світі художньої гімнастики.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <span>Олімпійська чемпіонка</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🥇</span>
                <span>Чемпіонка світу</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Заслужений тренер</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <p className="text-white text-center">
                  Тут буде фото<br />
                  Ганни Різатдінової<br />
                  з ученицями
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {item.icon}
              </div>
              <div className="achievement-number">{item.number}</div>
              <h4 className="achievement-title">{item.title}</h4>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="philosophy-section">
          <h3 className="philosophy-title">Наша філософія</h3>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h4>Індивідуальний підхід</h4>
              <p>Кожна дівчинка унікальна, тому ми розробляємо персональну програму розвитку</p>
            </div>
            <div className="philosophy-item">
              <h4>Професійність</h4>
              <p>Наші тренери мають високу кваліфікацію та постійно підвищують свій рівень</p>
            </div>
            <div className="philosophy-item">
              <h4>Безпека</h4>
              <p>Здоров&apos;я та безпека наших учениць - наш головний пріоритет</p>
            </div>
            <div className="philosophy-item">
              <h4>Розвиток</h4>
              <p>Ми розвиваємо не тільки фізичні якості, а й характер, дисципліну та впевненість</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;