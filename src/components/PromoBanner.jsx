import React from "react";
import { NavLink } from "react-router-dom";
import { FaCarAlt, FaArrowRight } from "react-icons/fa";
import "./PromoBanner.css";

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="promo-banner__container">
        <div className="promo-banner__icon">
          <FaCarAlt />
        </div>

        <h2>
          Louez votre voiture en toute <span>confiance</span>
        </h2>

        <p>
          Des véhicules récents, des tarifs transparents et une réservation
          rapide en quelques clics. Profitez d’une expérience de location
          simple, sécurisée et adaptée à vos besoins.
        </p>

        <NavLink to="/rental" className="promo-banner__btn">
          Découvrir nos voitures
          <FaArrowRight />
        </NavLink>
      </div>
    </section>
  );
};

export default PromoBanner;
