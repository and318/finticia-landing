import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './Productos.scss';

import blackCard from '../../assets/img/black-card.svg';
import prepayCard from '../../assets/img/prepay-card.svg';
import savesCard from '../../assets/img/saves-card.svg';
import closeIcon from '../../assets/img/close.svg'; // Importar close.svg

const cardData = [
  {
    id: 'black',
    title: 'Tarjeta Black',
    description: '¿Quieres tener control total sobre tus gastos financieros? La Tarjeta de Crédito Finticia te lo permite. Con la posibilidad de pagar en 3 cuotas sin interés, descuentos exclusivos y beneficios adicionales en restaurantes y tiendas, ¡tienes todo lo que necesitas! Adelanta cuotas, gestiona tu cupo y accede a un programa de recompensas exclusivo.',
    image: blackCard,
  },
  {
    id: 'prepay',
    title: 'Tarjeta Prepago',
    description: ' La Tarjeta Prepago Tenpo Mastercard te promete una experiencia financiera digital sin igual. Obtén una tarjeta física con un diseño único y disfruta de compras nacionales e internacionales, retiros en cajeros automáticos y transferencias entre bancos sin complicaciones.',
    image: prepayCard,
  },
  {
    id: 'saves',
    title: 'Ahorros Finticia',
    description: 'Una Tarjeta de Crédito como cualquier otra pero que nace desde un ahorro que tú realizas y que genera intereses en un depósito a plazo en el Banco Internacional. Ideal para quienes no tienen o quieren reconstruir su historial crediticio.',
    image: savesCard,
  },
];

function Productos() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showTooltip, setShowTooltip] = useState({ id: null, x: 0, y: 0 });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % cardData.length;
    setCurrentSlide(nextSlide);
    if (selectedCard) {
      setSelectedCard(cardData[nextSlide].id);
    }
  };

  const handlePrev = () => {
    const prevSlide = (currentSlide - 1 + cardData.length) % cardData.length;
    setCurrentSlide(prevSlide);
    if (selectedCard) {
      setSelectedCard(cardData[prevSlide].id);
    }
  };

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleMouseEnter = (e, id) => {
    setShowTooltip({ id, x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowTooltip({ id: null, x: 0, y: 0 });
  };

  const currentProduct = selectedCard ? cardData.find(card => card.id === selectedCard) : null;

  return (
    <section id="productos" className="productos">
      <div className='productos-detail'>
      <h2>Nuestros Productos</h2>
      <div className="card-container-wrapper">
        {isMobile && (
          <button className="carousel-arrow left-arrow" onClick={handlePrev}>←</button>
        )}
        <div className="card-container" ref={ref}>
          {isMobile ? (
            <AnimatePresence initial={false} mode='wait'>
              <motion.div
                key={cardData[currentSlide].id}
                className="card-item"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(cardData[currentSlide].id)}
              >
                <img 
                  src={cardData[currentSlide].image} 
                  alt={cardData[currentSlide].title} 
                  className="card-image"
                />
                <h3>{cardData[currentSlide].title}</h3>
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                className="card-item"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: (index - 1) * 10 } : { opacity: 0, y: 50, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={(e) => handleMouseEnter(e, card.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="card-image"
                  style={{ animationDelay: `${index * 0.2}s` }} // Retraso intercalado
                />
                <h3>{card.title}</h3>
                {showTooltip.id === card.id && (
                  <motion.div
                    className="tooltip"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    ¡Clickeame!
                  </motion.div>
                )}
              </motion.div>
            ))}
            </AnimatePresence>
          )}
        </div>
        {isMobile && (
          <button className="carousel-arrow right-arrow" onClick={handleNext}>→</button>
        )}
      </div>

      <AnimatePresence>
        {selectedCard && currentProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal} // Cierra el modal al hacer clic en el overlay
          >
            <motion.div
              className="product-modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
            >
              <button className="close-modal-button" onClick={handleCloseModal}><img src={closeIcon} alt="Cerrar" /></button>
              <h3>{currentProduct.title}</h3>
              <p>{currentProduct.description}</p>
              <button className="product-cta-button">¡La quiero!</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}

export default Productos;
