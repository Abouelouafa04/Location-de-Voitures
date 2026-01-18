import { useState } from "react";
import { cars as rentalCars } from "../utils/rentalData.js";
import RentalHero from "../components/rental/RentalHero";
import FilterBar from "../components/rental/FilterBar";
import CarGrid from "../components/rental/CarGrid";
import CarModal from "../components/rental/CarModal";
import "../components/rental/rental-redesign.css";

const Rental = () => {
  const [filters, setFilters] = useState({
    category: "",
    transmission: "",
    maxPrice: 200,
  });

  const [activeCar, setActiveCar] = useState(null);

  const cars = rentalCars.filter(car =>
    (!filters.category || car.category === filters.category) &&
    (!filters.transmission || car.transmission === filters.transmission) &&
    car.price <= filters.maxPrice
  );

  return (
    <>
      <RentalHero />
      <FilterBar filters={filters} setFilters={setFilters} />
      <CarGrid cars={cars} onSelect={setActiveCar} />
      <CarModal car={activeCar} onClose={() => setActiveCar(null)} />
    </>
  );
};

export default Rental;
