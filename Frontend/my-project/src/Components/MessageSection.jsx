import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageSection = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/messages")
      .then((response) => {
        console.log(response.data); // Add this line to inspect response.data
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <ul className="space-y-4">
        {messages.map((message) => (
          <li key={message._id} className="bg-gray-100 p-4 rounded-md">
            <strong className="block">Sender:</strong> {message.sender}
            <br />
            <span className="block">Content: {message.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageSection;
