import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import ButtonsMenu from '../components/ButtonsMenu';
import { useState } from 'react';
import Collections from '../components/Collections';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import { Button} from '@mui/material';
import Drawer from '../components/Drawer';


const collectionsNavigation = ['purim', 'batMizva'];

export default function Home() {
  const [navStatus, setNavStatus] = useState('ראשי');
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigation = (navValue) => {
    setNavStatus(navValue);
  };

  return (
    <div>
      <div className={styles.container}></div>
      <Head>
        <title>Lioras Designs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <span className={styles.home}>
        <Button onClick={() => handleNavigation('ראשי')}>
          <Drawer />
          <CottageSharpIcon sx={{ fontSize: 38 }} />
        </Button>
      </span>
      <ButtonsMenu handleNavigation={handleNavigation} />
      {collectionsNavigation.map((category) =>
          navStatus === category && <Collections category={category} />
      )}
      {navStatus === 'ראשי' && (
        <section className={styles.main}>
          <h1 className={styles.title}>ליאורה עיצובים</h1>

          <p className={styles.description}>
            חלום של ילד <code className={styles.code}></code>
          </p>

          <div>
            <footer className={styles.footer}>
              <Link href="../AboutMe">
                <a className={styles.logo}>
                  קצת עלי {'  '}
                  <Image src="/icon.jpeg" alt="Logo" width={300} height={300} />
                </a>
              </Link>
            </footer>

            <div className={styles.carousel}>
              <Carousel wrapAround={true} slidesToShow={10} autoplay={1000}>
                <Image
                  src="/images/3H2A3286.jpg"
                  alt="pic"
                  width={250}
                  height={350}
                />
                <Image
                  src="/images/3H2A3424.jpg"
                  alt="pic"
                  width={250}
                  height={350}
                />
                <Image
                  src="/images/3H2A3499-1.jpg"
                  alt="pic"
                  width={250}
                  height={350}
                />
                <Image
                  src="/images/20211211_105931.jpg"
                  alt="pic"
                  width={250}
                  height={350}
                />
                <Image
                  src="/images/DSC_4751.JPG"
                  alt="pic"
                  width={250}
                  height={350}
                />
              </Carousel>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
