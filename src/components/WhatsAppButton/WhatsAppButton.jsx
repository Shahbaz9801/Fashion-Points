import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890';
  const message = 'Hello Fashion Point, I have an inquiry about your products.';

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;