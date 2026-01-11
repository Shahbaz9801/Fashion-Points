import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Modal from '../../components/Modal/Modal';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import './Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayCount, setDisplayCount] = useState(8);

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  const displayedProducts = filteredProducts.slice(0, displayCount);

  const filterButtons = [
    { id: 'all', label: 'All Products' },
    { id: 't-shirts', label: 'T-Shirts' },
    { id: 'shirts', label: 'Casual Shirts' },
    { id: 'jeans', label: 'Jeans' },
    { id: 'trousers', label: 'Trousers' },
    { id: 'joggers', label: 'Joggers' }
  ];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    setDisplayCount(8);
    
    // Scroll to products section
    const productsSection = document.querySelector('.all-products');
    if (productsSection) {
      const headerHeight = 70;
      const sectionPosition = productsSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryId) => {
    handleFilterClick(categoryId);
  };

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 4);
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
      {/* Products Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Explore our premium collection of men's casual wear
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">
            Browse our wide range of men's fashion categories
          </p>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="all-products">
        <div className="container">
          <h2 className="section-title">All Products</h2>
          <p className="section-subtitle">Browse our complete collection</p>
          
          <div className="products-filter">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`filter-btn ${activeFilter === button.id ? 'active' : ''}`}
                onClick={() => handleFilterClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>
          
          <div className="products-grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
          
          {displayedProducts.length < filteredProducts.length && (
            <div className="load-more">
              <button className="btn btn-primary" onClick={handleLoadMore}>
                Load More Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {renderProductModal()}
      </Modal>
    </>
  );
};

export default Products;