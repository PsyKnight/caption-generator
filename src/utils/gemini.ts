import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMNINI_API_KEY);

const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

const getCaption = async ({
  platform,
  topic,
  style,
}: {
  platform: string;
  topic: string;
  style: string;
}) => {
  const prompt = `Generate a caption for the platform '${platform}'. The topic is "${topic}". Write the caption in a ${style} way. Only write one caption. Do not write anything other than the caption. The caption should be not be too small.`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
};

export default getCaption;
