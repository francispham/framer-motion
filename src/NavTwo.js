import React from 'react';
import { motion } from "framer-motion";

import { Button, MenuNav } from './Elements';

const variants = {
  open: { x: 0 },
  close: { 
    x: "100%",
    // 'delay' is required to see the Animation in children Components!!!
    transition: {
      delay: 0.5
    }
  }
};

const ulVariants = {
  open: {
    scale: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1, // 1: forwards, -1: backwards
      when: "afterChildren" // "afterChildren" "beforeChildren"
    }
  },
  close: {
    scale: 0.7
  }
};

const liVariants = {
  open: { 
    y: 0,
    opacity: 1
  },
  close: { y: -20, opacity: 0 }
};

const links = [
  "one", "two", "three", "four"
];

const NavTwo = ({ isNavOpened, setNavOpen }) => {
  return (
    <MenuNav 
      variants={variants}
      initial="close"
      animate={ isNavOpened ? "open" : "close" }
      transition={{ damping: 300 }}
      style={{
        right: 0,
        left: "auto",
        textAlign: "right",
      }}
    >
      <Button onClick={() => setNavOpen(false)}>Close</Button>
      <motion.ul variants={ulVariants}>
        {links.map(link => (
          <motion.li variants={liVariants} key={link}>
            <a href="foo">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  )
};

export default NavTwo;
