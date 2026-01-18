import "./About.css";
import { FaClock, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import aboutCar from "../images/about-cars.jpeg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        {/* Header */}
        <div className="about__header">
          <h2>À propos de nous</h2>
          <p>
            Chez AutoSphere, nous transformons la location de voitures en une
            expérience fluide, fiable et 100% orientée client.
            <br />
            Découvrez pourquoi nos clients nous recommandent encore et encore.
          </p>
        </div>

        {/* Content */}
        <div className="about__content">
          {/* Text + CTA */}
          <div className="about__text">
            <p>
              Depuis notre création, nous nous engageons à fournir un service de
              location de voitures flexible, transparent et performant. Que vous
              partiez pour un voyage d'affaires ou une escapade de week-end,
              choisissez parmi notre flotte haut de gamme et profitez d’une
              expérience personnalisée.
            </p>

            <ul className="about__list">
              <li>
                <FaClock className="about__icon" />
                Support client disponible 24/7
              </li>
              <li>
                <FaMapMarkedAlt className="about__icon" />
                Plus de 50 agences à travers le pays
              </li>
              <li>
                <FaUsers className="about__icon" />
                Service centré sur votre satisfaction
              </li>
            </ul>

            <NavLink to="/rental" className="btn btn--primary">
              Découvrir nos locations
            </NavLink>
          </div>

          {/* Image */}
          <div className="about__image">
            <img
              src={aboutCar}
              alt="Voitures de location"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
