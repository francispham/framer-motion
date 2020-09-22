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
  const index = 0;

  return (
    <div>
      <AnimatePresence>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1} // values are between 0 and 1
          onDragEnd={(e, { offset, velocity }) => {
            console.log('offset.x:', offset.x);

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
