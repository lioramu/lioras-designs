import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import { CartContext } from '../context/CartContext';

function BatMizvaCollection() {
  const [batMizvaCollection, setBatMizvaCollection] = useState([]);
  const { name } = useContext(CartContext);

  useEffect(() => {
    fetch('/api/batMizva')
      .then((res) => res.json())
      .then((batMizvaCollection) => setBatMizvaCollection(batMizvaCollection));
  }, []);

  return (
    <>
      <h2>
        <Link href="/">
          <a> חזרה לראשי </a>
        </Link>
      </h2>

      <section className=" bat-mizva-collection">
        {batMizvaCollection.map((product) => {
          return product.img !== 'src' ? (
            <div>
              <Product
                key={product.id}
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

export default BatMizvaCollection;
