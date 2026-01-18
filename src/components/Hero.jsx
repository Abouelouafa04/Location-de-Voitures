import "./Hero.css";
import { NavLink } from "react-router-dom";
import carHero from "../images/banner-road.jpeg";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Text content */}
        <div className="hero__content">
          <span className="hero__badge">Location de voitures premium</span>

          <h1 className="hero__title">
            Louez la voiture idéale <br />
            <span>au meilleur prix</span>
          </h1>

          <p className="hero__description">
            Profitez d'une large gamme de véhicules modernes, fiables et bien
            entretenus. Réservation rapide, tarifs transparents et service
            client disponible 24/7 pour vous accompagner partout.
          </p>

          <div className="hero__actions">
            <NavLink to="/rental" className="btn btn--primary">
              Voir les voitures
            </NavLink>
           {/* <NavLink to="/contact" className="btn btn--secondary">
              Nous contacter
            </NavLink>  */}
          </div>
        </div>

        {/* Visual */}
        <div className="hero__image">
          <img
            src={carHero}
            alt="Voiture de location"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
