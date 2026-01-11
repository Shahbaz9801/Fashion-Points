import React from 'react';
import './TrustItem.css';

const TrustItem = ({ icon, title, description }) => {
  return (
    <div className="trust-item">
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TrustItem;