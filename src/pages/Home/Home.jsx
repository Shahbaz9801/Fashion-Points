import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import TrustItem from '../../components/TrustItem/TrustItem';
import Modal from '../../components/Modal/Modal';
import { products } from '../../data/products';
import { businessTypes, trustItems } from '../../data/categories';
import './Home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = products.slice(0, 4);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderProductModal = () => {
    if (!selectedProduct) return null;

    return (
      <div className="modal-product">
        <div className="modal-product-image">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className="modal-product-info">
          <h2>{selectedProduct.name}</h2>
          <p className="product-category">{selectedProduct.category}</p>
          <div className="product-price">{selectedProduct.price}</div>
          <p className="product-description">{selectedProduct.description}</p>
          <div className="product-sizes">
            <h4>Available Sizes</h4>
            <div className="size-options">
              {selectedProduct.sizes.map((size) => (
                <button key={size} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="modal-actions">
            <Link to="/contact" className="btn btn-primary" onClick={handleCloseModal}>
              Inquire Now
            </Link>
            <Link to="/wholesale" className="btn btn-outline" onClick={handleCloseModal}>
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Trendy Men's Wear <span className="gold-text">Retail & Wholesale</span>
            </h1>
            <p className="hero-subtitle">
              Premium quality clothing with the latest trends for the modern man
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/wholesale" className="btn btn-secondary">
                Wholesale Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our latest arrivals</p>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Retail & Wholesale Section */}
      <section className="business-section">
        <div className="container">
          <div className="business-grid">
            {businessTypes.map((business) => (
              <BusinessCard
                key={business.type}
                type={business.type}
                icon={business.icon}
                title={business.title}
                description={business.description}
                buttonText={business.buttonText}
                link={business.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">Why Choose Fashion Point</h2>
          <p className="section-subtitle">
            Trusted by retail customers and wholesale buyers
          </p>
          
          <div className="trust-grid">
            {trustItems.map((item, index) => (
              <TrustItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {renderProductModal()}
      </Modal>
    </>
  );
};

export default Home;