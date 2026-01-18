// data/blogData.js
import img1 from "../images/blog/auto1.jpg";
import img2 from "../images/blog/auto2.jpg";
import img3 from "../images/blog/auto3.jpg";

const posts = [
  {
    id: 1,
    title: "Comment choisir la voiture idéale pour vos vacances",
    excerpt:
      "SUV, citadine ou berline ? Découvrez nos conseils pour faire le bon choix.",
    category: "Conseils",
    date: "12 Mars 2026",
    image: img1,
  },
  {
    id: 2,
    title: "Les nouvelles tendances de la location automobile",
    excerpt:
      "Électrique, abonnement, longue durée : le marché évolue rapidement.",
    category: "Actualités",
    date: "05 Mars 2026",
    image: img2,
  },
  {
    id: 3,
    title: "Pourquoi louer une voiture électrique ?",
    excerpt:
      "Économique, écologique et agréable à conduire : on vous explique tout.",
    category: "Auto",
    date: "28 Février 2026",
    image: img3,
  },
];

export default posts;
