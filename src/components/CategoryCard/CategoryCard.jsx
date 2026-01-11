import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(category.id);
    }
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <div className="category-image">
        <img src={category.image} alt={category.name} />
      </div>
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-desc">{category.description}</p>
        <button className="btn btn-outline">View Category</button>
      </div>
    </div>
  );
};

export default CategoryCard;