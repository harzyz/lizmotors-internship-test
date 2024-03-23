import Box from '../box/box';
import styles from './manufacturing.module.css'
import { motion } from "framer-motion";

const Manufacturing = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div>
        <Box bgColor={'#E8919D'}>Material</Box>
      </div>
      <div>
        <Box bgColor={'#E8919D'}>Production</Box>
      </div>
    </motion.div>
  )
}

export default Manufacturing
