import { FormEvent, useState } from "react";
import { RxMagicWand } from "react-icons/rx";
import { FormInputType } from "../../types";
import getCaption from "../utils/gemini.ts";
import { useCardContext } from "../context/Context.tsx";

const Form = () => {
  const { setCardData } = useCardContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<FormInputType>({
    platform: "",
    topic: "",
    style: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);

      const caption = await getCaption({ ...formInput });

      setCardData((prevState) => [
        ...(prevState || []),
        { ...formInput, caption },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Caption Generator</p>
      <div className="field-wrap">
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
            <option value="other">Other</option>
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

      <button type="submit" className="button" disabled={loading}>
        {loading ? (
          <img src="/loading.svg" alt="loading..." className="size-6" />
        ) : (
          <div className="flex gap-3 text-white">
            <RxMagicWand className="size-6" />
            Inspire Me
          </div>
        )}
      </button>
    </form>
  );
};

export default Form;
