import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/products', text: 'Products' },
    { path: '/wholesale', text: 'Wholesale' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/cart', text: <CartIcon /> }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <span className="logo-text">FASHION<span className="logo-point">POINT</span></span>
          </NavLink>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mobile-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;