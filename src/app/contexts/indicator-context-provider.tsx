"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface IndicatorContextType {
  indicator: number;
  setIndicator: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
const IndicatorContext = createContext<IndicatorContextType | undefined>(
  undefined
);

// Create a custom hook to use the IndicatorContext
export const useIndicator = () => {
  const context = useContext(IndicatorContext);
  if (!context) {
    throw new Error("useIndicator must be used within an IndicatorProvider");
  }
  return context;
};

// Create the provider component
export const IndicatorProvider = ({
  children,
  cartLength,
}: {
  children: ReactNode;
  cartLength: number;
}) => {
  const [indicator, setIndicator] = useState<number>(cartLength);

  return (
    <IndicatorContext.Provider value={{ indicator, setIndicator }}>
      {children}
    </IndicatorContext.Provider>
  );
};
