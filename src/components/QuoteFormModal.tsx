"use client";

import { useQuoteForm } from "@/context/QuoteFormContext";
import QuoteForm from "@/components/QuoteForm";

export default function QuoteFormModal() {
  const { isOpen, preselectedService, closeQuoteForm } = useQuoteForm();
  return (
    <QuoteForm 
      isOpen={isOpen} 
      onClose={closeQuoteForm} 
      preselectedService={preselectedService} 
    />
  );
}
