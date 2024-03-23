import { Link } from "react-router-dom";
import styles from "./market.module.css";

const Market = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.internal}>
        <h1>External</h1>
        <div className={styles.line}></div>
        <Link to='/market/b2c'><h2>B2C</h2></Link>
      </div>
      <div className={styles.internal}>
        <h1>Internal</h1>
        <div className={styles.line}></div>
        <h2>B2B</h2>
        <h3>Business to Business</h3>
      </div>
    </div>
  );
};

export default Market;
