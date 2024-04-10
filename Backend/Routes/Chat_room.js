const express = require("express");
const router = express.Router();

const {
  createChatRoom,
  getAllChatRooms,
  getChatRoomById,
} = require("../controllers/ChatRoom");

router.post("/add", createChatRoom);

router.get("/getall", getAllChatRooms);

router.get("/:roomId", getChatRoomById);

module.exports = router;
