const User = require("../models/user");
const { generateResponse } = require("../services/geminiService");

const chatWithAI = async (req, res) => {
  try {
    console.log("📩 [DEBUG] /api/chat POST request received.");

    const { question } = req.body;
    const userId = req.user.id; // Extracted from authenticated user

    if (!question) {
      console.log("❌ Missing question in request.");
      return res.status(400).json({ error: "Question is required" });
    }

    // Get AI-generated response
    const response = await generateResponse(question);

    if (!response) {
      console.log("❌ AI response is empty.");
      return res.status(500).json({ error: "Failed to generate response" });
    }

    // Store conversation in user's chat history
    const user = await User.findById(userId);
    if (!user) {
      console.log("❌ User not found.");
      return res.status(404).json({ error: "User not found" });
    }

    user.chatHistory.push({ question, response }); // ✅ Corrected key
    await user.save();

    console.log("✅ Chat saved successfully.");
    res.json({ response });

  } catch (error) {
    console.error("❌ Chat Error:", error.message);
    res.status(500).json({ error: "Failed to process AI chat" });
  }
};

module.exports = { chatWithAI };
