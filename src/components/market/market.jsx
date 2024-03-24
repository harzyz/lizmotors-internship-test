import { Link } from "react-router-dom";
import styles from "./market.module.css";
import {motion } from 'framer-motion'
import Box from "../box/box";
import { useState } from "react";

const Market = () => {
  const [show, setShow] = useState(false)

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className={styles.internal}>
        <Box bgColor={'#2A4494'}>External</Box>
        <div className={styles.line}></div>
        <Link className={styles.link} to='/market/b2c'><Box fSize={'15px'} bgColor={'#9acd32'}>B2C</Box></Link>
      </div>
      <div className={styles.internal}>
        <Box bgColor={'#2A4494'}>Internal</Box>
        <div className={styles.line}></div>
        <Box fSize={'15px'} bgColor={'#9acd32'} onClick={()=> {setShow(!show)}}>B2B</Box>
        {show && <h3>Business to Business</h3>}
      </div>
    </motion.div>
  );
};

export default Market;
