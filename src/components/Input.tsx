import { FormEvent } from "react";
import { RxMagicWand } from "react-icons/rx";

interface Props {}

const Input = (props: Props) => {
  const {} = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const platform = form.get("platform");
    console.log(platform);
  };

  return (
    <form
      className="m-4 default-border shadow-sm flex flex-col min-w-[36rem] px-14 py-16 h-[42rem]"
      onSubmit={handleSubmit}
    >
      <p className="text-4xl font-bold tracking-wide mb-10 flex flex-col items-center justify-center">
        Caption Generator
      </p>
      <div className="flex flex-col text-lg min-w-[20rem] gap-6">
        <div className="form-fields">
          <label htmlFor="platform">Select a Platform</label>
          <select name="platform" className="form-inputs">
            <option value="">Select</option>
            <option value="instagran">Instagram</option>
            <option value="x">X</option>
            <option value="facebook">Facebook</option>
            <option value="youtube">Youtube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="reddit">Reddit</option>
            <option value="github">Github</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="form-fields">
          <label htmlFor="topic">Tell us the Topic/Detail of the post</label>
          <input
            name="topic"
            className="form-inputs"
            placeholder="Course completion..."
          />
        </div>
        <div className="form-fields">
          <label htmlFor="style">Writing Style</label>
          <select name="style" className="form-inputs">
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-violet-800 p-4 rounded-lg mt-12 text-white flex items-center justify-center cursor-pointer gap-3"
      >
        <RxMagicWand className="size-6" />
        Inspire Me
      </button>
    </form>
  );
};

export default Input;
