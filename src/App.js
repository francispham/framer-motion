import React, { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";
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

  return (
    <motion.div 
      initial={{ 
        opacity: 0,
        x: 100,
        y: 100,
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{ 
        duration: 2
      }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
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
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="purp" />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="blue" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
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
