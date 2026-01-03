import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Track your training and progress with us</h1>
        <p>A convenient and simple for everyone</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link className={`btn ${styles.btnCta}`} to="/">
          Go to Tracking
        </Link>
      </div>
    </div>
  );
};

export default Home;
