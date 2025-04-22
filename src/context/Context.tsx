import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CardType } from "../../types";

interface CardContext {
  cardData: CardType[] | undefined;
  setCardData: Dispatch<SetStateAction<CardType[] | undefined>>;
}

// The interface CardContext and its implementation in CardContext is generated using GitHub Copilot, the rest is self-made.

const CardContext = createContext<CardContext>({
  cardData: undefined,
  setCardData: () => undefined,
});

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardData, setCardData] = useState<CardType[]>();

  return (
    <CardContext.Provider
      value={{ cardData: cardData, setCardData: setCardData }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within CardProvider");
  }
  return context;
};
