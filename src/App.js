import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

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
        <h2>Super Cool</h2>
        <input 
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
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
