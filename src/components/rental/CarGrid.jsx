import CarCard from "./CarCard";

const CarGrid = ({ cars, onSelect }) => {
  if (cars.length === 0) {
    return <p className="empty">Aucun véhicule trouvé</p>;
  }

  return (
    <section className="car-grid">
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
};

export default CarGrid;
