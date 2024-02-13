"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type portContextProps = {
  children: ReactNode;
};

type PortContextType = {
    PORT: string
};

const PORT = "http://localhost:1337"

const initialPortContext = {
  PORT: "http://localhost:1337",
};

const PortContext = createContext<PortContextType>(initialPortContext);

export function usePort() {
  return useContext(PortContext);
}

export function PortProvider({ children }: portContextProps) {

  const value = {
    PORT,
  };

  return <PortContext.Provider value={value}>{children}</PortContext.Provider>;
}