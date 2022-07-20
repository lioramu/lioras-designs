import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from '../../context/CartContext';

const Product = (product) => {
  const { _id, title, price, image } = product;
  const { insertProduct } = useContext(CartContext);

  console.log('product', product);

  return (
    <div className="product-card">
      <div className="product-image">
        <Image src={image === 'src' ? '/test.png' : image} alt={title} width={200} height={250} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button className="btn" onClick={() => insertProduct(product)}>
          +{' '}
        </button>
      </div>
    </div>
  );
};
export default Product;
