import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Nosotros.scss";
import cifradoIcon from "../../assets/img/cifrado.svg";
import transparenciaIcon from "../../assets/img/transparencia.svg";
import modernIcon from "../../assets/img/modern.svg";
import innovacionIcon from "../../assets/img/innova.svg";
const cardData = [
  {
    icon: transparenciaIcon,
    alt: "Icono de Transparencia",
    title: "Transparencia en cada paso",
    description:
      "Toda nuestra información es clara, sin letra chica ni costos ocultos. En Finticia creemos en relaciones basadas en la confianza y decisiones informadas.",
  },
  {
    icon: cifradoIcon,
    alt: "Icono de Seguridad",
    title: "Seguridad robusta y confiable",
    description:
      "Protegemos tus datos con cifrado avanzado y auditorías constantes. Tu seguridad es prioridad, con soporte disponible siempre que lo necesites.",
  },
  {
    icon: innovacionIcon,
    alt: "Icono de Innovación",
    title: "Innovación financiera al alcance",
    description:
      "Con Finticia, abrir tu cuenta, invertir y transferir es simple, digital y rápido. Tecnología inteligente al servicio de tu libertad financiera.",
  },
  {
    icon: modernIcon,
    alt: "Icono de Sofisticación",
    title: "Sofisticación al servicio de tus finanzas",
    description:
      "Diseño moderno, experiencia fluida y respaldo experto. Finticia combina estilo y eficiencia para que tomes el control con confianza.",
  },
];

function Nosotros() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="nosotros" className="nosotros">
      <h2>Confianza y Seguridad con Finticia</h2>
      <div className="details-cards-container" ref={ref}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="details-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img src={card.icon} alt={card.alt} className="card-icon" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="cta-nosotros">
        <motion.a
          href="#"
          className="cta-button"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: cardData.length * 0.1 + 0.2 }} // Retraso después de las tarjetas
          whileHover={{ scale: 1.05 }}
        >¡Únete a Finticia hoy!</motion.a>
      </div>
    </section>
  );
}

export default Nosotros;
