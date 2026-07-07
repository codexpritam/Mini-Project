const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const router = express.Router();

// Gemini Initialize kiya (Ensure karein aapke .env mein GEMINI_API_KEY ho)
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

// CommonJS export use karein jo aapke server file se match kare
module.exports = router;