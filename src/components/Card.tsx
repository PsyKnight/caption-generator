interface Props {
  platform: "";
  topic: "";
  style: "";
}

const Card = (props: Props) => {
  const { platform, topic, style } = props;
  return (
    <section className="flex flex-col default-border h-min pl-8 py-4 max-w-[calc(48rem-24px)]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="opacity-50 text-xs">Platform</p>
          <p className="py-2 px-4 bg-violet-300/60 rounded-full font-roboto-slab-500">
            {platform}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="opacity-50 text-xs">Writing Style</p>
          <p className="py-2 px-4 bg-green-300/60 rounded-full font-roboto-slab-500">
            {style}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <span className="font-roboto-slab-500">Topic:</span> {topic}
      </div>
      <div className="my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
        debitis, earum eius in itaque iure, laudantium maiores necessitatibus
        nemo quam qui tempora velit. Atque dolores esse illum quos voluptatem.
      </div>
    </section>
  );
};

export default Card;
