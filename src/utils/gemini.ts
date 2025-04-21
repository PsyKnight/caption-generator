import {GoogleGenerativeAI} from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMNINI_API_KEY);

const model = ai.getGenerativeModel({model: "gemini-1.5-flash"});

const getGeminiResponse = (prompt) => {

}