import React from 'react';
import { motion } from "framer-motion";

import { Button, MenuNav } from './Elements';

const variants = {
  open: { x: 0 },
  close: { 
    x: "-100%",
    // 'delay' is required to see the Animation in children Components!!!
    transition: {
      delay: 0.5
    }
  }
};

const liVariants = {
  open: { 
    y: 0, 
    opacity: 1,
    // 'delay' is required to see the Animation in children Components!!!
    transition: {
      delay: 0.5
    }
  },
  close: { y: -20, opacity: 0 }
};

const links = [
  "one", "two", "three", "four"
];

const Nav = ({ isNavOpened, setNavOpen }) => {
  return (
    <MenuNav 
      variants={variants}
      initial="close"
      animate={ isNavOpened ? "open" : "close" }
      transition={{ damping: 300 }}
    >
      <Button onClick={() => setNavOpen(false)}>Close</Button>
      <ul>
        {links.map(link => (
          <motion.li variants={liVariants} key={link}>
            <a href="foo">{link}</a>
          </motion.li>
        ))}
      </ul>
    </MenuNav>
  )
};

export default Nav;
