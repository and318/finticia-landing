import React from 'react';
import './Footer.scss';
import finticiaLogo from '../../assets/img/finticia-logo.svg'; // Importar el logo
import playStore from '../../assets/img/playstore.svg'; // Importar playstore.svg
import appStore from '../../assets/img/appstore.svg'; // Importar appstore.svg

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={finticiaLogo} alt="Finticia Logo" className="footer-logo" />
          <p>© 2025 finticia. Todos los derechos reservados.</p>
        </div>
        
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#details">Detalles</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto 24/7</h3>
          <ul>
            <li>Chatea con nosotros en la app</li>
            <li>600 006 1110</li>
            <li>ayuda@finticia.cl</li>
            <li>Emergencias</li>
          </ul>
        </div>

        <div className="footer-downloads">
          <h3>Descarga la App</h3>
          <img src={playStore} alt="Descargar en Play Store" />
          <img src={appStore} alt="Descargar en App Store" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
