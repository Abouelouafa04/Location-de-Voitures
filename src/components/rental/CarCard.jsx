import { Link } from "react-router-dom";

const CarCard = ({ car, onSelect }) => {
  return (
    <article className="car-card-v2">
      <img src={car.image} alt={car.model} />

      <div className="card-body">
        <div className="card-header">
          <h3>{car.brand} {car.model}</h3>
          <span>{car.price} €/jour</span>
        </div>

        <p className="card-meta">
          {car.year} • {car.transmission} • {car.fuel}
        </p>

        <Link to={`/carModel/${car.id}`} className="card-btn">
          Voir détails
        </Link>
      </div>
    </article>
  );
};

export default CarCard;
