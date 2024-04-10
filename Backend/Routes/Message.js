const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessagesInRoom,
  getAllMessages,
  deleteAllMessages,
} = require("../controllers/Message");

// Send a message
router.post("/send", sendMessage);

// Get all messages
router.get("/getall", getAllMessages); // we have to define the get all route before the room id otherwise it is calling the room id first

// Get all messages in a chat room
router.get("/:roomId", getMessagesInRoom);

// Delete all messages
router.post("/deleteall", deleteAllMessages);

module.exports = router;
