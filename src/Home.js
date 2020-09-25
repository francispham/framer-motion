import React from 'react'
import { motion } from "framer-motion";

import "./App.css";
import Squares from "./Squares";
import { Container } from "./Elements";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const h1Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  exit: { opacity: 0, y: -100 },
};

const Home = () => {
  return (
    <motion.div 
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container>
        <motion.h1
          variants={h1Variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >HOME</motion.h1>
        <Squares />
      </Container>
    </motion.div>
  )
};

export default Home;