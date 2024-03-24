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
      details: 'Interview: Conducting face-to-face or remote interviews with potential customers to gather insights and opinions about the product.'
    },
    {
      id: 3,
      label: "Public Data",
      details: 'Public Data: Analyzing publicly available data from sources like government reports, industry publications, and market research reports.'
    },
    {
      id: 4,
      label: "Health",
      details: 'Health: Considering health-related data and trends that could impact consumer preferences, such as safety features or environmental impact.'
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
          {item.id === hover && <Hover className={styles.trial} reviews={item.reviews} positive={item.positive} negative={item.negative} comments={item.comments} prate={item.prate} nrate={item.nrate} crate={item.crate} details={item.details} />}
        </div>
      ))}

      
    </motion.div>
  );
};

export default External;
