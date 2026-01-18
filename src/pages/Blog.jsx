// pages/Blog.jsx
import { useState } from "react";
import BlogHero from "../components/blog/BlogHero";
import BlogCard from "../components/blog/BlogCard";
import BlogFilters from "../components/blog/BlogFilters";
import posts from "../data/blogData";
import "../components/blog/blog.css";

const Blog = () => {
  const categories = ["Tous", "Conseils", "Actualités", "Location", "Auto"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredPosts =
    activeCategory === "Tous"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <BlogHero />

      <section className="blog-page">
        <BlogFilters
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
