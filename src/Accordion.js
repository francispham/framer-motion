import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Accordion = () => {
  const [ isToggled, setToggle ] = useState(false);
  return (
    <AnimatePresence>
      <h2 role="button" onClick={() => setToggle(prevState => !prevState)}>
        Accordion Title (Click me!)
      </h2>
      {isToggled && (
        <motion.div
          style={{ overflow: "hidden" }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
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