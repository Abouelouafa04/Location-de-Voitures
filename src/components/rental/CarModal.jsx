const CarModal = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img src={car.image} alt={car.model} />

        <div className="modal-content">
          <h2>{car.brand} {car.model}</h2>

          <ul>
            <li>Catégorie : {car.category}</li>
            <li>Transmission : {car.transmission}</li>
            <li>Carburant : {car.fuel}</li>
            <li>Places : {car.seats}</li>
          </ul>

          <strong>{car.price} € / jour</strong>

          <button className="reserve-btn">
            Réserver maintenant
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CarModal;
