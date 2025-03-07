const { registerUser, loginUser } = require("../services/authService");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await registerUser(name, email, password);
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await loginUser(email, password);
        res.status(200).json(data);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { register, login };
