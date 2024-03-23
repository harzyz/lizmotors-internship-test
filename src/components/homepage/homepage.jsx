import styles from "./homepage.module.css";
import { motion } from "framer-motion";
import Mortor from '../../assets/images/images.jpg'

const Homepage = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <h1 className={styles.title}>LIZ MOTORS TIMELINE MAP</h1>
      <img src={Mortor} alt="Ford" />
    </motion.div>
  );
};

export default Homepage;
