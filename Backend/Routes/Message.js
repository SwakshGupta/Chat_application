const express = require("express");
const router = express.Router();
const { sendMessage, getAllMessagesInRoom } = require("../controllers/Message");

// Send a message
router.post("/", sendMessage);

// Get all messages in a chat room
router.get("/:roomId", getAllMessagesInRoom);

module.exports = router;
