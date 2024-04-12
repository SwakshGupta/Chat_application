import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ChatContext } from "../context/chat";

const Participants = () => {
  const { selectedRoom } = useContext(ChatContext);
  const [participantNames, setParticipantNames] = useState([]);

  useEffect(() => {
    if (selectedRoom) {
      const fetchParticipantNames = async () => {
        try {
          const participantNamesPromises = selectedRoom.participants.map(
            async (participantId) => {
              const response = await axios.get(
                `http://localhost:8002/api/users/${participantId}`
              );
              return response.data.name;
            }
          );
          const names = await Promise.all(participantNamesPromises);
          setParticipantNames(names);
        } catch (error) {
          console.error("Error fetching participant names:", error);
        }
      };

      fetchParticipantNames();
    }
  }, [selectedRoom]);

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h4 className="text-lg font-semibold mb-2">Participants</h4>
      <ul>
        {participantNames.map((name, index) => (
          <li key={index} className="text-gray-700">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
