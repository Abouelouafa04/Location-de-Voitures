import FAQList from "../components/FAQ/FAQList";
import "../components/FAQ/faq.css";

export default function Help() {
  return (
    <main>
      {/* HERO */}
      <section className="help-hero">
        <div className="container">
          <h1>Aide et Formation</h1>
          <p>Trouvez les réponses à vos questions.</p>
        </div>
      </section>


      {/* FAQ */}
      <section className="faq-section container">
        <h2>Foire aux questions</h2>
        <FAQList />
      </section>
    </main>
  );
}
