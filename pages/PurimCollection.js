import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';
import Product from '../components/Product/Product';
import styles from '../styles/Home.module.css';

function PurimCollection() {
  const [purimCollection, setPurimCollection] = useState([]);
  const { name } = useContext(CartContext);

  useEffect(() => {
    fetch('/api/purim')
      .then((res) => res.json())
      .then((purimCollection) => setPurimCollection(purimCollection));
  }, []);

  return (
    <>
      <h2>
        <Link href="/">
          <a> חזרה לראשי </a>
        </Link>
      </h2>

      <section className={styles.purimCollection}>
        {purimCollection.map((product) => {
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
          ) : null;
        })}
      </section>
    </>
  );
}
export default PurimCollection;








