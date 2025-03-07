const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chatHistory: [
        {
            question: { type: String, required: true },
            response: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

// 🔑 Compare entered password with stored hash
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
