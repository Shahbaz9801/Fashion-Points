import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    onClose();
    navigate('/products');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  const cartTotal = getCartTotal();

  return (
    <div className="cart-overlay active" onClick={handleOverlayClick}>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length} items)</h2>
          <button className="cart-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <i className="fas fa-shopping-cart"></i>
            <h3>Your cart is empty</h3>
            <p>Add some products to get started</p>
            <button className="btn btn-primary" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.cartId} item={item} />
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-totals">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="cart-actions">
                <button className="btn btn-outline" onClick={handleClearCart}>
                  Clear Cart
                </button>
                <button className="btn btn-secondary" onClick={handleContinueShopping}>
                  Continue Shopping
                </button>
                <button className="btn btn-primary" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;