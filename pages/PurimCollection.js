import { Button } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';

function PurimCollection() {
  const [purimCollection, setPurimCollection] = useState([]);

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

      <section className=" purim-collection">
        {purimCollection.map((product) => {
          return product.img !== 'src' ? (
            <div>
              <Product
                key={product._id}
                id={product._id}
                title={product.title}
                price={product.price}
                image={product.img}
              />

              {/* <button className="btn">הוספה לסל </button> */}
            </div>
          ) : null;
        })}
      </section>
    </>
  );
}

export default PurimCollection;
