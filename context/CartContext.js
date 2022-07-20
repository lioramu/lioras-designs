import { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const insertProduct = ({ _id, title, price, image }) => {
    const index = cart.findIndex((p) => p._id === _id);
    if (index >= 0) {
      const product = cart[index];
      const qty = product.qty;
      setCart(
        cart.map((prod, i) => {
          if (i === index) {
            return { ...product, qty: qty + 1 };
          }
          return prod;
        })
      );
    } else {
      const product = { _id, title, price, image, qty: 1 };
      console.log('added product', product);
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (_id) => {
    let decreasingCart = cart.filter((product) => product._id !== _id);
    setCart(decreasingCart);
    console.log('remove from cart', _id);
  };
  return (
    <CartContext.Provider value={{ cart, insertProduct, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
