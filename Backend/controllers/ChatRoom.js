const ChatRoom = require("../models/ChatRoom");

exports.createChatRoom = async (req, res) => {
  try {
    const { name, participants } = req.body;

    // Create a new chat room
    const newChatRoom = new ChatRoom({ name, participants });
    await newChatRoom.save();

    res.status(201).json({ message: "Chat room created successfully" });
  } catch (error) {
    console.error("Error creating chat room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllChatRooms = async (req, res) => {
  try {
    // Fetch all chat rooms
    const chatRooms = await ChatRoom.find();

    res.status(200).json(chatRooms); // it will show all the chatrooms available
  } catch (error) {
    console.error("Error fetching chat rooms:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getChatRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;

    // Retrieve a chat room by ID
    const chatRoom = await ChatRoom.findById(roomId);
    if (!chatRoom) {
      return res.status(404).json({ message: "Chat room not found" });
    }

    res.status(200).json(chatRoom);
  } catch (error) {
    console.error("Error fetching chat room by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
