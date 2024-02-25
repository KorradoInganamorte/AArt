"use client"

import { createContext, useContext, ReactNode } from 'react';

type PortContextProps = {
  children: ReactNode;
};

type PortContextType = {
    PORT: string
};

let PORT = "http://localhost:1337"

if (process.env.NODE_ENV === 'production') {
  PORT = "https://strapi.animeaart.ru"
} else {
  PORT = "http://localhost:1337"
}

const initialPortContext = {
  PORT,
};

const PortContext = createContext<PortContextType>(initialPortContext);

export function usePort() {
  return useContext(PortContext);
}

export function PortProvider({ children }: PortContextProps) {

  const value = {
    PORT,
  };

  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}