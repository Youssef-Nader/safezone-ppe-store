import { Link } from "react-router-dom";
function Footer(){
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link className="footer-logo" to="/">
                        <span className="footer-logo-mark" aria-hidden="true">S</span>
                        <span>SafeZone <strong>PPE Store</strong></span>
                    </Link>
                    <p>Reliable protective equipment for safer teams, stronger businesses, and every job ahead.</p>
                </div>

                <div className="footer-column">
                    <h2>Explore</h2>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Your cart</Link>
                </div>

                <div className="footer-column">
                    <h2>Account</h2>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Create account</Link>
                </div>

                <div className="footer-column footer-contact">
                    <h2>Get in touch</h2>
                    <a href="mailto:support@safezone.com">support@safezone.com</a>
                    <a href="tel:+201234567890">+20 123 456 7890</a>
                    <span>Sunday–Thursday, 9 AM–5 PM</span>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} SafeZone. All rights reserved.</p>
                <p>Protection you can count on.</p>
            </div>
        </footer>
    )
}
export default Footer;
