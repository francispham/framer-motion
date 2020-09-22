import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

const Slideshow = () => {
  const [ [page, direction], setPage ] = useState([0, 0]);
  const paginate = direction => setPage([page + direction, direction]);
  
  const index = page;

  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={page}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1} // values are between 0 and 1
          onDragEnd={(e, { offset, velocity }) => {
            console.log('offset.x:', offset.x);
            if (offset.x > 400) {
              paginate(-1);
            } else  if (offset.x < -400) {
              paginate(1);
            }

          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index]
          }}

          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
