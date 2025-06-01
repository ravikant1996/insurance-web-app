import { NavLink, useLocation } from 'react-router-dom';
import './NavbarStyle.css';
import callIcon from '../../assets/jpg/call-button.jpg';

const Navbar = () => {
  const location = useLocation();
  const hideContact = location.pathname === '/pay-premium';

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
          Home
        </NavLink>
        <NavLink to="/help-support" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Help & Support
        </NavLink>
        <NavLink to="/become-agent" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Become Agent
        </NavLink>
        <NavLink to="/pay-premium" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Pay Your Premium
        </NavLink>
      </div>

      {!hideContact && (
        <div className="nav-contact-buttons">
          <a href="tel:+919999999999" className="contact-button call">
            <img src={callIcon} alt="Call" className="icon" />
            Call
          </a>
          <a
            href="https://wa.me/919999999999"
            className="contact-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
