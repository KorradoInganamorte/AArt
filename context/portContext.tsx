"use client"

const PORT = "http://localhost:1337"

import { createContext, useContext, useState, ReactNode } from 'react';

type portContextProps = {
  children: ReactNode;
};

type PortContextType = {
    PORT: string
};

const initialPortContext = {
  PORT: "http://localhost:1337",
};

const PortContext = createContext<PortContextType>(initialPortContext);

export function usePort() {
  return useContext(PortContext);
}

export function PortProvider({ children }: portContextProps) {
  const [port, setPort] = useState<string>("http://localhost:1337");

  const value = {
    PORT,
  };

  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}