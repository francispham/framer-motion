import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

const variants = {
  enter: {
    x: 1000,
    opacity: 0
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: -1000,
    opacity: 0
  }
}

const Slideshow = () => {
  const [ [page, direction], setPage ] = useState([0, 0]);
  const paginate = direction => setPage([page + direction, direction]);
  
  // https://popmotion.io/popcorn/api/wrap/
  const index = wrap(0, COLORS.length,page);

  return (
    <div style={{ position: "relative", height: 400 }}>
      <AnimatePresence>
        <motion.div
          key={page} // The Animation Flow starts with key changes
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1} // values are between 0 and 1
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400) {
              paginate(-1);
            } else  if (offset.x < -400) {
              paginate(1);
            }
          }}
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            height: 400,
            width: "100%",
            background: COLORS[index],
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
