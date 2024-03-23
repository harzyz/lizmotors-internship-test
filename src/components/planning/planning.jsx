import Box from '../box/box'
import styles from './planning.module.css'
import {motion } from 'framer-motion'

const Planning = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div>
        <Box bgColor={'#82B3E8'}>PRD</Box>
      </div>
      <div>
        <Box bgColor={'#82B3E8'}>Specs</Box>
      </div>
    </motion.div>
  )
}

export default Planning
