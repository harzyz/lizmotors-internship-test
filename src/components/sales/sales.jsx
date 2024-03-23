import Box from "../box/box";
import styles from "./sales.module.css";
import { motion } from "framer-motion";

const Sales = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div>
        <Box bgColor={"#A684EB"}>Online</Box>
      </div>
      <div>
        <Box bgColor={"#A684EB"}>Delership</Box>
      </div>
    </motion.div>
  );
};

export default Sales;
