import React, { ReactElement } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  z-index: 20;
`;

const AlertBanner = styled.div`
  width: 200px;
  height: 50px;
  background-color: hsl(0, 59%, 54%);
  color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  text: String;
}

function Alert({ text }: Props): ReactElement {
  return (
    <AlertContainer>
      <AlertBanner>
        {text}
      </AlertBanner>
    </AlertContainer>
  );
}

export default Alert;
