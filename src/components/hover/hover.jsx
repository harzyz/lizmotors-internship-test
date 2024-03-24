import styles from "./hover.module.css";
import { motion } from "framer-motion";

const Hover = ({
  reviews,
  positive,
  negative,
  comments,
  prate,
  nrate,
  crate,
  details
}) => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {reviews ? <div className={styles.reviews}>
        <div style={{ width: prate }} className={styles.bar}></div>
        <div style={{ width: nrate }} className={styles.bar2}></div>
        <div style={{ width: crate }} className={styles.bar3}></div>
        <span>Total reviews : {reviews}</span>
        <span>Positive reviews : {positive}</span>
        <span>Negative reviews : {negative}</span>
        <span>Comments : {comments}</span>
      </div> : <div className={styles.details}>{details}</div>}
    </motion.div>
  );
};

export default Hover;
