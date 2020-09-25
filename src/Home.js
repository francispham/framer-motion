import React from 'react'
import { motion } from "framer-motion";

import "./App.css";
import { Container } from "./Elements";

import Squares from "./Squares";
const Home = () => {
  return (
    <motion.div>
      <Container>
        <h1>HOME</h1>
        <Squares />
      </Container>
    </motion.div>
  )
};

export default Home;