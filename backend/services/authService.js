const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (name, email, password) => {
    let user = await User.findOne({ email });
    if (user) throw new Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    return { id: user._id, name: user.name, email: user.email };
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return { token, user: { id: user._id, name: user.name, email: user.email } };
};

module.exports = { registerUser, loginUser };
