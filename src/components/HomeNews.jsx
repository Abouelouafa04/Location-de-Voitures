import "./HomeNews.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCalendar } from "react-icons/fa";
import newsOne from "../images/banner-road.jpeg";
import newsVideo from "../images/banner-road.jpeg";
import newsThree from "../images/banner-road.jpeg";

const HomeNews = () => {
  const newsItems = [
    {
      id: 1,
      tag: "Conseils",
      title: "10 conseils pour une location de voiture réussie",
      description: "Découvrez nos meilleurs conseils pour bien préparer votre location de voiture.",
      date: "15 janvier 2025",
      image: newsOne,
      link: "/blog",
    },
    {
      id: 2,
      tag: "Actualités",
      title: "Nouvelles fonctionnalités de notre plateforme",
      description: "Nous sommes heureux d'annoncer de nouvelles fonctionnalités pour votre confort.",
      date: "14 janvier 2025",
      image: newsVideo,
      link: "/blog",
    },
    {
      id: 3,
      tag: "Conseils",
      title: "Comment bien entretenir une voiture de location",
      description: "Des conseils pratiques pour maintenir la voiture en bon état pendant la location.",
      date: "12 janvier 2025",
      image: newsThree,
      link: "/blog",
    },
  ];

  return (
    <section className="home-news">
      <div className="home-news__container">
        {/* Header */}
        <div className="home-news__header">
          <h2>Actualités & Vidéos automobiles</h2>
          <p>
            Restez informé des dernières tendances, nouveautés et conseils du
            monde automobile. Découvrez nos articles et vidéos exclusives.
          </p>
        </div>

        {/* Cards */}
        <div className="home-news__grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.id}>
              <div className="news-card__image">
                <img src={item.image} alt={item.title} />
                <span className="news-card__tag">{item.tag}</span>
              </div>
              <div className="news-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="news-card__footer">
                  <div className="news-card__date">
                    <FaCalendar />
                    <span>{item.date}</span>
                  </div>
                  <NavLink to={item.link} className="news-card__link">
                    Lire l'article
                    <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="home-news__cta">
          <NavLink to="/blog" className="news-btn">
            Voir toutes les actualités
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
