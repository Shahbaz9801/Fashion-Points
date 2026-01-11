import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Wholesale from './pages/Wholesale/Wholesale';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        {/* Cart sidebar will be rendered conditionally */}
      </div>
    </CartProvider>
  );
}

export default App;