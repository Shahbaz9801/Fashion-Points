export const categories = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    description: 'Premium cotton t-shirts in various styles and colors',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'shirts',
    name: 'Casual Shirts',
    description: 'Stylish casual shirts for every occasion',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'jeans',
    name: 'Jeans',
    description: 'Comfortable and durable jeans in various fits',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'trousers',
    name: 'Trousers',
    description: 'Casual trousers for a sophisticated look',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'joggers',
    name: 'Joggers',
    description: 'Comfortable joggers for casual and active wear',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

export const businessTypes = [
  {
    type: 'retail',
    icon: 'fas fa-shopping-bag',
    title: 'Retail Shopping',
    description: 'Shop premium men\'s clothing directly with competitive prices and fast delivery. Perfect for individual customers.',
    buttonText: 'Shop Retail',
    link: '/products'
  },
  {
    type: 'wholesale',
    icon: 'fas fa-industry',
    title: 'Wholesale',
    description: 'Bulk orders for retailers and businesses. Special wholesale pricing with flexible MOQs and dedicated support.',
    buttonText: 'Wholesale Info',
    link: '/wholesale'
  }
];

export const trustItems = [
  {
    icon: 'fas fa-award',
    title: 'Premium Quality',
    description: 'High-quality fabrics and materials for lasting comfort and style.'
  },
  {
    icon: 'fas fa-tags',
    title: 'Best Pricing',
    description: 'Competitive prices for both retail customers and wholesale buyers.'
  },
  {
    icon: 'fas fa-shipping-fast',
    title: 'Fast Delivery',
    description: 'Quick processing and shipping for all orders, big or small.'
  },
  {
    icon: 'fas fa-headset',
    title: 'Dedicated Support',
    description: 'Professional customer service for inquiries and after-sales support.'
  }
];

export const pricingPlans = [
  {
    title: 'Starter',
    price: '50-200 pcs',
    buttonText: 'Inquire Now',
    features: [
      { text: 'Minimum 50 pieces', included: true },
      { text: 'Mix 3+ styles', included: true },
      { text: '15% discount off retail', included: true },
      { text: 'Standard shipping', included: true },
      { text: 'Custom labeling', included: false }
    ]
  },
  {
    title: 'Professional',
    price: '201-500 pcs',
    buttonText: 'Inquire Now',
    features: [
      { text: 'Minimum 200 pieces', included: true },
      { text: 'Mix 5+ styles', included: true },
      { text: '25% discount off retail', included: true },
      { text: 'Priority shipping', included: true },
      { text: 'Basic custom labeling', included: true }
    ]
  },
  {
    title: 'Enterprise',
    price: '500+ pcs',
    buttonText: 'Inquire Now',
    features: [
      { text: 'Minimum 500 pieces', included: true },
      { text: 'Mix 10+ styles', included: true },
      { text: '35% discount off retail', included: true },
      { text: 'Free shipping', included: true },
      { text: 'Full custom branding', included: true }
    ]
  }
];