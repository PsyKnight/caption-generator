import Card from "./Card.tsx";

const Cards = () => {
  return (
    <section className="w-[48rem] h-[42rem] flex flex-col gap-4 my-4 py-2 overflow-y-scroll">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Cards;
