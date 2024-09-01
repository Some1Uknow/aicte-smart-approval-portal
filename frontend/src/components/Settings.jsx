import React, { useState } from "react";

const Settings = () => {
  const [collegeInfo, setCollegeInfo] = useState({
    name: "Dronacharya College of Engineering",
    id: "C-28457",
    location: "Gurugram, Haryana",
    email: "info@dce.ac.in",
    phone: "0124-1234567",
  });

  const [editing, setEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Implement save logic here (e.g., API call)
    console.log("College info saved:", collegeInfo);
    setEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Settings</h3>

      {/* College Information Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">College Information</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700">College Name</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={collegeInfo.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="mt-1 text-gray-600">{collegeInfo.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">College ID</label>
          <p className="mt-1 text-gray-600">{collegeInfo.id}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          {editing ? (
            <input
              type="text"
              name="location"
              value={collegeInfo.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="mt-1 text-gray-600">{collegeInfo.location}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          {editing ? (
            <input
              type="email"
              name="email"
              value={collegeInfo.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="mt-1 text-gray-600">{collegeInfo.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          {editing ? (
            <input
              type="tel"
              name="phone"
              value={collegeInfo.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="mt-1 text-gray-600">{collegeInfo.phone}</p>
          )}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800">Notifications Settings</h4>
        <div className="flex items-center justify-between mt-2">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="toggle-checkbox"
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span>SMS Notifications</span>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
            className="toggle-checkbox"
          />
        </div>
      </div>

      {/* Account Security Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-800">Account Security</h4>
        <div className="flex items-center justify-between mt-2">
          <span>Enable Two-Factor Authentication</span>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            className="toggle-checkbox"
          />
        </div>
      </div>

      {/* Actions Section */}
      <div className="mt-6 flex justify-end space-x-2">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Settings;
