import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import PaymentForm from '../../components/Checkout/PaymentForm';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    saveInfo: false
  });

  const cartTotal = getCartTotal();
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const grandTotal = cartTotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode'];
    const isValid = requiredFields.every(field => shippingInfo[field].trim() !== '');
    
    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(shippingInfo.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setStep(2);
  };

  const handlePaymentSuccess = () => {
    setStep(3);
    
    // Clear cart after successful payment
    setTimeout(() => {
      clearCart();
    }, 5000);
  };

  const handleBackToShop = () => {
    navigate('/products');
  };

  const handleEditShipping = () => {
    setStep(1);
  };

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-checkout">
            <h1>Your cart is empty</h1>
            <p>Add some products to proceed to checkout.</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-section">
            {step === 1 && (
              <form className="shipping-form" onSubmit={handleShippingSubmit}>
                <h2>Shipping Information</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleInputChange}
                  >
                    <option value="USA">United States</option>
                    <option value="CAN">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AUS">Australia</option>
                    <option value="IND">India</option>
                  </select>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={shippingInfo.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="saveInfo">Save this information for next time</label>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => navigate('/cart')}
                  >
                    Back to Cart
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="payment-section">
                <h2>Payment Information</h2>
                <p className="section-subtitle">Complete your purchase securely</p>
                
                <PaymentForm 
                  amount={grandTotal}
                  shippingInfo={shippingInfo}
                  cartItems={cartItems}
                  onSuccess={handlePaymentSuccess}
                  onBack={handleEditShipping}
                />
              </div>
            )}

            {step === 3 && (
              <div className="confirmation-section">
                <div className="confirmation-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h2>Order Confirmed!</h2>
                <p className="confirmation-message">
                  Thank you for your purchase, {shippingInfo.firstName}! Your order has been successfully placed.
                </p>
                
                <div className="order-details">
                  <div className="detail-row">
                    <span>Order Number:</span>
                    <span>FP-{Date.now().toString().slice(-8)}</span>
                  </div>
                  <div className="detail-row">
                    <span>Order Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span>Total Amount:</span>
                    <span className="total-amount">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <button className="btn btn-primary" onClick={handleBackToShop}>
                    Continue Shopping
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Support
                  </button>
                </div>

                <div className="confirmation-note">
                  <p>
                    <i className="fas fa-envelope"></i>
                    A confirmation email has been sent to {shippingInfo.email}
                  </p>
                  <p>
                    <i className="fas fa-shipping-fast"></i>
                    Your order will be shipped within 2-3 business days
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="order-items">
                {cartItems.map(item => (
                  <div key={item.cartId} className="order-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                      <span className="item-quantity">{item.quantity}</span>
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Size: {item.size}</p>
                    </div>
                    <div className="item-price">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="total-row">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {step === 1 && (
                <div className="shipping-note">
                  <i className="fas fa-truck"></i>
                  <span>Free shipping on orders over $50</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;