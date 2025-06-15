import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

  return (
    <nav className="footer">
      <p>© Copyright 2025</p>
      <ul className='footer-list'>
        <li><Link className='footer-list-item' to="/"><i class="iconoir-home-simple"></i>Home</Link></li>
        <li><Link className='footer-list-item' to="/info"><i class="iconoir-info-circle"></i>Info</Link></li>
        <li><Link className='footer-list-item' to="/gallery"><i class="iconoir-media-image"></i>Gallery</Link></li>
        <li><Link className='footer-list-item' to="/contact"><i class="iconoir-message"></i>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Footer;
