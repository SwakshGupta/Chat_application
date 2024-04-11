import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/user/getall")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="sidebar bg-gray-200 w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="space-y-2">
          {Array.isArray(users) &&
            users.map((user) => (
              <li
                key={user._id}
                className="cursor-pointer bg-white p-2 rounded-md shadow-md hover:bg-gray-100 flex items-center"
                onClick={() => onSelectUser(user)}
              >
                <img
                  src={`http://localhost:8002/uploads/${user.profilePicture}`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{user.username}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
