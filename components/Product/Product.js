import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../../context/CartContext';
import ProductDetalisid from '../ProductDetalis';
import BasicModal from '../Modal';

const Product = (product) => {
  const { _id, title, price, image } = product;
  const { insertProduct } = useContext(CartContext);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => console.log(toggleModal), [toggleModal]);
  const handleClose = () => {
    setToggleModal(false);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          style={{ cursor: 'pointer' }}
          src={image === 'src' ? '/test.png' : image}
          alt={title}
          width={200}
          height={250}
          onClick={() => setToggleModal(true)}
        />
      </div>

      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button className="btn" onClick={() => insertProduct(product)}>
          +
        </button>
      </div>
      <BasicModal open={toggleModal} handleClose={handleClose}>
        <ProductDetalisid product={product} />
      </BasicModal>
    </div>
  );
};
export default Product;
