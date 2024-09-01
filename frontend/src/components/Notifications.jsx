import React from "react";
import { FaExclamationCircle, FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Building Safety Certificate Approved",
      description: "Your Building Safety Certificate has been approved by the regulatory authority.",
      type: "success",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Fire Safety Audit Pending",
      description: "The Fire Safety Audit is scheduled for next week. Ensure all preparations are completed.",
      type: "warning",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Environmental Clearance Not Approved",
      description: "The Environmental Clearance is missing essential annexures. Review the details and re-submit.",
      type: "error",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "New Inspection Guidelines Released",
      description: "New inspection guidelines have been released for the upcoming academic year.",
      type: "info",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "Emergency Preparedness Plan Rejected",
      description: "The Emergency Preparedness Plan does not account for the new building extensions. Please revise.",
      type: "error",
      time: "3 days ago",
    },
    {
      id: 6,
      title: "Health and Sanitation Report Approved",
      description: "Your Health and Sanitation Report has been approved. No further action is required.",
      type: "success",
      time: "4 days ago",
    },
    {
      id: 7,
      title: "Upcoming Inspection Reminder",
      description: "Reminder: Your institution's inspection is scheduled for 15th September 2024.",
      type: "info",
      time: "5 days ago",
    },
  ];

  const getIcon = (type) => {
    const icons = {
      success: <FaCheckCircle className="text-green-500" />,
      warning: <FaExclamationCircle className="text-yellow-500" />,
      error: <FaExclamationCircle className="text-red-500" />,
      info: <FaInfoCircle className="text-blue-500" />,
    };
    return icons[type];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} className="py-4">
            <div className="flex items-center">
              <div className="mr-3">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">{notification.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
