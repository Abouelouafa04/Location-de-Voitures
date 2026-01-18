// components/blog/BlogHero.jsx
import React from "react"
import "./blog.css";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="blog-hero__overlay">
        <h1>Actualités & Conseils Auto</h1>
        <p>
          Tendances automobiles, conseils de location et nouveautés pour
          conduire en toute sérénité.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
