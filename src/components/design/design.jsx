import Box from '../box/box';
import styles from './design.module.css'
import { motion } from "framer-motion";


const Design = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div>
        <Box bgColor={'#E96343'}>Hardware</Box>
      </div>
      <div>
        <Box bgColor={'#E96343'}>Software</Box>
      </div>
    </motion.div>
  )
}

export default Design
