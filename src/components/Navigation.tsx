import React, { useState } from 'react';
import AppBar from './AppBar';
import Overlay from './Overlay';
import Drawer from './Drawer';

function Navigation() {
  const [drawerXPos, setDrawerXPos] = useState<string>('-20vw');
  const [overlayDisplay, setOverlayDisplay] = useState<string>('none');
  // const userStore = useUserStore();
  // const userStoreUpdate = useUserStoreUpdate();
  return (
    <>
      <Overlay
        overlayDisplay={overlayDisplay}
        closeOverlay={() => { setDrawerXPos('-20vw'); setOverlayDisplay('none'); }}
      />
      <Drawer
        drawerXPos={drawerXPos}
        closeDrawer={() => { setDrawerXPos('-20vw'); setOverlayDisplay('none'); }}
      />
      <AppBar openDrawer={() => { setDrawerXPos('0'); setOverlayDisplay('block'); }} />
    </>
  );
}

export default Navigation;
