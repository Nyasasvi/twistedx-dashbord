import React from "react";

const Schedules: React.FC = () => {
  const categories = [
    {
      title: "Cleo",
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - AAFES", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Actives & Closeout Only", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Actives Only", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - BassProShops", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Lowe's", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Nordstrom", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Scheels", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Sheplers", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Shoe Sensation", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements Detail", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
        { name: "TWX | Cleo - 870 Order Status", url: "#" },
        { name: "TWX | Cleo - 870 Order Status Report", url: "#" },
        { name: "TWX | Cleo - Detailed Item Fulfillment", url: "#" },
        { name: "TWX | Cleo - Entity Table Inbound 2", url: "#" },
        { name: "TWX | Cleo - Entity Table Outbound 2", url: "#" },
        { name: "TWX | Cleo - Item Table", url: "#" },
        { name: "TWX | Cleo - Package Contents Detailed", url: "#" },
      ],
    },
    {
      title: "Celigo",
      links: [
        { name: "TWX | Celigo - 940 Trailer Orders", url: "#" },
        { name: "TWX | Celigo - 940 Trailer Orders - Grouped", url: "#" },
        { name: "TWX | Celigo - 943 Shipment to DFL", url: "#" },
        { name: "TWX | Celigo - 943 Shipment to DFL - Grouped", url: "#" },
      ],
    },
    {
      title: "True Commerce",
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 855 - BootBarn", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
        { name: "TWX | TrueCommerce 940 - All Item Fulfillments", url: "#" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-6 text-gray-900">
        Schedules
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cleo takes full height in column 1 */}
        <div
          className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg transition-all 
                     duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cleo</h2>
          <ul className="space-y-2">
            {categories[0].links.map((link, linkIndex) => (
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

        {/* Column 2: Celigo & True Commerce Stacked */}
        <div className="flex flex-col space-y-8">
          {categories.slice(1).map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg transition-all 
                         duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h2>
              <ul className="space-y-2">
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
      </div>
    </div>
  );
};

export default Schedules;

