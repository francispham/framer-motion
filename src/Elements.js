import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  background: var(--black);
  padding: 20px;
  div {
    display: inherit;
    > svg {
      margin: 0;
    }
    > * {
      color: white;
      margin: 0 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = styled(motion.div)`
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 4px;
  padding: 10px 40px;
  display: inline-block;
  color: var(--trueBlack);
  text-transform: uppercase;
  background: var(--lightBut);
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
  0 37.5px 75px -5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: var(--strongBut);
  }
`;

export const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  z-index:99;
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