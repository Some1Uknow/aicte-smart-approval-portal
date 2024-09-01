import React, { useState } from "react";
import {
  
  FaUpload,
} from "react-icons/fa";
import Modal from "react-modal";

const Document = () => {
  const [documents, setDocuments] = useState([
    {
      name: "Building Safety Report",
      status: "not_approved",
      issues: [
        "Missing signatures from authorized personnel.",
        "Report is outdated; must be within the last 6 months.",
        "Insufficient details on emergency exits.",
      ],
      guide: "Ensure the report is signed by authorized personnel, updated within the last 6 months, and includes detailed emergency exit plans.",
    },
    {
      name: "Fire Safety Certificate",
      status: "approved",
      issues: [],
    },
    {
      name: "Environmental Clearance",
      status: "not_approved",
      issues: [
        "Incorrect formatting; the document should follow the government-prescribed format.",
        "Missing annexures: Annexure III and IV are required.",
        "Insufficient data on waste management protocols.",
      ],
      guide: "Correct the formatting according to the government guidelines, include Annexures III and IV, and provide comprehensive details on waste management protocols.",
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleUpload = (docName) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.name === docName ? { ...doc, status: "approved", issues: [], guide: "" } : doc
      )
    );
    closeModal();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Document Analysis - Pending Approvals
      </h3>
      <div className="mt-4">
        <ul className="divide-y divide-gray-200">
          {documents
            .filter((doc) => doc.status === "not_approved")
            .map((doc, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {doc.name}
                  </span>
                  <ul className="ml-4 mt-2 text-xs text-red-600 list-disc">
                    {doc.issues.map((issue, idx) => (
                      <li key={idx}>{issue}</li>
                    ))}
                  </ul>
                  <div className="mt-2 text-xs text-gray-600">
                    <strong>Correction Guide:</strong> {doc.guide}
                  </div>
                </div>
                <button
                  onClick={() => openModal(doc)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center space-x-1"
                >
                  <FaUpload />
                  <span>Re-upload</span>
                </button>
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
              Please ensure that you have addressed the following issues before
              re-uploading:
            </p>
            <ul className="mt-2 text-xs text-red-600 list-disc">
              {selectedDoc.issues.map((issue, idx) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
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

export default Document;
