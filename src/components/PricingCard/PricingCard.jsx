import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan, isFeatured = false, onSelect }) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan);
    }
  };

  return (
    <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
      {isFeatured && <div className="pricing-badge">Most Popular</div>}
      <div className="pricing-header">
        <h3 className="pricing-title">{plan.title}</h3>
        <div className="pricing-price">{plan.price}</div>
      </div>
      <div className="pricing-body">
        <ul className="pricing-features">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <i className={`fas ${feature.included ? 'fa-check' : 'fa-times'}`}></i>
              {feature.text}
            </li>
          ))}
        </ul>
        <button 
          className={`btn ${isFeatured ? 'btn-primary' : 'btn-outline'}`} 
          onClick={handleSelect}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;