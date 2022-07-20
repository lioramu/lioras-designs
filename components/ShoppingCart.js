import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <section className="ShoppingCart">
      {cart.map((product) => (
        <div className="cart-image" key={product._id}>
          <Image src={product.image} alt="pic" width={150} height={150} />
          <div key={product._id}></div>
          <div _id={product._id} value={product.title}></div>
          <h5>{product.title}</h5>
          <h6>{product.price}</h6>
          <button
            _id={product._id}
            value={product.title}
            onClick={() => removeFromCart(product._id)}
          >
            {' '}
            הסרת מוצר
          </button>
        </div>
      ))}
    </section>
  );
};
export default ShoppingCart;
