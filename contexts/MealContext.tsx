"use client";
import { createContext, useContext, useState, useCallback } from "react";

type MealContextType = {
  refreshMeals: () => void;
  refreshTrigger: number;
};

const MealContext = createContext<MealContextType | undefined>(undefined);

export function MealProvider({ children }: { children: React.ReactNode }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshMeals = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return (
    <MealContext.Provider value={{ refreshMeals, refreshTrigger }}>
      {children}
    </MealContext.Provider>
  );
}

export function useMealContext() {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error("useMealContext must be used within MealProvider");
  }
  return context;
}



