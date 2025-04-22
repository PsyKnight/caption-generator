import { createContext, ReactNode, useContext, useState } from "react";

interface FormContextType {
  formData: {
    platform: string;
    topic: string;
    style: string;
  };
  setFormData: (data: {
    platform: string;
    topic: string;
    style: string;
  }) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({
    platform: "",
    topic: "",
    style: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
};
