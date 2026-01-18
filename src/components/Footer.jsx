import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo & description */}
        <div className="footer__brand">
          <h2>Location<span>Voitures</span></h2>
          <p>
            Location de voitures premium, service rapide et fiable, pour tous vos besoins.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer__links">
          <h3>Liens rapides</h3>
          <NavLink to="/rental">Location</NavLink>
          <NavLink to="/blog">Actualités</NavLink>
          <NavLink to="/help">Aide et Formation</NavLink>
          <NavLink to="/auth">S'inscrire</NavLink>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +212 600 000 000</p>
          <p><FaEnvelope /> contact@autosphere.com</p>
        </div>

        {/* Social */}
        <div className="footer__social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} LocationVoitures. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
