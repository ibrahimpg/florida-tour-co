import React, { useState } from 'react';
import AppBar from './AppBar';
import Overlay from './Overlay';
import Drawer from './Drawer';

function Navigation() {
  const currentWidth = window.innerWidth;
  let unopenedPosition: string;

  if (currentWidth > 735) {
    unopenedPosition = '-20vw';
  } else {
    unopenedPosition = '-70vw';
  }

  const [drawerXPos, setDrawerXPos] = useState<string>(unopenedPosition);
  const [overlayDisplay, setOverlayDisplay] = useState<string>('none');

  console.log(currentWidth);

  return (
    <>
      <Overlay
        overlayDisplay={overlayDisplay}
        closeOverlay={() => { setDrawerXPos(unopenedPosition); setOverlayDisplay('none'); }}
      />
      <Drawer
        drawerXPos={drawerXPos}
        closeDrawer={() => { setDrawerXPos(unopenedPosition); setOverlayDisplay('none'); }}
      />
      <AppBar openDrawer={() => { setDrawerXPos('0'); setOverlayDisplay('block'); }} />
    </>
  );
}

export default Navigation;
