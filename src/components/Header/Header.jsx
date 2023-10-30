import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.image}>Logo</div>

      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Attorneys</li>
        <li className={styles.item}>Practice Area</li>
        <li className={styles.item}>About us</li>
      </ul>

      <div>
        <button className={styles.btn}>Contact us </button>
      </div>
    </div>
  );
}
