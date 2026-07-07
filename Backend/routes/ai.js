import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

// Gemini Initialize kiya
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/ai-insights', async (req, res) => {
  try {
    const { totalBudget, monthlySpent, categories, rawExpenses } = req.body;

    const prompt = `
      You are a smart financial advisor AI. Analyze this user's budget and monthly expense data:
      - Total Monthly Budget: ₹${totalBudget}
      - Total Spent This Month: ₹${monthlySpent}
      - Breakdown by Categories: ${JSON.stringify(categories)}
      - Detailed Expenses List: ${JSON.stringify(rawExpenses.slice(0, 15))}

      Provide response strictly in JSON format matching this schema:
      {
        "predicted": 0,
        "topCategory": "category name",
        "saveSuggestion": 0,
        "score": 85,
        "safeDaily": 500,
        "aiAdvice": "A short, actionable, witty 2-line financial advice in Hinglish language based on their spending habits."
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    res.json(JSON.parse(response.text));
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI insight fail ho gaya" });
  }
});

export default router;