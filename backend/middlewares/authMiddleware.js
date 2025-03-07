const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = async (req, res, next) => {
  try {
    console.log("🛠️ [DEBUG] authenticateUser middleware hit.");

    const authHeader = req.header("Authorization");
    console.log("🔑 Raw Authorization header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ No valid token provided.");
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"
    console.log("🔑 Extracted Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", decoded);

    req.user = await User.findById(decoded.id).select("-password");
    console.log("👤 User found:", req.user);

    if (!req.user) {
      console.log("❌ User not found.");
      return res.status(401).json({ error: "User not found." });
    }

    console.log("✅ Authentication successful.");
    next();
  } catch (error) {
    console.error("❌ Authentication Error:", error.message);
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = { authenticateUser };
