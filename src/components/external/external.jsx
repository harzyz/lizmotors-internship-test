import { useState } from "react";
import styles from "./external.module.css";
import Hover from "../hover/hover";
import { motion } from "framer-motion";
import Box from "../box/box";


const External = () => {
  const [hover, setHover] = useState(0);

  const onHover = (id) => {
    setHover(id);
  };
  const outHover = () => {
    setHover(0);
  };

  const ExternalItems = [
    {
      id: 1,
      label: "Online",
      reviews: '467',
      positive: '201',
      prate: '84%',
      negative: '201',
      nrate: '16%',
      comments: '201',
      crate: '72%',
    },
    {
      id: 2,
      label: "Interview",
      reviews: '467',
      positive: '201',
      prate: '59%',
      negative: '201',
      nrate: '41%',
      comments: '201',
      crate: '72%',
    },
    {
      id: 3,
      label: "Public Data",
      reviews: '467',
      positive: '201',
      prate: '82%',
      negative: '201',
      nrate: '18%',
      comments: '201',
      crate: '62%',
    },
    {
      id: 4,
      label: "Health",
      reviews: '467',
      positive: '201',
      prate: '62%',
      negative: '201',
      nrate: '58%',
      comments: '201',
      crate: '32%',
    },
  ];
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {ExternalItems.map((item) => (
        <div className={styles.display_hover} key={item.label }>
          <Box bgColor={'#2A4494'} onMouseEnter={() => onHover(item.id)} onMouseLeave={outHover}>{item.label}</Box>
          {item.id === hover && <Hover className={styles.trial} reviews={item.reviews} positive={item.positive} negative={item.negative} comments={item.comments} prate={item.prate} nrate={item.nrate} crate={item.crate} />}
        </div>
      ))}

      
    </motion.div>
  );
};

export default External;
