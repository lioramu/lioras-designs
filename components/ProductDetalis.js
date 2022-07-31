import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductDetalisid = ({ product }) => {

  return (
    <div className="cart-image" key={product._id}>
      <Image src={product.image} alt="pic" width={100} height={130} />
      <div key={product._id}></div>
      <div _id={product._id} value={product.title}></div>
      <h5>{product.title}</h5>
      <h6>{product.price}</h6>
      
    </div>
  );
};
export default ProductDetalisid;
