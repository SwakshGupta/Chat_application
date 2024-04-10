const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Represents the name of the chatroom
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId, // an array and their mongoose id will be taken from the user model
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;

// .....................................................................

// The purpose of these schemas is to provide a structured way to store and retrieve data related to chat rooms and messages in the chat application
