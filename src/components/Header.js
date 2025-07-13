import React, { useState } from 'react';
import { Facebook, Instagram, Phone, Mail, Menu, X } from 'lucide-react';
import '../styles/Header.css';

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
          <a href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Головна
          </a>
          <a href="/location" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Локація
          </a>
          <a href="/schedule" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Розклад
          </a>
          <a href="/studio-life" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Життя студії
          </a>
          <a href="/info" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Інформація
          </a>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://instagram.com/kateryna__demydenko" className="social-icon">
            <Instagram size={20} />
          </a>
          <a href="https://t.me/kateryna_demydenko" className="social-icon">
            <Phone size={20} />
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