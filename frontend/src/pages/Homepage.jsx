import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-1">
        <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
          <div className="flex items-center space-x-2">
            <span className="text-sm">
              Sunday, September 1, 2024 - 00:01:14 IST
            </span>
            <button className="text-sm">Screen Reader Access</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="text-sm">A-</button>
              <button className="text-sm">A</button>
              <button className="text-sm">A+</button>
            </div>
            <button className="text-sm">हिन्दी</button>
            <Link to="/login">
              <button className="bg-orange-500 text-white px-3 py-1 rounded">
                Web Portal Login
              </button>
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 flex-wrap">
            <div className="flex items-center">
              <img
                src="https://www.aicte-india.org/sites/default/files/logo_new.png"
                alt="AI Inspection System Logo"
                className="mr-4 h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  AI-Driven Inspection System
                </h1>
                <p className="text-sm text-gray-600">
                  All India Council for Technical Education
                </p>
              </div>
            </div>
            <div className="flex items-center w-full md:w-auto mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-l px-2 py-1 w-full md:w-auto"
              />
              <button className="bg-orange-500 text-white px-3 py-1 rounded-r">
                <span className="sr-only">Search</span>
                🔍
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-orange-500">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center">
            {[
              "Home",
              "About Us",
              "Features",
              "Modules",
              "Implementation",
              "Education",
              "Opportunities",
              "Statistics",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="px-4 py-2 text-white hover:bg-orange-600 cursor-pointer text-center"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="relative h-96">
          <img
            src="/aicte.jpeg"
            alt="AI Inspection System Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl font-bold">AI-Driven Inspections</h2>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">
            About AI-Driven Inspection System
          </h2>
          <p className="mb-4">
            As defined in our mission, the AI-Driven Inspection System aims to
            revolutionize institutional inspections through advanced AI
            technologies, enhancing accuracy, efficiency, and consistency in
            evaluating educational institutions across Engineering, Technology,
            Architecture, Town Planning, Management, Pharmacy, and Applied Arts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Automated Facility Inspections",
                desc: "Image recognition for infrastructure assessment",
              },
              {
                title: "Document Analysis",
                desc: "NLP for evaluating reports and compliance",
              },
              {
                title: "Real-time Data Collection",
                desc: "Continuous data gathering and analysis",
              },
              {
                title: "Actionable Insights",
                desc: "Comprehensive reports with improvement suggestions",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2024 AI-Driven Inspection System, All India Council for
            Technical Education. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
