const express = require("express");
const router = express.Router();

const {
  createChatRoom,
  getAllChatRooms,
  getChatRoomById,
} = require("../controllers/ChatRoom");

// Create a new chat room
router.post("/", createChatRoom);

// Get all chat rooms
router.get("/", getAllChatRooms);

// Get a single chat room by ID
router.get("/:roomId", getChatRoomById);

module.exports = router;
