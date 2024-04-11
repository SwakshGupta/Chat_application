import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MessageSection from "./Components/MessageSection";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar className="w-1/4 flex-none bg-gray-200" />
        <MessageSection className="w-3/4" />
      </div>
    </div>
  );
};

export default App;
