import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="product-card">
      <Link
        className={failed ? "product-image image-fallback" : "product-image"}
        to={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        {!failed && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
        {failed && (
          <div className="fallback-art">
            <span>INSPIRE</span>
            <strong>{product.name}</strong>
            <small>DESIGN CONCEPT</small>
          </div>
        )}
        <span className="product-badge">{product.badge}</span>
        <span className="view-overlay">View product →</span>
      </Link>

      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>★ 4.8</span>
        </div>
        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>${product.price.toLocaleString()}</strong>
          <button onClick={() => onAdd(product)}>Add to bag</button>
        </div>
      </div>
    </article>
  );
}
