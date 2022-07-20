import '../styles/globals.css';
import ButtonsMenu from '../components/ButtonsMenu';
import CartProvider from '../context/CartContext';
import ShoppingCart from '../components/ShoppingCart';
import Drawer from '../components/Drawer';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ButtonsMenu />
      <Drawer />
      {/* <ShoppingCart /> */}
      <Component {...pageProps} />;
    </CartProvider>
  );
}

export default MyApp;
