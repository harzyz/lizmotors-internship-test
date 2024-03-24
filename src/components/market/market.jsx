import { Link } from "react-router-dom";
import styles from "./market.module.css";
import { motion } from "framer-motion";
import Box from "../box/box";
import { useState } from "react";

const Market = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className={styles.internal}>
        <Box bgColor={"#2A4494"}>External</Box>
        <div className={styles.external}>
          <div className={styles.external_phase}>
            <div className={styles.line}></div>
            <Link className={styles.link} to="/market/b2c">
              <Box fSize={"15px"} bgColor={"#9acd32"}>
                B2C
              </Box>
            </Link>
          </div>
          <div className={styles.external_phasee}>
            <div className={styles.line}></div>
            <Box
              onMouseEnter={() => {
                setShow1(true);
              }}
              onMouseLeave={() => {
                setShow1(false);
              }}
              fSize={"15px"}
              bgColor={"#9acd32"}>
              B2B
            </Box>
            {true === show1 && (
              <h3 className={styles.b2b}>
                B2B (Business-to-Business): Commerce between businesses,
                involving transactions of products, services, or information for
                mutual benefit. B2B focuses on providing goods and services
                directly to other businesses rather than consumers.
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className={styles.internal}>
        <Box
          bgColor={"#2A4494"}
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}>
          Internal
        </Box>
        {true === show && (
          <h3 className={styles.sales}>
            Internal Market Research: Gathering data and insights within the
            company, such as sales figures and customer feedback, to inform
            decision-making. Internal market research focuses on analyzing data
            within the organization to understand market trends and customer
            preferences.
          </h3>
        )}
      </div>
    </motion.div>
  );
};

export default Market;
