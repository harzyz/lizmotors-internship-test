import { useState } from 'react';
import Box from '../box/box';
import styles from './design.module.css'
import { motion } from "framer-motion";


const Design = () => {
  const [hover, setHover] = useState(0);

  const onHover = (id) => {
    setHover(id);
  };
  const outHover = () => {
    setHover(0);
  };
  const DesignData = [
    {
      id: 1,
      title: "Hardware",
      details:
        "Hardware: Physical components of the vehicle, including body, chassis, engine, transmission, suspension, and other mechanical parts.",
    },
    {
      id: 2,
      title: "Software",
      details:
        "Software: Electronic systems and programming controlling vehicle functions like infotainment, safety, and performance.",
    },
  ];

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {DesignData.map((item) => (
        <div key={item.id}>
          <Box onMouseEnter={() => onHover(item.id)} onMouseLeave={outHover} bgColor={"#E96343"}>{item.title}</Box>
          {item.id === hover && <span className={styles.sales}>{item.details}</span>}
        </div>
      ))}
    </motion.div>
  )
}

export default Design
