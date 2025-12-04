import { GoogleGenAI, Type } from "@google/genai";
import { Book } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getBookRecommendations = async (prompt: string): Promise<Book[]> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your configuration.");
  }

  const systemInstruction = `
    You are an expert bookseller and literary concierge for a high-end bookstore called BAM (Books-A-Million).
    Your goal is to recommend books based on the user's input.
    The input might be a vague mood, a specific genre, a comparison to other books, or a gift idea.
    
    Return a list of 4-8 distinct books that perfectly match the request.
    Ensure a mix of modern bestsellers and hidden gems.
    
    For the 'coverColor' field, provide a hex code that represents the dominant vibe or color of the book's real cover.
    For 'price', provide a realistic retail price formatted like '$24.99'.
    For 'rating', provide a number between 3.5 and 5.0.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              author: { type: Type.STRING },
              description: { type: Type.STRING },
              genre: { type: Type.STRING },
              rating: { type: Type.NUMBER },
              price: { type: Type.STRING },
              isBestSeller: { type: Type.BOOLEAN },
              coverColor: { type: Type.STRING },
            },
            required: ["title", "author", "description", "genre", "rating", "price", "coverColor"],
          },
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as Book[];
    }
    return [];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to fetch recommendations. Please try again.");
  }
};
