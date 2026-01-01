import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Track your training and progress with us</h1>
        <p>A convenient and simple for everyone</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <a className={`btn ${styles.btnCta}`}>Go to Tracking</a>
      </div>
    </div>
  );
}

export default Home;
