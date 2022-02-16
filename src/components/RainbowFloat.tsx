import React from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const fadeIn = keyframes`
  from {
    opacity: 1;
    transform: translateY(500px);
  }
  to {
    opacity: 0.5;
    transform: translateY(0);
  }
`;

const DotContainer = styled.div`
  padding: 5px;
  width: 150%;
  height: 110%;
  margin-left: -25%;
  margin-top: -5%;
  position: absolute;
  top: 0;
  overflow: hidden;
  z-index: -1;
  @media only screen and (max-width: 555px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`;

interface DotProps {
  c?: number | string,
  x?: number | string,
  z?: number | string,
  t?: number | string,
  y?: number | string,
  id?: string,
}

const Dot = styled.div<DotProps>`
  position: absolute;
  background-color: ${(props) => `${props.c}`};
  border-radius: 50%;
  left: ${(props) => `${props.x}%`};
  top: 0;
  width: ${(props) => `${props.z}px`};
  height: ${(props) => `${props.z}px`};
  animation: ${fadeIn} infinite;
  animation-duration: ${(props) => `${props.t}s`};
`;

const colorWheel = ['#ff0000', '#ff8000', '#ffff00', '#40ff00', '#00bfff', '#8000ff', '#ff00ff'];

const generateDotProperties = () => {
  const x = Math.floor(Math.random() * 100) + 1;
  const y = Math.floor(Math.random() * 100) + 1;
  const z = Math.floor(Math.random() * 3) + 1;
  const t = Math.floor(Math.random() * 15) + 1;
  const c = colorWheel[Math.floor(Math.random() * 6)];
  const id = uuidv4();
  return [x, y, z, t, c, id];
};

const dotArray: (string | number)[][] = [];

for (let i = 0; i < 80; i += 1) {
  dotArray.push(generateDotProperties());
}

function RainbowFloat() {
  return (
    <DotContainer>
      {dotArray.map((dot) => (
        <Dot x={dot[0]} y={dot[1]} z={dot[2]} t={dot[3]} c={dot[4]} key={dot[5]} />
      ))}
    </DotContainer>
  );
}

export default RainbowFloat;
