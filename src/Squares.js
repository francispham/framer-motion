import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from "./Elements";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

const Squares = () => {
  const [ colorsList, setColorsList ] = useState(COLORS);
  const randomColor = colorsList[Math.floor(Math.random()*COLORS.length)];
  const shuffle = array => array.filter(color => color !== randomColor).concat(randomColor);

  return (
    <div>
      <Button onClick={() => setColorsList(shuffle(colorsList))}>Shuffle</Button>
      {colorsList.map(color =>(
        <motion.div
          key={color}
          // https://www.framer.com/api/motion/guide-upgrade-to-framer-motion-2/
          layoutTransition={{
            damping: 100,
            stiffness: 10
          }}
          style={{
            background: color,
            height: 100,
            width: 100
          }} 
        />
      ))}
    </div>
  )
};

export default Squares;
