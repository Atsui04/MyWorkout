import styles from "./Footer.module.css";

const Footer = function () {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {year} by Markiian Bushko</p>
    </footer>
  );
};

export default Footer;
