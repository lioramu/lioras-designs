import "../styles/globals.css";
import ButtonsMenu from "../components/ButtonsMenu";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ButtonsMenu />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
