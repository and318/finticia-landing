import React from 'react';
import { motion } from 'framer-motion';
import './Benefits.scss';

// Importar imágenes de masonry
import bencinaImage from '../../assets/masonry/bencina.jpg';
import cineImage from '../../assets/masonry/cine.jpg';
import foodImage from '../../assets/masonry/food.jpg';
import gourmetImage from '../../assets/masonry/gourmet.jpg';
import gymImage from '../../assets/masonry/gym.png';
import petImage from '../../assets/masonry/pet.webp';
import trailImage from '../../assets/masonry/trail.jpg';
import travelImage from '../../assets/masonry/travel.png';

const benefitsData = [
  {
    id: 1,
    title: '10% dcto los Lunes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: bencinaImage,
    sizeClass: 'tall',
  },
  {
    id: 2,
    title: 'Entradas a mitad de precio',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: cineImage,
  },
  {
    id: 3,
    title: 'Para los foodies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: foodImage,
    sizeClass: 'wide',
  },
  {
    id: 4,
    title: 'Tarde Gourmet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: gourmetImage,
  },
  {
    id: 5,
    title: 'Dscto Gimnasios',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: gymImage,
    sizeClass: 'tall',
  },
  {
    id: 6,
    title: 'Salud para tu mascota',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: petImage,
  },
  {
    id: 7,
    title: 'Panoramas Outdoor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: trailImage,
    sizeClass: 'wide',
  },
  {
    id: 8,
    title: 'Vaja donde quieras',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: travelImage,
  },
];

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <h2>Beneficios de Finticia</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit) => (
          <motion.div
            key={benefit.id}
            className={`benefit-item ${benefit.sizeClass || ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: benefit.id * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                <div className="content-overlay">
                  <h3>{benefit.title}</h3>
                </div>
              </div>
              <div className="card-back">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
