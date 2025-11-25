import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateStrategicBrief = async (companyName: string, industry: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Configuration Error: API Key missing.";

  const prompt = `
    Generate a concise, high-impact strategic brief for a home services company named "${companyName}" operating in the "${industry}" sector.
    
    The brief should focus on the transition from reactive operations to "Agentic Intelligence" and a "Custom Operating System".
    
    Structure:
    1. Current State (The Friction)
    2. The IgniteIQ Opportunity (The Shift)
    3. Three Strategic Pillars (Unify, Predict, Own)
    
    Keep the tone professional, visionary, and sophisticated. Keep it under 200 words.
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Unable to generate brief at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating your brief. Please try again later.";
  }
};