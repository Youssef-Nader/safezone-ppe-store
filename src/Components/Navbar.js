import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartContext } from "./Contexts/CartContext";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const location = useLocation();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => setMenuOpen(false), [location.pathname]);

    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Main navigation">
                <Link className="brand" to="/" aria-label="SafeZone home">
                    <span className="brand-mark" aria-hidden="true">S</span>
                    <span>SafeZone <strong>PPE Store</strong></span>
                </Link>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span></span><span></span><span></span>
                </button>

                <div className={`nav-menu ${menuOpen ? "is-open" : ""}`} id="main-menu">
                    <div className="nav-links">
                        <NavLink to="/" end className={({ isActive }) => isActive || location.pathname === "/home" ? "active" : ""}>Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink className="cart-link" to="/cart">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h2l2.2 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H6M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
                            Cart
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </NavLink>
                    </div>
                    <div className="auth-links">
                        <NavLink className="login-link" to="/login">Log in</NavLink>
                        <NavLink className="register-link" to="/register">Create account</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;
