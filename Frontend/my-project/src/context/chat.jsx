// chatContext.js

import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = (props) => {
  const [room, setRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null); // through this we will show the the room on the top of message component
  const [participantsVisible, setParticipantsVisible] = useState(false); // Add state for participants visibility

  return (
    <ChatContext.Provider
      value={{
        room,
        setRoom,
        selectedRoom,
        setSelectedRoom,
        participantsVisible,
        setParticipantsVisible,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

// here we  have wrap our children component inside the context so that they can use the context api
