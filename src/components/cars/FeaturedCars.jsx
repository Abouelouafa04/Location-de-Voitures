import "./FeaturedCars.css";
import { NavLink,Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


import carClio from "../../images/car-clio.jpeg";
import car3008 from "../../images/car-3008.jpeg";
import carBMW from "../../images/car-bmw.jpeg";


const sampleCars = [
  {
    id: 1,
    name: "Renault Clio",
    price: 39,
    year: 2022,
    transmission: "Manuelle",
    fuel: "Essence",
    image: carClio,
  },
  {
    id: 2,
    name: "Peugeot 3008",
    price: 59,
    year: 2023,
    transmission: "Automatique",
    fuel: "Diesel",
    image: car3008,
  },
  {
    id: 3,
    name: "BMW Série 3",
    price: 89,
    year: 2023,
    transmission: "Automatique",
    fuel: "Hybride",
    image: carBMW,
  },
];

const FeaturedCars = ({ cars = sampleCars }) => {
  return (
    <section className="featured-cars">
      <div className="featured-cars__container">
        {/* Header */}
        <div className="featured-cars__header">
          <h2>Nos voitures populaires</h2>
          <p>
            Découvrez une sélection de véhicules disponibles à la location,
            soigneusement choisis pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Cars grid */}
        <div className="cars-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <div className="car-card__img">
                <img src={car.image} alt={car.name} loading="lazy" />
              </div>
              <div className="car-card__info">
                <div className="car-card__header">
                  <h3>{car.name}</h3>
                  <p className="car-card__price">{car.price} €/jour</p>
                </div>
                <p className="car-card__specs">
                  {car.year} • {car.transmission} • {car.fuel}
                </p>

                <Link to={`/carModel/${car.id}`} className="btn-details">
  VOIR DÉTAILS
</Link>
              </div>
            </div>
          ))}
        </div>

    

        {/* CTA */}
        <div className="featured-cars__cta">
          <NavLink to="/rental" className="cars-btn">
            Voir tous les modèles
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
