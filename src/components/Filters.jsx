import React from "react";
import { categories, rooms } from "../data/products";

export default function Filters({ category, setCategory, room, setRoom, query, setQuery }) {
  return (
    <section className="filters" id="catalog">
      <div className="search-box">
        <span>⌕</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, rooms or ideas..."
        />
        {query && <button onClick={() => setQuery("")}>×</button>}
      </div>

      <div className="filter-group">
        <div className="filter-title">Shop by category</div>
        <div className="chips">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "chip active" : "chip"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group room-filter">
        <div className="filter-title">Browse by space</div>
        <div className="chips">
          {rooms.map((item) => (
            <button
              key={item}
              className={room === item ? "chip small active" : "chip small"}
              onClick={() => setRoom(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}