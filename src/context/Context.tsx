import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FormInputType } from "../../types";

interface FormContextType {
  formData: FormInputType[] | undefined;
  setFormData: Dispatch<SetStateAction<FormInputType[] | undefined>>;
}

// Only the FormContextType and its implementation in FormContext is generated using GitHub Copilot, the rest is self-made.

const FormContext = createContext<FormContextType>({
  formData: undefined,
  setFormData: () => undefined,
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormInputType[]>();

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
