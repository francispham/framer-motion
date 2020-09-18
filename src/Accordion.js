import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0, height: 0 }
};

const Accordion = () => {
  const [ isToggled, setToggle ] = useState(false);
  return (
    <AnimatePresence>
      <h2 role="button" onClick={() => setToggle(prevState => !prevState)}>
        Accordion Title (Click me!)
      </h2>
      {isToggled && (
        <motion.div
          variants={variants}
          style={{ overflow: "hidden" }}
          initial="close"
          animate="open"
          exit="close"
        >
          <p>
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
            This is something inside the Accordion
          </p>
          <p>This is something inside the Accordion</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;