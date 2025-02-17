import React from "react";

const Development: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Development Section */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-4 text-gray-900">
          Development
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The bulk of our development efforts are SuiteScripts. These are
          customizations that we build within NetSuite to extend capabilities
          and provide enhanced functionalities and efficiencies.
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "SuiteCloud Unit Testing Framework",
            "SuiteCloud Extension for VS Code",
            "SuiteCloud CLI for Node.js",
            "NetSuite UI Framework TypeScript Type Declarations",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-gray-500">➜</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 relative 
                           before:absolute before:w-full before:h-0.5 before:bg-blue-600 before:bottom-0 before:left-0 
                           before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* EDI Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-4 text-gray-900">
          EDI
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This section lists out important saved searches that are utilized for
          automated/scheduled processes, to exchange electronic document
          information between TwistedX and mainly our retail partners. Note that
          these saved searches are only for outbound documents, as any inbound
          documents are scheduled/processed by our EDI provider.
        </p>

        {/* Control Reports */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Control Reports
          </h3>
          <ul className="space-y-3">
            {[
              "TWX | EDI Control 856 - Pacejet Processing Stuck",
              "TWX | EDI Control 856 - Not Sent",
              "TWX | EDI Control 940 - Not Sent",
              "TWX | EDI Control 945 - Not Processed Correctly",
              "TWX | EDI Control 940/856 - IT Hold",
              "TWX | EDI Control 810 - Not Sent",
              "TWX | EDI Control 810 - Invoice Creation Error",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-gray-500">➜</span>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 relative 
                             before:absolute before:w-full before:h-0.5 before:bg-blue-600 before:bottom-0 before:left-0 
                             before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Development;
