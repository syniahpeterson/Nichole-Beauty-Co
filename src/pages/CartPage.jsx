import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import "../styles/CartPage.css";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity || 0),
    0,
  );

  return (
    <main className="cart-page">
      <h1 className="cp-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/shop">
            <button className="btn-primary">Shop Now</button>
          </Link>
        </div>
      ) : (
        <section className="cart-grid">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="ci-image">
                  <img src={item.image} alt={`Image of ${item.name}`} />
                </div>
                <div className="ci-info">
                  <h3 className="ci-name">{item.name}</h3>
                  <p className="ci-price">${item.price.toFixed(2)}</p>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ci-actions">
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>
                {totalPrice >= 50 ? "Free" : "Calculated at checkout"}
              </span>
            </div>
            <div className="summary-row">
              <span>Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="btn-primary checkout-btn"
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/test_eVq28kdhPg1AdGK0v10sU00")
              }
              disabled={cartItems.length === 0}
            >
              Checkout with Stripe
            </button>
            <small>Free shipping on $50+ orders</small>
          </aside>
        </section>
      )}
    </main>
  );
}
