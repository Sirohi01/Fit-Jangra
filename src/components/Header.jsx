import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaBars } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container header__container">
                <div className="logo">
                    <FaDumbbell size={30} color="#ff6b6b" />
                    <h1>FitJangra</h1>
                </div>
                <nav>
                    <ul className={`nav__links ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
        </header>
    );
}

export default Header;
