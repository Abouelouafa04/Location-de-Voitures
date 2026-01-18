import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <NavLink to="/" className="header__logo">
          Location<span>Voitures</span>
        </NavLink>

        {/* Navigation */}
        <nav className="header__nav">
          <NavLink to="/rental" className="nav__link">
            Location
          </NavLink>
          <NavLink to="/blog" className="nav__link">
            Actualités
          </NavLink>

          <div className="nav__dropdown">
            <span>Support</span>
            <div className="dropdown__menu">
              <NavLink to="/team">Equipe de Travail</NavLink>
              <NavLink to="/help">Aide et Formation</NavLink>
              <NavLink to="/sitemap">SiteMap</NavLink>
            </div>
          </div>
        </nav>

        {/* Auth */}
        <NavLink to="/auth" className="header__btn">
          S'inscrire
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
