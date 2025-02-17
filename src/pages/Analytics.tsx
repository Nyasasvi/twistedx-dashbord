import React from "react";

const Analytics: React.FC = () => {
  const categories = [
    {
      title: "Sales Orders",
      links: [
        { name: "Sales Orders - Backorder Analysis", url: "#" },
        { name: "Sales Order - Backordered Qty with BIG Overstock", url: "#" },
      ],
    },
    {
      title: "Item Fulfillments",
      links: [
        { name: "Item Fulfillment - Picked Analysis", url: "#" },
        { name: "Item Fulfillment - Shipped Analysis", url: "#" },
      ],
    },
    {
      title: "Landed Cost",
      links: [
        { name: "Landed Cost - Shipment Estimate to Bill Comparison", url: "#" },
        { name: "Landed Cost - Containers with No Duties LC PO", url: "#" },
        { name: "Landed Cost - Containers with No Freight LC PO", url: "#" },
        { name: "Landed Cost - Containers with No Handling LC PO", url: "#" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-6 text-gray-900">
        Analytics
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg transition-all 
                       duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            {/* Category Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h2>
            
            {/* Links with Pointer */}
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
  );
};

export default Analytics;


