import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCart();
  const navigate = useNavigate();

  const handleQuickView = (e) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, quantity, selectedSize);
    
    // Show success message
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'success',
        message: `${product.name} added to cart!`
      }
    });
    window.dispatchEvent(event);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product, quantity, selectedSize);
    openCart();
    navigate('/cart');
  };

  const handleWholesaleInquiry = (e) => {
    e.stopPropagation();
    navigate('/wholesale', { state: { productName: product.name } });
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className={`product-overlay ${isHovered ? 'active' : ''}`}>
          <button className="btn-quick-view" onClick={handleQuickView}>
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price">{product.price}</div>
        
        {/* Size Selection */}
        <div className="size-selection">
          <label>Size:</label>
          <div className="size-options">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <label>Qty:</label>
          <div className="quantity-controls">
            <button className="qty-btn" onClick={handleDecrement}>-</button>
            <span className="qty-value">{quantity}</span>
            <button className="qty-btn" onClick={handleIncrement}>+</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-actions">
          <button className="btn-add-cart" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button className="btn-buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
        
        <button className="btn-wholesale" onClick={handleWholesaleInquiry}>
          Wholesale Inquiry
        </button>
      </div>
    </div>
  );
};

export default ProductCard;