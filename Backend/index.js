const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const chatRoom = require("./Routes/Chat_room");
const Message = require("./Routes/Message");
const User = require("./Routes/user");

const app = express();
const PORT = 8002;
const URI = "mongodb://127.0.0.1:27017/Chat_app";

// middlewares

app.use(cors());
app.use(express.json());

// database
mongoose
  .connect(URI)
  .then(() => console.log("Database has been connected to the server"))
  .catch((err) => console.error("Error connecting the database", err));

// Routes

app.use("/api/user", User);
app.use("/api/message", Message);
app.use("/api/chatRoom", chatRoom);

app.listen(PORT, () => console.log(`server has been started at port ${PORT}`));
