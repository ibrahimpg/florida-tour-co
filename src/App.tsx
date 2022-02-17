import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useUserStore, useUserStoreUpdate } from './context/UserContext';
import {
  AppBar, AppBarSection, AppBarHeader, AppBarHamburger,
} from './components/AppBar';
import Button from './components/Button';
import Overlay from './components/Overlay';
import Drawer from './components/Drawer';

function App() {
  const [drawerXPos, setDrawerXPos] = useState<string>('-20vw');
  const [overlayDisplay, setOverlayDisplay] = useState<string>('none');
  const userStore = useUserStore();
  const userStoreUpdate = useUserStoreUpdate();
  return (
    <>
      <div>
        <Overlay
          overlayDisplay={overlayDisplay}
          closeOverlay={() => { setDrawerXPos('-20vw'); setOverlayDisplay('none'); }}
        />
        <Drawer
          drawerXPos={drawerXPos}
          closeDrawer={() => { setDrawerXPos('-20vw'); setOverlayDisplay('none'); }}
        />
        <AppBar>
          <AppBarSection start>
            <AppBarHamburger onClick={() => { setDrawerXPos('0'); setOverlayDisplay('block'); }}>
              ☰
            </AppBarHamburger>
            <AppBarHeader>Florida Tours Trip Builder</AppBarHeader>
          </AppBarSection>
          <AppBarSection end>
            <AppBarHeader>{userStore}</AppBarHeader>
            <Button light>Logout</Button>
          </AppBarSection>
        </AppBar>
      </div>
      <Outlet />
    </>
  );
}

export default App;
