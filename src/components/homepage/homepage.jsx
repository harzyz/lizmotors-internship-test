import styles from "./homepage.module.css";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <h1>Liz Motors Timeline Map</h1>
    </motion.div>
  );
};

export default Homepage;
