"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteFormContextType {
  isOpen: boolean;
  preselectedService: string;
  openQuoteForm: (service?: string) => void;
  closeQuoteForm: () => void;
}

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined);

export function QuoteFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const openQuoteForm = (service: string = "") => {
    setPreselectedService(service);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeQuoteForm = () => {
    setIsOpen(false);
    setPreselectedService("");
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  return (
    <QuoteFormContext.Provider value={{ isOpen, preselectedService, openQuoteForm, closeQuoteForm }}>
      {children}
    </QuoteFormContext.Provider>
  );
}

export function useQuoteForm() {
  const context = useContext(QuoteFormContext);
  if (context === undefined) {
    throw new Error("useQuoteForm must be used within a QuoteFormProvider");
  }
  return context;
}
