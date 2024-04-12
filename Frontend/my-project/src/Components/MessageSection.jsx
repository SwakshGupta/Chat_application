import React, { useContext } from "react";
import { ChatContext } from "../context/chat";

const MessageSection = () => {
  const {
    selectedRoom,
    participantsVisible,
    setParticipantsVisible,
  } = useContext(ChatContext); // extracting all the stuff from the context api

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
