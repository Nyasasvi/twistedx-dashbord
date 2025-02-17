import React from "react";

const DocumentationResources: React.FC = () => {
  const resources = [
    { name: "Jira Service Management - IT Tickets", url: "#" },
    { name: "Confluence - TXGB Documentation Library", url: "#" },
    { name: "Jira - Twisted X Cross Department Projects", url: "#" },
    { name: "Jira", url: "#" },
    { name: "Jira - Business Intelligence", url: "#" },
    { name: "Scribe", url: "#" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-6 text-gray-900">
        Documentation & Resources
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-6">
        Processes, project management, and documentation tools.
      </p>

      {/* Card Layout */}
      <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg transition-all 
                      duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-gray-500">➜</span>
              <a
                href={resource.url}
                className="text-blue-600 hover:text-blue-800 relative 
                           before:absolute before:w-full before:h-0.5 before:bg-blue-600 before:bottom-0 before:left-0 
                           before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentationResources;


