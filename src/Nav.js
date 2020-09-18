import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Button } from './Elements';

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

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
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

export default Nav;
