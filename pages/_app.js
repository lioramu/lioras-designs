import '../styles/globals.css';
import CartProvider from '../context/CartContext';
import Whatsapp from '../components/Whatsapp';

function MyApp({ Component, pageProps }) {
  return (

      <CartProvider>
        <Component {...pageProps} />;
        <Whatsapp />
      </CartProvider>

  );
}
export default MyApp;
