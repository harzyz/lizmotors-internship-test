import { useState } from "react";
import Box from "../box/box";
import styles from "./sales.module.css";
import { motion } from "framer-motion";

const Sales = () => {
  const [hover, setHover] = useState(0);

  const onHover = (id) => {
    setHover(id);
  };
  const outHover = () => {
    setHover(0);
  };
  const SalesData = [
    {
      id: 1,
      title: "Online",
      details:
        "Online Sales: Selling vehicles through digital platforms, typically websites or mobile apps, offering convenience and accessibility to customers",
    },
    {
      id: 2,
      title: "Delership",
      details:
        "Dealership Sales: Selling vehicles through physical locations, providing personalized customer service and test drive opportunities.",
    },
  ];

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {SalesData.map((item) => (
        <div key={item.id}>
          <Box onMouseEnter={() => onHover(item.id)} onMouseLeave={outHover} bgColor={"#A684EB"}>{item.title}</Box>
          {item.id === hover && <span className={styles.sales}>{item.details}</span>}
        </div>
      ))}
    </motion.div>
  );
};

export default Sales;
