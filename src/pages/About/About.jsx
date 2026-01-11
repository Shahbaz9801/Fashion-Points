import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      title: 'Founder & CEO',
      bio: 'With over 15 years in fashion retail, Alex founded Fashion Point with a vision to make premium men\'s fashion accessible to everyone.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Chen',
      title: 'Head of Design',
      bio: 'Sarah leads our design team with a keen eye for trends and a commitment to creating comfortable, stylish clothing.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Wholesale Director',
      bio: 'Michael manages our wholesale partnerships, ensuring our business clients receive exceptional service and support.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const values = [
    {
      icon: 'fas fa-star',
      title: 'Quality First',
      description: 'We source only premium fabrics and materials to ensure our clothing lasts and maintains its appearance wash after wash.'
    },
    {
      icon: 'fas fa-trend-up',
      title: 'Stay Trendy',
      description: 'Our design team constantly researches fashion trends to bring our customers the latest styles without compromising on comfort.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Customer Focus',
      description: 'Whether you\'re a retail customer or wholesale partner, we prioritize your satisfaction with personalized service and support.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Affordable Luxury',
      description: 'We believe premium fashion should be accessible, which is why we maintain competitive pricing through efficient operations.'
    }
  ];

  return (
    <>
      {/* About Hero Section */}
      <section className="page-hero about-hero">
        <div className="container">
          <h1 className="page-title">About Fashion Point</h1>
          <p className="page-subtitle">
            Premium men's clothing retailer and wholesaler since 2010
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-wrapper">
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2010, Fashion Point began as a small boutique men's clothing store with a vision to provide high-quality, trendy fashion at affordable prices. What started as a single retail location has now grown into a respected name in men's fashion, serving both retail customers and wholesale clients across the country.
              </p>
              
              <p>
                Our commitment to quality, style, and customer satisfaction has been the cornerstone of our success. We carefully curate our collections to ensure we offer the latest trends while maintaining timeless styles that every man can appreciate.
              </p>
              
              <p>
                Today, Fashion Point operates as both a retail destination for fashion-conscious men and a trusted wholesale supplier for businesses looking to stock quality men's apparel. Our dual business model allows us to maintain competitive pricing while never compromising on quality.
              </p>
            </div>
            
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Fashion Point Store" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <p className="section-subtitle">What drives us every day</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="model-section">
        <div className="container">
          <h2 className="section-title">Our Business Model</h2>
          <p className="section-subtitle">Serving both retail and wholesale customers</p>
          
          <div className="model-wrapper">
            <div className="model-card">
              <div className="model-image">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Retail Shopping" 
                />
              </div>
              <div className="model-content">
                <h3>Retail</h3>
                <p>
                  Our retail division serves fashion-conscious men directly through our online store and physical locations. We offer a carefully curated selection of trendy men's clothing with a focus on quality and fit.
                </p>
                <ul>
                  <li>Premium quality clothing at competitive prices</li>
                  <li>Latest fashion trends updated seasonally</li>
                  <li>Multiple size options for the perfect fit</li>
                  <li>Easy returns and exchanges policy</li>
                </ul>
                <Link to="/products" className="btn btn-outline">
                  Shop Retail
                </Link>
              </div>
            </div>
            
            <div className="model-card reverse">
              <div className="model-content">
                <h3>Wholesale</h3>
                <p>
                  Our wholesale division supplies retailers and businesses with bulk orders at competitive prices. We work with businesses of all sizes, from small boutiques to large retail chains.
                </p>
                <ul>
                  <li>Competitive wholesale pricing tiers</li>
                  <li>Flexible minimum order quantities</li>
                  <li>Custom branding options available</li>
                  <li>Dedicated wholesale account management</li>
                </ul>
                <Link to="/wholesale" className="btn btn-outline">
                  Wholesale Info
                </Link>
              </div>
              <div className="model-image">
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Wholesale Business" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">The people behind Fashion Point</p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;