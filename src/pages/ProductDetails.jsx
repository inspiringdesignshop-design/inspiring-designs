import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function ProductDetails({
  category,
  setCategory,
  cartCount,
  cartOpen,
  openCart,
  addToCart,
  cart,
  updateQty,
  removeItem,
  closeCart,
}) {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <div className="app">
        <Header
          category={category}
          setCategory={setCategory}
          cartCount={cartCount}
          openCart={openCart}
        />
        <main className="not-found-page">
          <p className="eyebrow">404 / PRODUCT NOT FOUND</p>
          <h1>That product does not exist.</h1>
          <Link className="primary-button" to="/">Back to collection →</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header
        category={category}
        setCategory={setCategory}
        cartCount={cartCount}
        openCart={openCart}
      />

      <main>
        <div className="product-detail-shell">
          <Link className="back-link" to="/">← Back to collection</Link>

          <div className="product-detail">
            <div className="detail-image">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="fallback-art detail-fallback">
                <span>INSPIRING DESIGNS</span>
                <strong>{product.name}</strong>
                <small>DESIGN CONCEPT</small>
              </div>
              <span className="detail-badge">{product.badge}</span>
            </div>

            <div className="detail-content">
              <p className="eyebrow">{product.category} / {product.room}</p>
              <h1>{product.name}</h1>
              <div className="detail-rating">★ 4.8 <span>ratings</span></div>

              <p className="detail-description">{product.description}</p>

              <div className="detail-price">${product.price.toLocaleString()}</div>

              <div className="detail-actions">
                <button className="primary-button" onClick={() => addToCart(product)}>
                  Add to bag <span>→</span>
                </button>
                <Link className="secondary-button" to="/">Continue shopping</Link>
              </div>

              <div className="detail-info">
                <div>
                  <span>Category</span>
                  <strong>{product.category}</strong>
                </div>
                <div>
                  <span>Designed for</span>
                  <strong>{product.room}</strong>
                </div>
                <div>
                  <span>Listing type</span>
                  <strong>Design concept</strong>
                </div>
              </div>

              <div className="detail-description-block">
                <h2>About this design</h2>
                <p>{product.description}</p>
                <p>
                  This listing is presented as part of the Inspiring Designs Products..
                </p>
              </div>

              <div className="detail-note">
                <strong>Status:</strong>
                <span>
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={closeCart}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
      />
    </div>
  );
}
