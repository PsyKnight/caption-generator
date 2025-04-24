import { useCardContext } from "../context/Context.tsx";
import Card from "./Card.tsx";

const Cards = () => {
  const { cardData } = useCardContext();
  return (
    <section className="card-wrap">
      {cardData?.map((card, index) => (
        <Card key={`${card.topic}-${index}`} {...card} />
      ))}
    </section>
  );
};

export default Cards;
