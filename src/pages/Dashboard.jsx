import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="h-screen flex bg-[#FBF7EF]">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 p-6 overflow-auto">
          <Header
            username="Siswa"
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <main className="mt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
