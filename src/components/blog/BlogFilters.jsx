// components/blog/BlogFilters.jsx
const BlogFilters = ({ categories, active, onChange }) => {
  return (
    <div className="blog-filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default BlogFilters;
