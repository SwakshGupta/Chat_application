// Sidebar.js

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ChatContext } from "../context/chat";

const Sidebar = () => {
  const { room, setRoom, setSelectedRoom } = useContext(ChatContext); // Include setSelectedRoom from the context
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/chatRoom/getall")
      .then((response) => {
        setRoom(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleAddChatRoom = () => {
    axios
      .post("http://localhost:8002/api/chatRoom/add", {
        // Provide necessary data for adding a chat room, if required
      })
      .then((response) => {
        // Handle successful addition of chat room
        console.log("Chat room added successfully:", response.data);
        setRoom([...room, response.data]);
      })
      .catch((error) => {
        // Handle error while adding chat room
        console.error("Error adding chat room:", error);
        // Display error message if needed
      });
  };

  const handleRoomClick = (selectedRoom) => {
    // Update selected room state when a room is clicked and we will use this top display in on our message page
    setSelectedRoom(selectedRoom);
    console.log(selectedRoom);
  };

  return (
    <div className="sidebar bg-gray-200 w-64 p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">ChatRooms</h2>
        <button
          onClick={handleAddChatRoom}
          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400"
        >
          Add Rooms +
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="space-y-2">
          {Array.isArray(room) &&
            room.map((room) => (
              <li
                key={room._id}
                className="cursor-pointer bg-white p-2 rounded-md shadow-md hover:bg-gray-100 flex items-center"
                onClick={() => handleRoomClick(room)} // Call handleRoomClick when a room is clicked
              >
                <span>{room.name}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
