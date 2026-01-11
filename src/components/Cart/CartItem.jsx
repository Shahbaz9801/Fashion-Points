import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.cartId, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.cartId);
  };

  const price = parseFloat(item.price.replace('$', ''));
  const total = price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-category">{item.category}</p>
        <div className="cart-item-meta">
          <span className="cart-item-size">Size: {item.size}</span>
          <span className="cart-item-sku">SKU: {item.sku}</span>
        </div>
        <div className="cart-item-price">${price.toFixed(2)} each</div>
      </div>
      <div className="cart-item-controls">
        <div className="cart-item-quantity">
          <button 
            className="qty-btn" 
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            -
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button 
            className="qty-btn" 
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item-total">${total.toFixed(2)}</div>
        <button className="cart-item-remove" onClick={handleRemove}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;