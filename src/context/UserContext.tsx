import React, {
  ReactElement, useState, useContext, useCallback,
} from 'react';

const UserContext = React.createContext<string>('ibrahim');
const UserUpdateContext = React.createContext<Function>(() => {});

interface Props {
  children: ReactElement | boolean;
}

function UserProvider({ children }: Props): ReactElement {
  const [username, setUsername] = useState('ibrahim');

  const changeUsername = useCallback((newUsername: string) => {
    setUsername(newUsername);
  }, [setUsername]);

  return (
    <UserContext.Provider value={username}>
      <UserUpdateContext.Provider value={changeUsername}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

function useUserStore() {
  return useContext(UserContext);
}

function useUserStoreUpdate() {
  return useContext(UserUpdateContext);
}

export { UserProvider, useUserStore, useUserStoreUpdate };
