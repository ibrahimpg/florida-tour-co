import React, { ReactNode, useState, createContext } from 'react';

type AlertContextType = {
  alertActive: boolean;
  alertText: string;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);
export const UpdateAlertContext = createContext<Function | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function AlertProvider({ children }: Props) {
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState('');

  const setAlert = async (inputs: string) => {
    setAlertActive(true);
    setAlertText(inputs);
    setTimeout(() => {
      setAlertActive(false);
      setAlertText('');
    }, 3000);
  };

  return (
    <UpdateAlertContext.Provider value={setAlert}>
      <AlertContext.Provider value={{ alertActive, alertText }}>
        {children}
      </AlertContext.Provider>
    </UpdateAlertContext.Provider>
  );
}
