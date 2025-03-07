// const express = require("express");
// const { register, login } = require("../controllers/authController");
// const { hashpassword } = require("../middlewares/authentication");

// const router = express.Router();

// router.post("/register", hashpassword, register);
// router.post("/login", login);

// module.exports = router;
const express = require("express");
const { register, login } = require("../controllers/authController");
const { hashPassword } = require("../middlewares/Hashpassword"); // ✅ Fix the function name

const router = express.Router();

router.post("/register", hashPassword, register);
router.post("/login", login);

module.exports = router;
