const FilterBar = ({ filters, setFilters }) => {
  return (
    <section className="filter-bar">
      <div className="filter-bar__container">
        {/* Category Filter */}
        <div className="filter-item">
          <label htmlFor="category" className="filter-label">Catégorie</label>
          <select
            id="category"
            className="filter-select"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="">Toutes les catégories</option>
            <option value="Économique">Économique</option>
            <option value="SUV">SUV</option>
            <option value="Luxe">Luxe</option>
          </select>
        </div>

        {/* Transmission Filter */}
        <div className="filter-item">
          <label htmlFor="transmission" className="filter-label">Transmission</label>
          <select
            id="transmission"
            className="filter-select"
            value={filters.transmission}
            onChange={(e) =>
              setFilters({ ...filters, transmission: e.target.value })
            }
          >
            <option value="">Toutes les transmissions</option>
            <option value="Manuelle">Manuelle</option>
            <option value="Automatique">Automatique</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="filter-item filter-price">
          <label htmlFor="price" className="filter-label">Budget max</label>
          <div className="price-wrapper">
            <input
              id="price"
              type="range"
              className="filter-range"
              min="30"
              max="200"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
            <span className="price-value">{filters.maxPrice} €</span>
          </div>
        </div>

        {/* Reset Button */}
        <button 
          className="filter-reset"
          onClick={() => setFilters({ category: "", transmission: "", maxPrice: 200 })}
        >
          Réinitialiser
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
