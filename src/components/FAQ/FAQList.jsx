import FAQItem from "./FAQItem";

const faqs = [

{
    question: "Quels documents sont nécessaires pour louer une voiture ?",
    answer: "Permis de conduire valide + pièce d'identité + carte de crédit au nom du conducteur + preuve de résidence."
  },
  {
    question: "L'assurance est-elle incluse ?",
    answer: "Oui, assurance responsabilité civile et collision incluse. Option tous risques disponible."
  },
  {
    question: "Peut-on annuler ou modifier sa réservation ?",
    answer: "Annulation gratuite jusqu'à 48h avant. Modification gratuite jusqu'à 24h avant."
  },
  {
    question: "Quel est l'âge minimum pour louer ?",
    answer: "21 ans minimum (25 ans pour voitures de luxe). Supplément pour 21-24 ans."
  },
  {
    question: "Les sièges enfants sont-ils fournis ?",
    answer: "Oui, sièges bébé/enfant disponibles en option (8€/jour). Réservation recommandée."
  },
  {
    question: "Comment fonctionne le carburant ?",
    answer: "Option 'Plein/Plein' recommandée : prenez le plein, rendez-le plein."
  },
  {
    question: "Que faire en cas d'accident ?",
    answer: "Contactez notre assistance 24h/24. Constat amiable dans la boîte à gants."
  },
  {
    question: "Peut-on ajouter un conducteur supplémentaire ?",
    answer: "Oui, premier conducteur supplémentaire gratuit. 5€/jour pour les suivants."
  },
  {
    question: "Comment sont traités les retards de restitution ?",
    answer: "Supplément horaire facturé. Contactez-nous en cas de retard imprévu."
  },
  {
    question: "Les animaux sont-ils acceptés ?",
    answer: "Oui, avec cage de transport et supplément nettoyage de 15€."
  }
];

export default function FAQList() {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
}
