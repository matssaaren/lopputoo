import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

  return (
    <nav className="footer">

      <ul className='footer-list'>
        <li>
          <Link className='footer-list-item' to="/">
            <i className="iconoir-home-simple"></i>
            Home
          </Link>
        </li>
        <li><Link className='footer-list-item' to="/info"><i className="iconoir-info-circle"></i>Info</Link></li>
        <li><Link className='footer-list-item' to="/gallery"><i className="iconoir-media-image"></i>Gallery</Link></li>
        <li><Link className='footer-list-item' to="/contact"><i className="iconoir-message"></i>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Footer;
