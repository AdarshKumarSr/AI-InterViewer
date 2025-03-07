const axios = require("axios");

const generateResponse = async (question) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: question }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return (
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response available."
    );
  } catch (error) {
    console.error("Gemini API Error:", error?.response?.data || error.message);
    throw new Error("Something went wrong with Gemini API!");
  }
};

module.exports = { generateResponse };
