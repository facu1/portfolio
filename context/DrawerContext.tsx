"use client";

import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const DrawerContext = createContext({
  drawerState: false,
  setDrawerState: (_value: boolean) => {},
});

export const DrawerProvider = ({ children }: Props) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <DrawerContext.Provider value={{ drawerState, setDrawerState }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }

  return context;
};

export default DrawerProvider;
