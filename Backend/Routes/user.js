const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  deleteUser,
  getAllUsers,
} = require("../controllers/User");

// All routes

router.post("/add", registerUser);

router.post("/login", loginUser);

router.get("/get/:id", getUserProfile);

router.post("/delete/:id", deleteUser);

router.get("/getall", getAllUsers);

module.exports = router;
