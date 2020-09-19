import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Button } from './Elements';

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

const MenuNav = styled(motion.nav)`
  position: fixed;
  text-align: right;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      color: var(--white);
      text-decoration: none;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default NavTwo;
