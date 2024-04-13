import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/chat";
import io from "socket.io-client";
import Participants from "./participants";

const socket = io.connect("http://localhost:8002"); // Connect to the Socket.IO server

const MessageSection = () => {
  const { selectedRoom, participantsVisible, setParticipantsVisible } =
    useContext(ChatContext);
  const [message, setMessage] = useState(""); // State to store the message
  const [messageReceived, setMessageReceived] = useState(""); // State to store received messages

  // Function to send a message to the server
  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", { message, room: selectedRoom.name });
      setMessage(""); // Clear the input field after sending the message
    }
  };

  // Effect to listen for incoming messages from the server
  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message); // Update state with received message
    });

    return () => {
      socket.off("received_message"); // Clean up event listener
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Function to toggle visibility of participants
  const toggleParticipantsVisibility = () => {
    setParticipantsVisible(!participantsVisible);
  };

  return (
    <div className="flex-none w-3/4 bg-gray-100 p-4">
      <div className="h-full flex flex-col justify-between">
        <h2 className="text-lg font-bold mb-4">Message Section</h2>
        {selectedRoom ? (
          <div
            className="mb-4 bg-gray-200 py-2 rounded-md text-center cursor-pointer"
            onClick={toggleParticipantsVisibility}
          >
            <h3 className="text-xl font-semibold">{selectedRoom.name}</h3>
            {participantsVisible && (
              <Participants participants={selectedRoom.participants} />
            )}
          </div>
        ) : (
          <p className="text-gray-500">No room selected</p>
        )}
        <div className="h-full flex flex-col justify-end">
          {/* Add your message list or conversation display here */}
          <p>{messageReceived}</p> {/* Display received message */}
        </div>
        {/* Message input field and send button */}
        <div className="p-2 bg-white rounded-md shadow-md flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={message} // Bind input value to state
            onChange={(e) => setMessage(e.target.value)} // Update state on change
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
