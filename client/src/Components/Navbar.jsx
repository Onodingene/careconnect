import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          Care Connect
        </div>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="#donate" onClick={() => setIsOpen(false)}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="mobile-only">
            <button
              className="buttons"
              onClick={() => {
                navigate('/signup');
                setIsOpen(false);
              }}
            >
              Get Started
            </button>
          </li>
        </ul>
        <button
          className="buttons desktop-only"
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;