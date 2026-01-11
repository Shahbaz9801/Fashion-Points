import React, { useState } from 'react';
import PricingCard from '../../components/PricingCard/PricingCard';
import FAQItem from '../../components/FAQItem/FAQItem';
import { pricingPlans } from '../../data/categories';
import { wholesaleFAQs } from '../../data/faqData';
import './Wholesale.css';

const Wholesale = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlanSelect = (plan) => {
    let quantityValue = '';
    
    if (plan.title === 'Starter') {
      quantityValue = '50-200';
    } else if (plan.title === 'Professional') {
      quantityValue = '201-500';
    } else if (plan.title === 'Enterprise') {
      quantityValue = '501-1000';
    }
    
    setFormData(prev => ({
      ...prev,
      quantity: quantityValue
    }));

    // Scroll to form
    const formSection = document.getElementById('inquiry');
    if (formSection) {
      const headerHeight = 70;
      const sectionPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'business', 'email', 'phone', 'quantity'];
    const isValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your wholesale inquiry has been submitted. Our team will contact you within 24 hours.`);
      
      setFormData({
        name: '',
        business: '',
        email: '',
        phone: '',
        quantity: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Wholesale Hero Section */}
      <section className="page-hero wholesale-hero">
        <div className="container">
          <h1 className="page-title">Wholesale Orders Available</h1>
          <p className="page-subtitle">
            Premium men's clothing at competitive wholesale prices
          </p>
          <a href="#inquiry" className="btn btn-primary btn-large">
            Get Wholesale Pricing
          </a>
        </div>
      </section>

      {/* Wholesale Benefits Section */}
      <section className="wholesale-benefits">
        <div className="container">
          <h2 className="section-title">Benefits of Wholesale with Fashion Point</h2>
          <p className="section-subtitle">
            Why retailers choose us for their bulk orders
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-percentage"></i>
              </div>
              <h3 className="benefit-title">Competitive Pricing</h3>
              <p className="benefit-text">
                Get the best wholesale prices in the market with flexible pricing tiers based on order volume.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3 className="benefit-title">Flexible MOQ</h3>
              <p className="benefit-text">
                Minimum Order Quantity starts from just 50 pieces per style, with mix-and-match options available.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="benefit-title">Bulk Shipping</h3>
              <p className="benefit-text">
                Dedicated bulk shipping with tracking and insurance for all wholesale orders.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="benefit-title">Dedicated Support</h3>
              <p className="benefit-text">
                Personal wholesale account manager to assist with orders, logistics, and after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Wholesale Pricing Tiers</h2>
          <p className="section-subtitle">Choose the right plan for your business</p>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                isFeatured={index === 1} // Make Professional plan featured
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section className="inquiry-section" id="inquiry">
        <div className="container">
          <div className="inquiry-wrapper">
            <div className="inquiry-info">
              <h2 className="section-title">Start Your Wholesale Order</h2>
              <p className="section-subtitle">
                Fill out the form and our wholesale team will contact you within 24 hours
              </p>
              
              <div className="inquiry-details">
                <h3>What to expect:</h3>
                <ul>
                  <li><i className="fas fa-check"></i> Custom pricing based on your order volume</li>
                  <li><i className="fas fa-check"></i> Product catalog with wholesale prices</li>
                  <li><i className="fas fa-check"></i> Samples available upon request</li>
                  <li><i className="fas fa-check"></i> Flexible payment terms for established businesses</li>
                  <li><i className="fas fa-check"></i> Dedicated wholesale account manager</li>
                </ul>
              </div>
              
              <div className="contact-direct">
                <h3>Prefer direct contact?</h3>
                <a href="tel:+1234567890" className="contact-link">
                  <i className="fas fa-phone"></i> Call: +1 (234) 567-8900
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  className="contact-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp: +1 (234) 567-8900
                </a>
              </div>
            </div>
            
            <div className="inquiry-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="business">Business Name *</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="quantity">Estimated Monthly Order Quantity *</label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select range</option>
                    <option value="50-200">50-200 pieces</option>
                    <option value="201-500">201-500 pieces</option>
                    <option value="501-1000">501-1000 pieces</option>
                    <option value="1000+">1000+ pieces</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business and specific requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Submit Wholesale Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Wholesale FAQ</h2>
          <p className="section-subtitle">Common questions about our wholesale process</p>
          
          <div className="faq-grid">
            {wholesaleFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wholesale;