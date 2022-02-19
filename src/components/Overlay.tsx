import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  width: 100vw;
  height: 100%;
  transition: 0.2s;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
`;

interface Props {
  closeOverlay: Function;
  overlayDisplay: string;
}

function Overlay({ closeOverlay, overlayDisplay }: Props): ReactElement {
  return (
    <Backdrop id="backdrop" style={{ display: overlayDisplay }} onClick={() => closeOverlay()} />
  );
}

export default Overlay;
