import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { getCartItemCount, openCart } = useCart();
  const itemCount = getCartItemCount();

  return (
    <div className="cart-icon" onClick={openCart}>
      <Link to="/cart" className="cart-link">
        <i className="fas fa-shopping-cart"></i>
        {itemCount > 0 && (
          <span className="cart-count">{itemCount}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;