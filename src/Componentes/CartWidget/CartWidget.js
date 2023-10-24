import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
  const cartCount = 2;
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{cartCount}</span>
    </div>
  );
};
