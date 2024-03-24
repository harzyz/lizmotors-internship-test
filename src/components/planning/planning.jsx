import { useState } from 'react';
import Box from '../box/box'
import styles from './planning.module.css'
import {motion } from 'framer-motion'

const Planning = () => {
  const [hover, setHover] = useState(0);

  const onHover = (id) => {
    setHover(id);
  };
  const outHover = () => {
    setHover(0);
  };
  const PlanningData = [
    {
      id: 1,
      title: "PRD",
      details:
        "PRD (Product Requirements Document): Defines the features, functionality, and constraints of the product to guide development.",
    },
    {
      id: 2,
      title: "Specs",
      details:
        "Specs (Specifications): Detailed descriptions of the product's design, materials, dimensions, and performance requirements.",
    },
  ];
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {PlanningData.map((item) => (
        <div key={item.id}>
          <Box onMouseEnter={() => onHover(item.id)} onMouseLeave={outHover} bgColor={"#82B3E8"}>{item.title}</Box>
          {item.id === hover && <span className={styles.sales}>{item.details}</span>}
        </div>
      ))}
    </motion.div>
  )
}

export default Planning
