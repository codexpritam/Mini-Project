// routes/ai.js
const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const router = express.Router();

// Gemini Initialize kiya
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/ai-insights', async (req, res) => {
  try {
    // Check karein ki kya backend tak API key pahonch rahi hai
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "Backend Par API Key Missing Hai!", 
        debugMessage: "Please add GEMINI_API_KEY in Render Environment Variables." 
      });
    }

    const { totalBudget, monthlySpent, categories, rawExpenses } = req.body;

    const prompt = `
      You are a smart financial advisor AI. Analyze this user's budget and monthly expense data:
      - Total Monthly Budget: ₹${totalBudget}
      - Total Spent This Month: ₹${monthlySpent}
      - Breakdown by Categories: ${JSON.stringify(categories)}
      - Detailed Expenses List: ${JSON.stringify(rawExpenses ? rawExpenses.slice(0, 15) : [])}

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

    // Response parse karke bhejenge
    return res.json(JSON.parse(response.text));

  } catch (error) {
    console.error("AI Error Details:", error);
    
    // Agar Gemini fail hota hai, toh exact error message frontend ko bhej do taaki hum dekh sakein!
    return res.status(500).json({ 
      error: "Gemini API call ya parsing fail ho gayi.", 
      details: error.message || error 
    });
  }
});

module.exports = router;