import { useState } from 'react';
import Box from '../box/box';
import styles from './manufacturing.module.css'
import { motion } from "framer-motion";

const Manufacturing = () => {
  const [hover, setHover] = useState(0);

  const onHover = (id) => {
    setHover(id);
  };
  const outHover = () => {
    setHover(0);
  };
  const ManufacturingData = [
    {
      id: 1,
      title: "Material",
      details:
        "Material: Selection of raw materials based on durability, cost, and performance to meet design and regulatory requirements.",
    },
    {
      id: 2,
      title: "Production",
      details:
        "Production: Actual manufacturing process including assembly, quality control, and logistics to produce the vehicle.",
    },
  ];
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {ManufacturingData.map((item) => (
        <div key={item.id}>
          <Box onMouseEnter={() => onHover(item.id)} onMouseLeave={outHover} bgColor={"#E8919D"}>{item.title}</Box>
          {item.id === hover && <span className={styles.sales}>{item.details}</span>}
        </div>
      ))}
    </motion.div>
  )
}

export default Manufacturing
