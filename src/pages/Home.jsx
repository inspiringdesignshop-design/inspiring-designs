import React, { useMemo } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Home({
  category,
  setCategory,
  room,
  setRoom,
  query,
  setQuery,
  cartCount,
  cartOpen,
  openCart,
  addToCart,
  cart,
  updateQty,
  removeItem,
  closeCart,
}) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const roomMatch = room === "All" || product.room === room;
      const searchMatch =
        !q ||
        `${product.name} ${product.category} ${product.room} ${product.description}`
          .toLowerCase()
          .includes(q);

      return categoryMatch && roomMatch && searchMatch;
    });
  }, [category, room, query]);

  const handleCategory = (value) => {
    setCategory(value);
    setRoom("All");
    setTimeout(() => {
      document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="app">
      <Header
        category={category}
        setCategory={handleCategory}
        cartCount={cartCount}
        openCart={openCart}
      />

      <main>
        <div className="catalog-shell catalog-home">
          <div className="catalog-intro">
            <div>
              <p className="eyebrow">INSPIRING DESIGNS</p>
              <h1>Discover AND PURCHASE.</h1>
              <p>
                Explore a curated collection of bold, playful and imaginative
                design products for every kind of space. Available for sale
              </p>
            </div>
            <span className="intro-count">{products.length} concepts</span>
          </div>

          <Filters
            category={category}
            setCategory={handleCategory}
            room={room}
            setRoom={setRoom}
            query={query}
            setQuery={setQuery}
          />

          <section className="collection">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE COLLECTION</p>
                <h2>Shop all designs</h2>
              </div>
              <span>{filtered.length} designs</span>
            </div>

            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={addToCart}
                />
              ))}
            </div>

            {!filtered.length && (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try another search or clear one of the filters.</p>
                <button
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                    setRoom("All");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </section>
        </div>

        <section className="concept-banner">
          <div>
            <p className="eyebrow">SHOP WITH CONFIDENCE</p>
            <h2>Quality products, all in one place</h2>
          </div>
          <p>
          Browse our collection of products, explore detailed descriptions, and find the items that are right for you. Each product is carefully selected to provide a simple and convenient shopping experience.
          </p>
        </section>
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
