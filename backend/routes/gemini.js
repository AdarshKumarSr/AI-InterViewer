const express = require("express");
const axios = require("axios");
require("dotenv").config(); // Load API key from .env

const router = express.Router();

// Route to get AI-generated responses
router.post("/generate", async (req, res) => {
  try {
    const { question } = req.body; // Get question from frontend

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    // Call Gemini API
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: question }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Extract answer from response
    const answer =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response available.";

    res.json({ answer });
  } catch (error) {
    console.error("Gemini API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with Gemini API!" });
  }
});

module.exports = router;
