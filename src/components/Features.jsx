import React from 'react';
import "./Features.css";
import { FaShieldAlt, FaMoneyBillWave, FaCarSide } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__item">
          <div className="features__icon">
            <FaShieldAlt />
          </div>
          <h3>Réservation 100% sécurisée</h3>
          <p>
            Vos données et paiements sont protégés grâce à des systèmes de
            sécurité avancés et conformes aux standards internationaux.
          </p>
        </div>

        <div className="features__item">
          <div className="features__icon">
            <FaMoneyBillWave />
          </div>
          <h3>Tarifs transparents</h3>
          <p>
            Des prix clairs et compétitifs, sans frais cachés. Payez uniquement
            ce que vous voyez, en toute confiance.
          </p>
        </div>

        <div className="features__item">
          <div className="features__icon">
            <FaCarSide />
          </div>
          <h3>Flexibilité totale</h3>
          <p>
            Modifiez ou annulez votre réservation facilement selon vos besoins.
            Vous restez libre à chaque étape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
