import { useFormContext } from "../context/Context.tsx";

const Cards = () => {
  const { formData } = useFormContext();
  return (
    <section className="w-[48rem] h-[42rem] flex flex-col gap-4 my-4 py-2 overflow-y-scroll"></section>
  );
};

export default Cards;
