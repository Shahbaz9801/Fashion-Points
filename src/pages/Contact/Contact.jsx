import React, { useState } from 'react';
import FAQItem from '../../components/FAQItem/FAQItem';
import { contactFAQs } from '../../data/faqData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      text: 'Call us for immediate assistance',
      value: '+1 (234) 567-8900',
      link: 'tel:+1234567890',
      hours: 'Mon-Fri: 9am-7pm, Sat: 10am-6pm, Sun: 11am-5pm'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      text: 'Message us for quick responses',
      value: '+1 (234) 567-8900',
      link: 'https://wa.me/1234567890',
      hours: 'Available during business hours'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      text: 'Send us an email for detailed inquiries',
      value: 'info@fashionpoint.com',
      link: 'mailto:info@fashionpoint.com',
      hours: 'Response within 24 hours'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      text: 'Our flagship store location',
      value: '123 Fashion Street, Style City, ST 12345',
      link: '#',
      hours: 'Mon-Fri: 9am-7pm, Sat: 10am-6pm'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
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
      alert(`Thank you, ${formData.name}! Your message has been sent. We will get back to you within 24 hours.`);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleMapClick = () => {
    // In a real implementation, this would open Google Maps
    alert('This would open Google Maps with our location in a real implementation.');
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Fashion Point</h1>
          <p className="page-subtitle">
            Get in touch with our team for inquiries and support
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h3 className="contact-title">{info.title}</h3>
                <p className="contact-text">{info.text}</p>
                <a 
                  href={info.link} 
                  className="contact-link"
                  target={info.icon.includes('whatsapp') ? '_blank' : '_self'}
                  rel={info.icon.includes('whatsapp') ? 'noopener noreferrer' : ''}
                >
                  {info.value}
                </a>
                <p className="contact-hours">{info.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-container">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you soon
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="contactName">Full Name *</label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group half">
                    <label htmlFor="contactEmail">Email Address *</label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactSubject">Subject *</label>
                  <select
                    id="contactSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Inquiry</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Return/Exchange</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactMessage">Message *</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-map-container">
              <h2 className="section-title">Our Location</h2>
              <div className="map-wrapper">
                <div className="map-placeholder" onClick={handleMapClick}>
                  <div className="map-overlay">
                    <h3>Fashion Point Flagship Store</h3>
                    <p>123 Fashion Street, Style City, ST 12345</p>
                    <p>
                      <strong>Business Hours:</strong><br />
                      Mon-Fri: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Map Location" 
                    className="map-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>
          
          <div className="faq-grid">
            {contactFAQs.map((faq, index) => (
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

export default Contact;