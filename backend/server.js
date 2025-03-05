const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables

const geminiRoutes = require("./routes/gemini");
const homeRoutes = require("./routes/Home");
const interviewRoutes = require("./routes/Interview");

const app = express();
app.use(express.json());
app.use(cors());

console.log("✅ Registering routes...");
app.use("/api/gemini", geminiRoutes);
app.use("/home", homeRoutes);
app.use("/interview", interviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
