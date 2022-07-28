import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Home.module.css';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div>
  
      <section className={styles.ShoppingCart}>
        {cart.map((product) => (
          <div className="cart-image" key={product._id}>
            <Image src={product.image} alt="pic" width={100} height={130} />
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
    </div>
  );
};
export default ShoppingCart;
