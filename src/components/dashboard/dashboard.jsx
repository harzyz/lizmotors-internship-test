import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import styles from "./dashboard.module.css";
import { IoCarSport } from "react-icons/io5";

const Dashboard = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Link to="/" className={styles.link}>
          <div className={styles.topbar}>
            <IoCarSport size={30} />
            <h1 className={styles.header}>LIZMOTORS</h1>
          </div>
        </Link>
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
