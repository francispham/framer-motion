import React from 'react'
import styled from 'styled-components';

import { Button } from './Elements';

const Nav = ({ setNavOpen }) => {
  return (
    <MenuNav>
      <Button onClick={() => setNavOpen(false)}>Close</Button>
      <ul>
        <li>
          <a href="foo">ONE</a>
        </li>
        <li>
          <a href="foo">TWO</a>
        </li>
        <li>
          <a href="foo">THREE</a>
        </li>
        <li>
          <a href="foo">FOUR</a>
        </li>
      </ul>
    </MenuNav>
  )
};

const MenuNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    a {
      color: var(--white);
    }
  }
`;

export default Nav;
