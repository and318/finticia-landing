import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.scss';
import phoneImage from '../../assets/img/phone.avif'; // Importa la imagen del teléfono

function Hero() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]); // Mueve el texto hacia arriba
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 200]); // Mueve la imagen hacia abajo

  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <div className="hero-text-column">
          <motion.h1
            style={{ y: yText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ¿Quieres tener control total de tus gastos financieros?
          </motion.h1>
          <motion.h1
          className="title"
            style={{ y: yText }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            
            Hazlo todo en tu App Finticia
          </motion.h1>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.1, backgroundColor: "#00D17A" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('productos').scrollIntoView({ behavior: 'smooth' })}
          >
            Cónoce más
          </motion.button>
        </div>
        <div className="hero-image-column">
          <motion.img
            src={phoneImage}
            alt="Phone Mockup"
            className="hero-phone-mockup"
            style={{ y: yImage }} // Elimina la rotación
            initial={{ opacity: 0, y: 100 }} // Empieza más abajo
            animate={{ opacity: 1, y: 0 }} // Se mueve hacia arriba
            transition={{ delay: 0.6, duration: 2.0, type: "spring", stiffness: 100 }} // Animación de resorte
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
