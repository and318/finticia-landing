import React from 'react';
import './Details.scss';

function Details() {
  return (
    <section id="details" className="details">
      <h2>Más Detalles sobre Finticia</h2>
      <div className="details-content">
        <p>Finticia es la cuenta digital que te da el control. Olvídate de las filas y los trámites complejos. Con nuestra app, puedes gestionar tus finanzas de forma rápida, segura y transparente.</p>
        <p>Desde pagar tus cuentas y recargar tu celular, hasta invertir y acceder a beneficios exclusivos, Finticia simplifica tu vida financiera. ¡Únete a la revolución digital!</p>
        <ul>
          <li>Transferencias instantáneas</li>
          <li>Pagos de servicios sin comisiones</li>
          <li>Inversiones desde $1.000</li>
          <li>Tarjeta de crédito y prepago</li>
          <li>Soporte 24/7</li>
        </ul>
      </div>
    </section>
  );
}

export default Details;
