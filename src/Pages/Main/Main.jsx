import React from "react";
import Sidebar from "../../component/Sidebar";
import MainContent from "../../component/MainContent";

const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Main;
