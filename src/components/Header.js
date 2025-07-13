import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Phone, Menu, X } from 'lucide-react';

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
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://instagram.com/kateryna__demydenko" className="social-icon" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://t.me/Kateryna_Demydenko_V" className="social-icon" target="_blank" rel="noopener noreferrer">
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