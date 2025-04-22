import { FormEvent, useState } from "react";
import { RxMagicWand } from "react-icons/rx";
import { FormInputType } from "../../types";
import { useFormContext } from "../context/Context.tsx";

const Input = () => {
  const { formData, setFormData } = useFormContext();
  const [formInput, setFormInput] = useState<FormInputType>({
    platform: "",
    topic: "",
    style: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData((prevState) =>
      prevState ? [...prevState, formInput] : [formInput],
    );
    console.log(formData);
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
          <select
            name="platform"
            className="form-inputs"
            onChange={(e) =>
              setFormInput((prevState) => ({
                ...prevState,
                platform: e.target.value,
              }))
            }
            required
          >
            <option value="">Select</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="x">X</option>
            <option value="facebook">Facebook</option>
            <option value="youtube">Youtube</option>
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
            onChange={(e) =>
              setFormInput((prevState) => ({
                ...prevState,
                topic: e.target.value,
              }))
            }
            value={formInput.topic}
            placeholder="Course completion..."
            required
          />
        </div>
        <div className="form-fields">
          <label htmlFor="style">Writing Style</label>
          <select
            name="style"
            className="form-inputs"
            onChange={(e) =>
              setFormInput((prevState) => ({
                ...prevState,
                style: e.target.value,
              }))
            }
            required
          >
            <option value="">Select</option>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="creative">Creative</option>
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
