import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <h2>FitJangra</h2>
                </div>
                <div className="footer__links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer__socials">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div className="footer__contact">
                <p>Email: contact@fitjangra.com</p>
                <p>Phone: +91 123 456 7890</p>
                <p>&copy; {new Date().getFullYear()} FitJangra. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
