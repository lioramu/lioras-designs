import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ButtonsMenu from "../components/ButtonsMenu";
import Carousel from "nuka-carousel";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lioras Designs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ליאורה עיצובים
          {/* <a href="https://nextjs.org">Next.js!</a> */}
        </h1>

        <p className={styles.description}>
          חלום של ילד <code className={styles.code}></code>
        </p>
        <div>
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
        {/* <span className={styles.links}>
          <Link href="../PurimCollection">
            <Image
              route="/images/DSC_5872.JPG"
              src="/images/DSC_5872.JPG"
              alt="pic"
              width={300}
              height={450}
            ></Image>
          </Link>
          <Link href="/pages/BoysCollection">
            <Image
              src="/images/DSC_5601.JPG"
              alt="pic"
              width={300}
              height={450}
            ></Image>
          </Link>
        </span>

        <div className={styles.grid}>
          <a
            href="https://res.cloudinary.com/dtepttwll/image/upload/v1657523758/20211216_132805_envgtn.jpg"
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <Link href="../AboutMe">
          <span className={styles.logo}>
            {" "}
            קצת עלי {"  "}
            <Image src="/icon.jpeg" alt="Logo" width={100} height={100} />
          </span>
        </Link>
      </footer>
    </div>
  );
}
