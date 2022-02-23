import React, { useContext } from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navigation from './components/Navigation';
import Account from './pages/Account';
import Trips from './pages/Trips';
import Builder from './pages/Builder';
import Alert from './components/Alert';
import { AlertContext } from './context/AlertContext';

function App() {
  const { alertActive, alertText } = useContext(AlertContext)!;

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Account />} />
            <Route path="account" element={<Account />} />
            <Route path="trips" element={<Trips />} />
            <Route path="builder" element={<Builder />} />
            <Route path="*" element={<Account />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      <Outlet />
      {alertActive && <Alert text={alertText} />}
    </>
  );
}

export default App;
