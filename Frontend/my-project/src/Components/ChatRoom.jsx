import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatRoom = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    axios
      .get("/api/chatrooms")
      .then((response) => {
        setChatRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching chat rooms:", error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Chat Rooms</h2>
      <ul className="space-y-4">
        {chatRooms.map((chatRoom) => (
          <li key={chatRoom._id} className="bg-gray-100 p-4 rounded-md">
            <strong className="block">Name:</strong> {chatRoom.name}
            <br />
            <span className="block">
              Participants: {chatRoom.participants.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoom;
