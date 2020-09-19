import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--black);
  padding: 20px;
  color: white;
  div {
    display: inherit;
    > svg {
      margin: 0 10px;
    }
    > * {
      margin: 0;
    }
    h1 {
      font-size: 1rem;
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