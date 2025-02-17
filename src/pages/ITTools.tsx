import React from "react";

const ITTools: React.FC = () => {
  const categories = [
    {
      title: "SuiteQL Reports",
      links: [{ name: "EDI Transactions Summary", url: "#" }],
    },
    {
      title: "Saved Searches",
      links: [
        { name: "TWX | IT Hold - All Transactions", url: "#" },
        { name: "TWX | Customer State-County Verification Report", url: "#" },
      ],
    },
    {
      title: "PRI App Settings for TWX",
      links: [
        { name: "TWX IF Priority App Settings", url: "#" },
        { name: "TWX Cancel MRs App Setting", url: "#" },
        { name: "TWX EDI Field Specs App Setting", url: "#" },
      ],
    },
    {
      title: "Monitors",
      links: [{ name: "All Map/Reduce Scripts Status", url: "#" }],
    },
    {
      title: "Utilities",
      links: [
        { name: "PRI Record Touch Script Deployments", url: "#" },
        { name: "PRI Record Delete Script Deployments", url: "#" },
        { name: "Credit Override", url: "#" },
        { name: "SuiteQL Query Renderer", url: "#" },
        { name: "Requeue EDI Documents", url: "#" },
      ],
    },
    {
      title: "TWX Configurations",
      links: [
        { name: "TWX Add/Update by Style Record Type Configuration", url: "#" },
        { name: "TWX Default Transaction Field Configuration", url: "#" },
        { name: "TWX Async Display Settings", url: "#" },
      ],
    },
    {
      title: "PRI Configurations",
      links: [
        { name: "PRI Customer Sync App Settings", url: "#" },
        { name: "PRI RSM Rule Definitions", url: "#" },
        { name: "PRI RSM Record Type Definitions", url: "#" },
        { name: "PRI RSM Rule Instance Summary", url: "#" },
        { name: "PRI Query Renderer Query Definitions", url: "#" },
        { name: "PRI CRE Profiles", url: "#" },
        { name: "PRI CRE2 Profiles", url: "#" },
      ],
    },
    {
      title: "Pacejet Configurations",
      links: [
        { name: "Pacejet Class of Service Xref", url: "#" },
        { name: "Pacejet Settings", url: "#" },
        { name: "Pacejet Queue Handler", url: "#" },
      ],
    },
    {
      title: "EnvoyB2B Configurations",
      links: [
        { name: "Envoy Integration Configuration", url: "#" },
        { name: "Envoy Integration Setup", url: "#" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-8 border border-gray-300 shadow-xl rounded-lg transition-all duration-300 ease-in-out 
                     transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h2>
          <ul className="text-gray-700 space-y-2">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex} className="flex items-center">
                <span className="mr-2 text-gray-500">➜</span>
                <a 
                  href={link.url} 
                  className="text-blue-600 hover:text-blue-800 relative 
                             before:absolute before:w-full before:h-0.5 before:bg-blue-600 before:bottom-0 before:left-0 
                             before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ITTools;
