const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
    try {
        if (!req.body.password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        next(); // Proceed to the next middleware or controller
    } catch (error) {
        res.status(500).json({ message: "Error hashing password" });
    }
};

module.exports = { hashPassword };
