// components/blog/BlogCard.jsx
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="blog-card__img">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card__category">{post.category}</span>
      </div>

      <div className="blog-card__content">
        <h3>{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="blog-card__footer">
          <span>
            <FaCalendarAlt /> {post.date}
          </span>
          <NavLink to={`/blog/${post.id}`}>
            Lire l’article <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
