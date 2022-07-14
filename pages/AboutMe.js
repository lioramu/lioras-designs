import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function aboutMe() {
  return (
    <>
      <h1 className={styles.aboutMe}> יעלה בקרוב</h1>
      <h2>
        <Link href="/">
          <a> חזרה לראשי </a>
        </Link>
      </h2>
    </>
  );
}
