import MapSection from "../components/Contact/MapSection";
import ContactDetails from "../components/Contact/ContactDetails";
import "../components/Contact/sitemap.css";

export default function Sitemap() {
  return (
    <main>
      {/* HERO */}
      <section className="sitemap-hero">
        <div className="container">
          <h1>Informations Générales</h1>
          <p>Où nous trouver et comment nous contacter.</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="sitemap-content container">
        <MapSection />
        <ContactDetails />
      </section>
    </main>
  );
}
