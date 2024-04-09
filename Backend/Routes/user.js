const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/User");

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

// User profile route
router.get("/:userId", getUserProfile);

module.exports = router;
