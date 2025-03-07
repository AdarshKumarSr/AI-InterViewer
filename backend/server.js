const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const chatRoutes = require("./routes/chatRoute");
const homeRoutes = require("./routes/Home");
const interviewRoutes = require("./routes/Interview");

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

console.log("✅ Registering routes...");
app.use("/api/chat", chatRoutes);
console.log("✅ /api/chat route registered");

app.use("/home", homeRoutes);
app.use("/interview", interviewRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
