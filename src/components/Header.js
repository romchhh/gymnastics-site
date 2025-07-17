import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-content">
            <span className="logo-text">Катерина</span>
            <span className="logo-subtitle">Повітряна гімнастика</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Головна
          </Link>
          <Link href="/location" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Локація
          </Link>
          <Link href="/schedule" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Розклад
          </Link>
          <Link href="/studio-life" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Життя студії
          </Link>
          <Link href="/info" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Інформація
          </Link>
          <Link href="/photosessions" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Фотосесії
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/i_n_s_p_i_r_a_t_i_o_n_2019?utm_source=qr&igsh=Z2VpbDVpOHZhdHRp" className="social-icon" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://t.me/Kateryna_Demydenko_V" className="social-icon telegram-icon" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;