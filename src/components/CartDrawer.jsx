import React from "react";
import { openTawkWithOrder } from "../lib/tawk";

export default function CartDrawer({ open, onClose, cart, updateQty, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const checkout = () => {
    if (!cart.length) return;
    openTawkWithOrder(cart, total);
  };

  return (
    <>
      {open && <button className="drawer-backdrop" onClick={onClose} aria-label="Close cart" />}
      <aside className={open ? "cart-drawer open" : "cart-drawer"}>
        <div className="drawer-head">
          <div>
            <p className="eyebrow">YOUR ORDER</p>
            <h2>Shopping bag</h2>
          </div>
          <button onClick={onClose} aria-label="Close shopping bag">×</button>
        </div>

        <div className="drawer-items">
          {!cart.length && (
            <div className="empty-cart">
              <span>🛍</span>
              <h3>Your bag is empty</h3>
              <p>Add something unusual to get started.</p>
            </div>
          )}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-thumb">
                <span>IM</span>
              </div>
              <div className="cart-item-info">
                <strong>{item.name}</strong>
                <small>${item.price.toLocaleString()} each</small>
                <div className="qty-control">
                  <button onClick={() => updateQty(item.id, -1)} aria-label={`Decrease ${item.name}`}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} aria-label={`Increase ${item.name}`}>+</button>
                </div>
              </div>
              <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="drawer-footer">
          <div className="total-row">
            <span>Estimated total</span>
            <strong>${total.toLocaleString()}</strong>
          </div>

          <button className="facebook-order" disabled={!cart.length} onClick={checkout}>
            <span>💬</span> Chat to Order
          </button>

          <p>
            Your order details will be prepared in the Tawk.to message box. Review them and press
            <b> Send</b> to send your order to us.
          </p>
        </div>
      </aside>
    </>
  );
}
