import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';

const BusinessCard = ({ type, icon, title, description, buttonText, link }) => {
  return (
    <div className="business-card">
      <div className="business-icon">
        <i className={icon}></i>
      </div>
      <h3 className="business-title">{title}</h3>
      <p className="business-text">{description}</p>
      <Link to={link} className="btn btn-outline">
        {buttonText}
      </Link>
    </div>
  );
};

export default BusinessCard;