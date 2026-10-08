import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ category, setCategory, cartCount, openCart }) {
  const navigate = useNavigate();
  const nav = ["All", "Indoor", "Outdoors", "Kids & Baby", "Tech & Gadgets", "Offbeat"];

  const chooseCategory = (item) => {
    setCategory(item);
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={() => setCategory("All")}>
          <span className="brand-mark">I</span>
          <span className="brand-text">
            <strong>INSPIRING DESIGNS</strong>
            <small>MARKETPLACE</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          {nav.map((item) => (
            <button
              key={item}
              className={category === item ? "nav-link active" : "nav-link"}
              onClick={() => chooseCategory(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="bag-button" onClick={openCart} aria-label="Open shopping bag">
          <span className="bag-icon">🛍</span>
          <span>Bag</span>
          <b>{cartCount}</b>
        </button>
      </div>
    </header>
  );
}
