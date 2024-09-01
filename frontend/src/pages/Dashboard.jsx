import React, { useState } from "react";
import { FaUniversity, FaClipboardCheck, FaBell, FaCog } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import MainDashboard from "../components/MainDashboard";
import Inspection from "../components/Inspection";
import { RiDashboardLine } from "react-icons/ri";
import Document from "../components/Document";
import Notifications from "../components/Notifications";
import Settings from "../components/Settings";
// Placeholder components for each section
const DashboardOverview = () => <MainDashboard />;
const InspectionStatus = () => <Inspection />;
const DocumentAnalysis = () => <Document />;
const NotificationsTab = () => <Notifications />;
const SettingsComponent = () => <Settings/>;

const Dashboard = () => {
  const [institute, setInstitute] = useState({
    name: "Dronacharya College of Engineering",
    id: "C-28457",
    location: "Gurugram, Haryana",
    lastInspection: "10 August 2024",
  });

  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <RiDashboardLine />,
      component: DashboardOverview,
    },
    {
      id: "inspection",
      name: "Inspection Status",
      icon: <FaClipboardCheck />,
      component: InspectionStatus,
    },
    {
      id: "documents",
      name: "Document Analysis",
      icon: <IoMdDocument />,
      component: DocumentAnalysis,
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: <FaBell />,
      component: NotificationsTab,
    },
    { id: "settings", name: "Settings", icon: <FaCog />, component: Settings },
  ];

  const ActiveComponent =
    sidebarItems.find((item) => item.id === activeTab)?.component ||
    DashboardOverview;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-blue-900 text-white">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <FaUniversity className="mr-2 text-2xl" />
            <h2 className="text-xl font-bold">AI Inspection</h2>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">{institute.name}</h3>
            <p className="text-sm">ID: {institute.id}</p>
            <p className="text-sm">{institute.location}</p>
          </div>
        </div>
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                activeTab === item.id ? "bg-blue-800" : "hover:bg-blue-800"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {sidebarItems.find((item) => item.id === activeTab)?.name ||
                "Dashboard"}
            </h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto ">
          <div className="border-gray-200 rounded-lg m-4 h-96">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
