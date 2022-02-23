import React, { ReactNode, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
  username: string;
  token: string;
}

type UpdateUserContextType = {
  login: Function;
  logout: Function;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
export const UpdateUserContext = createContext<UpdateUserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

type Inputs = {
  newUsername: string;
  password: string;
};

export function UserProvider({ children }: Props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const login = async (inputs: Inputs) => {
    const url: string = `${import.meta.env.VITE_API_URL}/api/user/login`;
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(inputs);
    const response = await fetch(url, { method: 'POST', headers, body });
    const jsonRes = await response.json();
    setUsername(jsonRes.username);
    setToken(jsonRes.token);
    navigate('/trips');
  };

  const logout = () => {
    setUsername('');
    setToken('');
    navigate('/');
  };

  return (
    <UpdateUserContext.Provider value={{ login, logout }}>
      <UserContext.Provider value={{ username, token }}>
        {children}
      </UserContext.Provider>
    </UpdateUserContext.Provider>
  );
}
