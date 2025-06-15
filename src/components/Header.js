import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="header">
      <h1 className="header-title">🤖Cybernetics</h1>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`header-list ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
