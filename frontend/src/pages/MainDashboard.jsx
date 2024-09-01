import React, { useState } from "react";
import Modal from "react-modal";
import {
  FaChalkboardTeacher,
  FaBuilding,
  FaBookOpen,
  FaUsers,
  FaLaptopCode,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

Modal.setAppElement("#root");

const inspectionAreas = [
  {
    id: "faculty",
    name: "Faculty Qualifications",
    icon: FaChalkboardTeacher,
    status: "approved",
    statusIcon: FaCheckCircle,
    feedback: "All faculty requirements have been met.",
    details: "The institution has successfully maintained the required student-faculty ratio and ensured all faculty members have necessary qualifications.",
    documents: [
      { name: "Faculty Qualification Certificates", provided: true },
      { name: "Faculty Experience Letters", provided: true },
      { name: "Faculty-Student Ratio Report", provided: true },
    ],
    stats: [
      { name: "PhD", value: 60 },
      { name: "Masters", value: 35 },
      { name: "Bachelors", value: 5 },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: FaBuilding,
    status: "pending",
    statusIcon: FaExclamationCircle,
    feedback: "Needs improvement in laboratory equipment. Consider upgrading computer labs.",
    details: "While most infrastructure requirements are met, the laboratory equipment, especially in computer labs, needs upgrading to meet current industry standards.",
    documents: [
      { name: "Building Safety Certificate", provided: true },
      { name: "Laboratory Inventory List", provided: true },
      { name: "Classroom Capacity Report", provided: true },
      { name: "Computer Lab Specification Sheet", provided: false },
    ],
    stats: [
      { name: "Classrooms", value: 90 },
      { name: "Labs", value: 70 },
      { name: "Library", value: 95 },
      { name: "Sports Facilities", value: 85 },
    ],
  },
  {
    id: "curriculum",
    name: "Curriculum Review",
    icon: FaBookOpen,
    status: "approved",
    statusIcon: FaCheckCircle,
    feedback: "Curriculum meets industry standards and academic requirements.",
    details: "The institution's curriculum is well-structured, up-to-date, and aligned with current industry needs and academic standards.",
    documents: [
      { name: "Course Syllabi", provided: true },
      { name: "Industry Partnership Agreements", provided: true },
      { name: "Academic Board Approval Documents", provided: true },
    ],
    stats: [
      { name: "Core Courses", value: 70 },
      { name: "Electives", value: 20 },
      { name: "Projects", value: 10 },
    ],
  },
  {
    id: "studentServices",
    name: "Student Services",
    icon: FaUsers,
    status: "not_approved",
    statusIcon: FaTimesCircle,
    feedback: "Inadequate career counseling and placement services.",
    details: "The institution needs to significantly improve its career counseling services and establish stronger industry connections for better placement opportunities.",
    documents: [
      { name: "Student Feedback Reports", provided: true },
      { name: "Placement Statistics", provided: false },
      { name: "Career Counseling Program Outline", provided: false },
    ],
    stats: [
      { name: "Academic Advising", value: 65 },
      { name: "Career Services", value: 30 },
      { name: "Health Services", value: 80 },
      { name: "Extracurricular", value: 75 },
    ],
  },
  {
    id: "researchOutput",
    name: "Research Output",
    icon: FaLaptopCode,
    status: "pending",
    statusIcon: FaExclamationCircle,
    feedback: "Research publications and funding need improvement.",
    details: "While there is active research ongoing, the number of publications in high-impact journals and the amount of research funding secured need to be increased.",
    documents: [
      { name: "Research Publication List", provided: true },
      { name: "Grant Proposals", provided: true },
      { name: "Research Collaboration Agreements", provided: false },
    ],
    stats: [
      { name: "Journal Publications", value: 45 },
      { name: "Conference Papers", value: 60 },
      { name: "Research Grants", value: 30 },
      { name: "Patents", value: 15 },
    ],
  },
];

const StatusBadge = ({ status }) => {
  const colors = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    not_approved: "bg-red-100 text-red-800",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const MainDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const openModal = (area) => {
    setSelectedArea(area);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-semibold text-gray-900">Inspection Overview</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {inspectionAreas.map((area) => (
          <div
            key={area.id}
            className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300 ease-in-out"
            onClick={() => openModal(area)}
          >
            <div className="p-6 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <area.statusIcon
                  className={`h-12 w-12 ${
                    area.status === 'approved' ? 'text-green-500' :
                    area.status === 'pending' ? 'text-yellow-500' : 'text-red-500'
                  }`}
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-gray-900">{area.name}</h3>
                  <area.icon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                </div>
                <p className="mt-1 text-sm text-gray-500 truncate">{area.feedback}</p>
                <div className="mt-4">
                  <StatusBadge status={area.status} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Inspection Area Details"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedArea && (
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <selectedArea.icon className="h-8 w-8 mr-2 text-blue-500" />
                {selectedArea.name}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <StatusBadge status={selectedArea.status} />
              <p className="mt-2 text-gray-600">{selectedArea.feedback}</p>
              <p className="mt-2 text-sm text-gray-500">{selectedArea.details}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Document Checklist</h3>
              <ul className="mt-2 divide-y divide-gray-200">
                {selectedArea.documents.map((doc, index) => (
                  <li key={index} className="py-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">{doc.name}</span>
                    {doc.provided ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Statistics</h3>
              <div className="mt-2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={selectedArea.stats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
              <ul className="mt-2 space-y-2">
                {selectedArea.status !== "approved" && (
                  <li className="flex items-start">
                    <FaExclamationCircle className="flex-shrink-0 h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <span className="ml-2 text-sm text-gray-600">
                      {selectedArea.status === "pending"
                        ? "Address feedback to move towards approval."
                        : "Critical issues need immediate attention for approval."}
                    </span>
                  </li>
                )}
                <li className="flex items-start">
                  <FaCheckCircle className="flex-shrink-0 h-5 w-5 text-green-400" aria-hidden="true" />
                  <span className="ml-2 text-sm text-gray-600">
                    Regularly update documentation to maintain compliance.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={closeModal}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MainDashboard;