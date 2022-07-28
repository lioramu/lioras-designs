import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Home.module.css';

export default function Whatsapp() {
  return (
    <div className={styles.whatsapp}>
    <Link href="https://wa.me/9720503034986">
      <a>{" יצירת קשר"}
        <Image src="/images/Whatsapp.jpg" alt="icon" width={60} height={60} />
      </a>
    </Link>
    </div>
  );
}
