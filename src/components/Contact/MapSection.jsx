export default function MapSection() {
  return (
    <div className="map-card">
      <h3>Notre Emplacement</h3>

      <div className="map-wrapper">
        <iframe
          title="Localisation"
          src="https://www.google.com/maps?q=Casablanca&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
