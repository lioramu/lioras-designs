import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';
import Product from './Product/Product';
import styles from '../styles/Home.module.css';

function Collections({ category }) {
  const [collection, setCollection] = useState([]);
  const { name } = useContext(CartContext);

  useEffect(() => {
    fetch(`/api/${category}`)
      .then((res) => res.json())
      .then((_category) => setCollection(_category));
  }, []);

  return (
      <section className={styles.Collection}>
        {collection.map((product) => {
          return product.img !== 'src' ? (
            <div>
              <Product
                key={product._id}
                _id={product._id}
                title={product.title}
                price={product.price}
                image={product.img}
              />
            </div>
          ) : null
        })}
      </section>
  );
}
export default Collections;
