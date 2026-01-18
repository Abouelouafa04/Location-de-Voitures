import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../utils/rentalData.js";
import { FaArrowLeft, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="car-details-error">
        <h2>Véhicule non trouvé</h2>
        <button className="back-btn" onClick={() => navigate("/rental")}>
          Retour à la location
        </button>
      </div>
    );
  }

  const handleReserve = () => {
    navigate("/auth", { state: { carId: car.id } });
  };

  return (
    <div className="car-details-page">
      {/* Header */}
      <button className="back-btn-header" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Retour
      </button>

      {/* Main Content */}
      <div className="car-details-container">
        {/* Image Section */}
        <div className="car-details-image">
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
          {car.promo && <span className="promo-badge">{car.promo}</span>}
        </div>

        {/* Details Section */}
        <div className="car-details-content">
          {/* Title & Price */}
          <div className="car-details-header">
            <div>
              <h1>{car.brand} {car.model}</h1>
              <p className="car-year">{car.year}</p>
            </div>
            <div className="price-section">
              <span className="price">{car.price} €</span>
              <span className="price-period">par jour</span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="car-specs-grid">
            <div className="spec-card">
              <span className="spec-label">Catégorie</span>
              <span className="spec-value">{car.category}</span>
            </div>
            <div className="spec-card">
              <span className="spec-label">Places</span>
              <span className="spec-value">{car.seats}</span>
            </div>
            <div className="spec-card">
              <span className="spec-label">Portes</span>
              <span className="spec-value">{car.doors}</span>
            </div>
            <div className="spec-card">
              <span className="spec-label">Transmission</span>
              <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="spec-card">
              <span className="spec-label">Carburant</span>
              <span className="spec-value">{car.fuel}</span>
            </div>
          </div>

          {/* Features */}
          {car.options && car.options.length > 0 && (
            <div className="car-features">
              <h3>Options incluses</h3>
              <ul className="features-list">
                {car.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="car-details-actions">
            <button className="reserve-btn-primary" onClick={handleReserve}>
              Réserver ce véhicule
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="car-info-section">
        <div className="info-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Livraison</h4>
            <p>Retrait et livraison gratuits à l'aéroport ou en ville</p>
          </div>
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h4>Support 24/7</h4>
            <p>Assistance disponible 24h/24 pendant votre location</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h4>Assurance incluse</h4>
            <p>Couverture complète pour votre tranquillité d'esprit</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
