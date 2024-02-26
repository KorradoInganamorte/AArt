"use client"

import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

type QualityContextProps = {
  children: ReactNode;
};

type QualityContextType = {
    currentQuality: string
    setCurrentQuality: Dispatch<SetStateAction<string>>
};

const initialQualityContext = {
    currentQuality: "720",
  setCurrentQuality: (value: SetStateAction<string>) => {}
};

const QualityContext = createContext<QualityContextType>(initialQualityContext);

export function useQuality() {
  return useContext(QualityContext);
}

export function QualityProvider({ children }: QualityContextProps) {
  const [currentQuality, setCurrentQuality] = useState<string>("720")

  const value = {
    currentQuality,
    setCurrentQuality
  };

  return <QualityContext.Provider value={value}>{children}</QualityContext.Provider>;
}