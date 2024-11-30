"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the drawer context state
interface DrawerContextState {
  open: boolean;
  toggleDrawer: (newState: boolean) => void;
}

// Create the context with default values
const DrawerContext = createContext<DrawerContextState>({
  open: false,
  toggleDrawer: () => {},
});

// Create a provider component
export const DrawerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  // Toggle function to change the open state
  const toggleDrawer = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

// Custom hook to use the Drawer context
export const useDrawerContext = () => useContext(DrawerContext);
