import React, { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Nav from "./Nav";
import NavTwo from "./NavTwo";
import Menu from "./Menu";
import Modal from "./Modal";
import Accordion from "./Accordion";
import { Card, CardGrid, Container, Header, Button } from "./Elements";

import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import comingsoon from "./coming-soon.png";

/*
* * NOTE:
1. By default all transforms are 3d.
2. You should only animate transforms and opacities.
3. Translate Shortcuts: x, y , z.
4. Scale: scale, scaleX, scaleY
5. Rotate: rotate, rotateX, rotateY, rotateZ.
6. Skew: skew, skewX, skewY.
*/ 

function App() {
  const [ value, setValue ] = useState(0);
  const [ isToggled, setToggle ] = useState(1);
  const [ isOpened, setOpen ] = useState(false);
  const [ isNavOpened, setNavOpen ] = useState(false);
  const [ isNavTwoOpened, setNavTwoOpen ] = useState(false);

  return (
    <motion.div
      animate={{ opacity: [1, 0, 1] }}
      transition={{ 
        duration: 1,
        time: [0, 0.4, 0.6]
      }}
    >
      <Header>
        <div>
          <Menu onClick={() => setNavOpen(true)} />
          <h1>Nav</h1>
        </div>
        <div>
          <h1>NavTwo</h1>
          <Menu onClick={() => setNavTwoOpen(true)} />
        </div>
      </Header>
      <Nav isNavOpened={isNavOpened} setNavOpen={setNavOpen} />
      <NavTwo isNavOpened={isNavTwoOpened} setNavOpen={setNavTwoOpen} />
      <Container>
        <motion.h2
          animate={{ 
            opacity: isToggled,
            x: value * 5 + "px" 
          }}
        >Super Cool</motion.h2>
        <Button onClick={() => setToggle(preValue => preValue ? 0 : 1)}>Toggle</Button>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <input 
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Modal isOpened={isOpened} setOpen = {setOpen}>
          <Card style={{ background: "var(--white)", color: "var(--soon)" }}>
            <h3>Modal</h3>
            <img src={comingsoon} alt="purp" />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            // https://www.framer.com/api/motion/gestures/#hover
            whileHover={{ scale: [1, .8, 1.2, 1.1] }}
            onHoverEnd={() => console.log("Hover Has Ended")}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="purp" />
          </Card>
          <Card 
            // https://www.framer.com/api/motion/gestures/#tap 
            whileTap={{ scale: 0.8 }}
            // https://www.framer.com/api/motion/gestures/#drag
            drag
            style={{ background: "var(--blue)" }}
          >
            <h3>Some card</h3>
            <img src={blue} alt="blue" />
          </Card>
          <Card
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0
            }}
            style={{ background: "var(--black)" }}
          >
            <h3>Some card</h3>
            <img src={black} alt="black" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="green" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
