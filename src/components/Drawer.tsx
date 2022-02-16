import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface DrawerProps {
  text?: boolean;
}

const DrawerMenu = styled.div<DrawerProps>`
  z-index: 6;
  border: 1px solid red;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1.88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  transition: 0.3s;
  height: 100vh;
  width: 20vw;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: -20vw;
`;

const DrawerMenuItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`;

interface Props {
  closeDrawer: Function;
  drawerXPos: string;
}

function Drawer({ closeDrawer, drawerXPos }: Props): ReactElement {
  const navigate = useNavigate();
  return (
    <DrawerMenu id="drawerMenu" style={{ left: drawerXPos }}>
      <DrawerMenuItem onClick={() => { navigate('/account'); closeDrawer(false); }}>Account</DrawerMenuItem>
      <DrawerMenuItem onClick={() => { navigate('/trips'); closeDrawer(false); }}>Trips</DrawerMenuItem>
      <DrawerMenuItem onClick={() => { navigate('/builder'); closeDrawer(false); }}>Builder</DrawerMenuItem>
    </DrawerMenu>
  );
}

export default Drawer;
