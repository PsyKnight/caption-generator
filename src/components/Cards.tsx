import { useCardContext } from "../context/Context.tsx";
import Card from "./Card.tsx";

const Cards = () => {
  const { cardData } = useCardContext();
  return (
    <section className="w-[48rem] h-[42rem] flex flex-col gap-4 my-4 py-2 overflow-y-auto">
      {cardData?.map((card, index) => (
        <Card key={`${card.topic}-${index}`} {...card} />
      ))}
    </section>
  );
};

export default Cards;
