import { toTitleCase } from "../utils/format-text.ts";
import { CardType } from "../../types";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useCardContext } from "../context/Context.tsx";

const Card = (props: CardType) => {
  const { setCardData } = useCardContext();
  const { platform, topic, style, caption } = props;

  const handleDelete = () => {
    setCardData((prevState) =>
      prevState?.filter(
        (card) =>
          !(
            card.platform === platform &&
            card.topic === topic &&
            card.style === style &&
            card.caption === caption
          ),
      ),
    );
  };

  return (
    <section className="card">
      <button className="cursor-pointer" onClick={() => handleDelete()}>
        <IoMdCloseCircleOutline className="top-4 right-4 absolute size-6" />
      </button>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="opacity-50 text-xs">Platform</p>
          <p className="py-2 px-4 bg-violet-300/60 rounded-full font-roboto-slab-500">
            {toTitleCase(platform)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="opacity-50 text-xs">Writing Style</p>
          <p className="py-2 px-4 bg-green-300/60 rounded-full font-roboto-slab-500">
            {toTitleCase(style)}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <span className="font-roboto-slab-500">Topic:</span> {topic}
      </div>
      <div className="my-2">{caption}</div>
    </section>
  );
};

export default Card;
