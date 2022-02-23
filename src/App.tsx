import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navigation from './components/Navigation';
import Account from './pages/Account';
import Trips from './pages/Trips';
import Builder from './pages/Builder';

function App() {
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
    </>
  );
}

export default App;
