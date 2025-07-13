import React from 'react';
import Link from 'next/link';

const CTASection = ({ 
  title = "Готові розпочати?", 
  subtitle = "Попередній запис обов'язковий",
  primaryButtonText = "Записатися на заняття",
  primaryButtonUrl = "https://t.me/Kateryna_Demydenko_V",
  secondaryButtonText = "Подивитися розклад",
  secondaryButtonUrl = "/schedule",
  showSecondaryButton = true
}) => {
  return (
    <section className="cta-section-unified">
      <div className="container">
        <div className="cta-content-unified">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta-buttons-unified">
            <a 
              href={primaryButtonUrl} 
              className="cta-button-unified primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {primaryButtonText}
            </a>
            {showSecondaryButton && (
              <Link href={secondaryButtonUrl} className="cta-button-unified secondary">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 