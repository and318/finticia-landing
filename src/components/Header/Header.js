import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import finticiaLogo from '../../assets/img/finticia-logo.svg';
import menuIcon from '../../assets/img/menu.svg';
import closeIcon from '../../assets/img/close.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={finticiaLogo} alt="Finticia Logo" className="header-logo" />
      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          <motion.img
            key={isOpen ? "close" : "menu"}
            src={isOpen ? closeIcon : menuIcon}
            alt="Menu Toggle"
            className="menu-icon"
            initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      )}
      {!isMobile && (
        <nav className="nav">
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </nav>
      )}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li><a href="#hero" onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#productos" onClick={toggleMenu}>Productos</a></li>
                <li><a href="#benefits" onClick={toggleMenu}>Beneficios</a></li>
                <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
                <li><a href="#footer" onClick={toggleMenu}>Contacto</a></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}

export default Header;
