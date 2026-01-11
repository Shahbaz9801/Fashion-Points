import React, { useState } from 'react';

const PaymentForm = ({ amount, shippingInfo, cartItems, onSuccess, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (paymentMethod === 'card') {
      // Validate card details
      const { cardNumber, expiry, cvv, nameOnCard } = cardDetails;
      
      if (!cardNumber || !expiry || !cvv || !nameOnCard) {
        alert('Please fill in all card details.');
        return;
      }
      
      // Basic card validation
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid 16-digit card number.');
        return;
      }
      
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert('Please enter expiry date in MM/YY format.');
        return;
      }
      
      if (cvv.length !== 3) {
        alert('Please enter a valid 3-digit CVV.');
        return;
      }
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // In a real app, you would integrate with Stripe/PayPal here
      // For demo purposes, we'll simulate successful payment
      const orderData = {
        orderId: `FP-${Date.now().toString().slice(-8)}`,
        amount: amount.toFixed(2),
        shippingInfo,
        items: cartItems,
        paymentMethod,
        timestamp: new Date().toISOString()
      };
      
      // Save order to localStorage (simulating backend)
      const existingOrders = JSON.parse(localStorage.getItem('fashionPointOrders') || '[]');
      existingOrders.push(orderData);
      localStorage.setItem('fashionPointOrders', JSON.stringify(existingOrders));
      
      onSuccess();
    }, 2000);
  };

  return (
    <div className="payment-form">
      <div className="payment-method-selector">
        <div className="payment-option">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          <label htmlFor="card">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            Credit/Debit Card
          </label>
        </div>
        
        <div className="payment-option">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <label htmlFor="paypal">
            <i className="fab fa-cc-paypal"></i>
            PayPal
          </label>
        </div>
        
        <div className="payment-option">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={() => setPaymentMethod('cod')}
          />
          <label htmlFor="cod">
            <i className="fas fa-money-bill-wave"></i>
            Cash on Delivery
          </label>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <div className="card-details-form">
          <div className="form-group">
            <label>Card Number *</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date *</label>
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleCardChange}
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>
            
            <div className="form-group">
              <label>CVV *</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardChange}
                placeholder="123"
                maxLength="3"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Name on Card *</label>
            <input
              type="text"
              name="nameOnCard"
              value={cardDetails.nameOnCard}
              onChange={handleCardChange}
              placeholder="John Doe"
            />
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div className="paypal-note">
          <p>You will be redirected to PayPal to complete your payment securely.</p>
        </div>
      )}

      {paymentMethod === 'cod' && (
        <div className="cod-note">
          <p>Pay with cash when your order is delivered. A small COD fee may apply.</p>
        </div>
      )}

      <div className="payment-security">
        <i className="fas fa-lock"></i>
        <span>Your payment is secured with 256-bit SSL encryption</span>
      </div>

      <div className="payment-actions">
        <button
          type="button"
          className="btn btn-outline"
          onClick={onBack}
          disabled={isProcessing}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Processing...
            </>
          ) : (
            `Pay $${amount.toFixed(2)}`
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;