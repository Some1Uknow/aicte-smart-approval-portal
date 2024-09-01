import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaUpload,
  FaTrash,
} from "react-icons/fa";
import Modal from "react-modal";

const Inspection = () => {
  // Sample inspection data
  const inspectionArea = {
    name: "Library Inspection",
    status: "not_approved", // Other possible values: "approved", "pending"
    feedback:
      "The library facilities do not meet the required standards. Please re-upload the necessary documents to demonstrate compliance.",
    documents: [
      { name: "Library Plan.pdf" },
      { name: "Safety Certificate.pdf" },
      { name: "Fire Exit Map.pdf" },
    ],
  };

  const [uploadStatus, setUploadStatus] = useState({});
  const [progress, setProgress] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleUpload = (docName) => {
    setUploadStatus((prev) => ({ ...prev, [docName]: "uploaded" }));
    setProgress(progress + 1);
  };

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = (docName) => {
    setUploadStatus((prev) => ({ ...prev, [docName]: "not_uploaded" }));
    setProgress(progress - 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {inspectionArea.name} - Status
        </h3>
        <div className="flex items-center">
          <StatusBadge status={inspectionArea.status} />
          <span className="ml-2 text-sm text-gray-500">
            {progress}/{inspectionArea.documents.length} Issues Resolved
          </span>
        </div>
      </div>

      <div className="mt-4 text-gray-700">
        <p>{inspectionArea.feedback}</p>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-medium text-gray-900">
          Re-upload Documents
        </h4>
        <ul className="mt-2 divide-y divide-gray-200">
          {inspectionArea.documents.map((doc, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">{doc.name}</span>
              <div className="flex items-center space-x-2">
                {uploadStatus[doc.name] === "uploaded" ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaExclamationCircle className="text-red-500" />
                )}
                <button
                  onClick={() => openModal(doc)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center space-x-1"
                >
                  <FaUpload />
                  <span>Upload</span>
                </button>
                {uploadStatus[doc.name] === "uploaded" && (
                  <button
                    onClick={() => handleDelete(doc.name)}
                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Document"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedDoc && (
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-gray-900">
              Upload {selectedDoc.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Ensure the document meets the inspection criteria before
              uploading.
            </p>
            <div className="mt-4">
              <input
                type="file"
                className="border border-gray-300 rounded-md p-2 w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleUpload(selectedDoc.name);
                  closeModal();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const colors = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    not_approved: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default Inspection;
