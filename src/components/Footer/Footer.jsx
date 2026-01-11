import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', text: 'Home' },
    { path: '/products', text: 'Products' },
    { path: '/wholesale', text: 'Wholesale' },
    { path: '/about', text: 'About Us' },
    { path: '/contact', text: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-twitter', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo footer-logo">
              <span className="logo-text">FASHION<span className="logo-point">POINT</span></span>
            </div>
            <p className="footer-text">
              Premium men's clothing retailer and wholesaler offering trendy and affordable fashion for the modern man.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Fashion Street, Style City</li>
              <li><i className="fas fa-phone"></i> +1 (234) 567-8900</li>
              <li><i className="fas fa-envelope"></i> info@fashionpoint.com</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Business Hours</h4>
            <ul className="business-hours">
              <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 11:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Fashion Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;