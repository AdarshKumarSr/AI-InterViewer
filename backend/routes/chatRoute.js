const express = require("express");
const { chatWithAI } = require("../controllers/chatController");
const { authenticateUser } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route debugging
router.post("/", authenticateUser, async (req, res, next) => {
  console.log("📩 [DEBUG] /api/chat POST request received.");
  try {
    await chatWithAI(req, res, next);
  } catch (error) {
    console.error("❌ Error handling /api/chat:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
