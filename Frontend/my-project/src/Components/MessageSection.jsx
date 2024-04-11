import React from "react";

const MessageSection = () => {
  return (
    <div className="flex-none w-3/4 bg-gray-100 p-4">
      <div className="h-full flex flex-col justify-between">
        <h2 className="text-lg font-bold mb-4">Message Section</h2>
        {/* Your message section content goes here */}
        <div className="h-full flex flex-col justify-end">
          {/* Add your message list or conversation display here */}
        </div>
        {/* Message input field and send button */}
        <div className="p-2 bg-white rounded-md shadow-md flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
