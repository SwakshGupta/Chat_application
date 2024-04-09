const Message = require("../models/message.model");

exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, content, chatRoom } = req.body;

    // Create a new message
    const newMessage = new Message({ sender, receiver, content, chatRoom });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllMessagesInRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    // Fetch all messages in a chat room
    const messages = await Message.find({ chatRoom: roomId });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages in room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
