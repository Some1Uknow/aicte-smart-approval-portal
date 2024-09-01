import React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const Compliance = () => {
  const complianceItems = [
    {
      name: "Building Safety Certificate",
      status: "compliant",
      details: "Certificate is up to date and meets all safety standards.",
    },
    {
      name: "Fire Safety Audit",
      status: "pending",
      details:
        "Audit is scheduled but not yet completed. Ensure the audit is conducted by the end of the month.",
    },
    {
      name: "Environmental Clearance",
      status: "non_compliant",
      details:
        "Missing essential annexures and lacks data on waste management protocols.",
      guide:
        "Include Annexures III and IV, and provide comprehensive details on waste management protocols as per guidelines.",
    },
    {
      name: "Health and Sanitation Report",
      status: "compliant",
      details:
        "Report is compliant with current health and sanitation standards.",
    },
    {
      name: "Emergency Preparedness Plan",
      status: "non_compliant",
      details:
        "Plan lacks updated evacuation routes and does not account for new building extensions.",
      guide:
        "Update evacuation routes and incorporate the new building extensions into the emergency preparedness plan.",
    },
  ];

  const getStatusIcon = (status) => {
    const icons = {
      compliant: <FaCheckCircle className="text-green-500" />,
      pending: <FaHourglassHalf className="text-yellow-500" />,
      non_compliant: <FaExclamationCircle className="text-red-500" />,
    };
    return icons[status];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Compliance Tracker
      </h3>
      <ul className="divide-y divide-gray-200">
        {complianceItems.map((item, index) => (
          <li key={index} className="py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.details}</p>
                {item.status === "non_compliant" && (
                  <div className="mt-2 text-xs text-red-600">
                    <strong>Correction Guide:</strong> {item.guide}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(item.status)}
                <span
                  className={`text-xs font-medium ${getBadgeStyle(
                    item.status
                  )}`}
                >
                  {item.status.replace("_", " ").toUpperCase()}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getBadgeStyle = (status) => {
  const styles = {
    compliant: "text-green-800",
    pending: "text-yellow-800",
    non_compliant: "text-red-800",
  };
  return styles[status];
};

export default Compliance;
