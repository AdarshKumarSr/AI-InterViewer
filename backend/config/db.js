const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        console.log("🌍 Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI); // No extra options needed in Mongoose 6+
        console.log("🔥 MongoDB Connected Successfully!");
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
