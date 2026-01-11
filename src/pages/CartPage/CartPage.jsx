import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/Cart/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const cartTotal = getCartTotal();
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08; // 8% tax
  const grandTotal = cartTotal + shipping + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="page-hero cart-hero">
            <h1 className="page-title">Shopping Cart</h1>
            <p className="page-subtitle">Your fashion journey starts here</p>
          </div>
          
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-hero cart-hero">
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">Review your items and proceed to checkout</p>
        </div>
        
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-header">
              <h2>Your Cart ({cartItems.length} items)</h2>
              <button className="btn-clear-cart" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
            
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem key={item.cartId} item={item} />
              ))}
            </div>
            
            <div className="continue-shopping">
              <Link to="/products">
                <i className="fas fa-arrow-left"></i> Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="cart-summary-section">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="free-shipping">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="summary-row">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="grand-total">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="shipping-note">
                <i className="fas fa-shipping-fast"></i>
                <span>
                  {cartTotal >= 50 
                    ? "Free shipping on orders over $50!"
                    : "Add ${(50 - cartTotal).toFixed(2)} more for free shipping"}
                </span>
              </div>
              
              <button className="btn btn-primary btn-block btn-checkout" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              
              <div className="payment-methods">
                <p>We accept:</p>
                <div className="payment-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                  <i className="fab fa-cc-paypal"></i>
                  <i className="fab fa-cc-stripe"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;