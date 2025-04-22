import { toTitleCase } from "../utils/format-text.ts";
import { CardType } from "../../types";

const Card = (props: CardType) => {
  const { platform, topic, style, caption } = props;
  return (
    <section className="flex flex-col default-border h-min pl-8 py-4 max-w-[calc(48rem-24px)]">
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
