import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Contexts/CartContext";

function Cart() {
    const { cart, updateQuantity, deleteProduct } = useContext(CartContext);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        document.title = "SafeZone PPE Store | Cart";
    }, []);

    if (cart.length === 0) {
        return (
            <section className="empty cart-empty">
                <span className="empty-cart-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M3 3h2l2.2 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H6M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>
                </span>
                <span className="eyebrow">Your safety kit starts here</span>
                <h1>Your cart is empty</h1>
                <p>Explore our trusted PPE essentials and add the protection your team needs.</p>
                <Link to="/products">Explore products <span aria-hidden="true">→</span></Link>
            </section>
        );
    }

    return (
        <section className="cart">
            <div className="cart-container">
                <header className="cart-heading">
                    <div>
                        <span className="eyebrow">Ready when you are</span>
                        <h1>Your shopping cart</h1>
                        <p>{itemCount} {itemCount === 1 ? "item" : "items"} selected for your order</p>
                    </div>
                    <Link className="continue-shopping" to="/products">
                        <span aria-hidden="true">←</span> Continue shopping
                    </Link>
                </header>

                <div className="cart-layout">
                    <div className="cart-panel">
                        <div className="cart-panel-header">
                            <h2>Cart items</h2>
                            <span>{cart.length} {cart.length === 1 ? "product" : "products"}</span>
                        </div>

                        <ul className="cart-list">
                            {cart.map((item) => (
                                <li className="cart-item" key={item.id}>
                                    <div className="cart-item-image">
                                        <img src={item.image_url} alt={item.name} />
                                    </div>

                                    <div className="cart-item-details">
                                        <span className="cart-item-label">Safety equipment</span>
                                        <h3>{item.name}</h3>
                                        <p>${item.price.toFixed(2)} each</p>

                                        <div className="cart-item-actions">
                                            <div className="cart-item-quantity" aria-label={`Quantity for ${item.name}`}>
                                                <button aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                                                <span aria-live="polite">{item.quantity}</span>
                                                <button aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>

                                            <button className="remove-item" onClick={() => deleteProduct(item.id)}>
                                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" /></svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <strong className="cart-line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="order-summary" aria-labelledby="order-summary-title">
                        <h2 id="order-summary-title">Order summary</h2>

                        <div className="summary-row">
                            <span>Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                            <strong>${subtotal.toFixed(2)}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <strong className="free-shipping">Free</strong>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-total">
                            <div>
                                <span>Order total</span>
                                <small>Taxes calculated at checkout</small>
                            </div>
                            <strong>${subtotal.toFixed(2)}</strong>
                        </div>

                        <Link className="checkout-button" to="/login">
                            Proceed to checkout <span aria-hidden="true">→</span>
                        </Link>

                        <div className="checkout-note">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3m-9 0h8a2 2 0 0 1 2 2v8H6v-8a2 2 0 0 1 2-2Z" /></svg>
                            <span>Sign in to continue to secure checkout</span>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Cart;
