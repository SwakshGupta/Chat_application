const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const chatRoom = require("./Routes/Chat_room");
const Message = require("./Routes/Message");
const User = require("./Routes/user");

const app = express();
const PORT = 8002;
const URI = "mongodb://127.0.0.1:27017/Chat_app";

// Create an HTTP server instance
const server = http.createServer(app);

// Create a new instance of the Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175",
    methods: ["GET", "POST"],
  },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database:", err));

// Routes
app.use("/api/user", User);
app.use("/api/message", Message);
app.use("/api/chatRoom", chatRoom);

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle joining room
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  });

  // Handle sending messages
  socket.on("send_message", ({ message, room }) => {
    io.to(room).emit("received_message", { message, room }); // Broadcast the message to all clients in the room
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server has been started at port ${PORT}`);
});
