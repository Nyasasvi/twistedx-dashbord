import React from "react";

const TradingPartners: React.FC = () => {
  const partners = [
    {
      name: "AAFES",
      productionIds: ["ZZ/VNEXCHANGE"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | 846 Inventory Feed - AAFES Active Only", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Academy (Dropship)",
      productionIds: ["ZZ/DSCOACADEMY"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Academy", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Atwoods",
      productionIds: ["ZZ/MIDSPROD", "ZZ/ATWD0001"], 
      links: [{ name: "TWX | Cleo - 810 Invoices", url: "#" }],
    },
    {
      name: "Bass Pro Shops (Store)",
      productionIds: ["01/082130378"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
        { name: "TWX | DSCO Inventory Feed - Bass Pro Shops", url: "#" },
      ],
    },
    {
      name: "Bass Pro Shops (Dropship)",
      productionIds: ["ZZ/BPSDSCO"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Bomgaars",
      productionIds: ["ZZ/BOMG0001"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
      ],
    },
    {
      name: "Boot Barn (Dropship)",
      productionIds: ["ZZ/SHEPLERS"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Actives & Closeout Only", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Boot Barn (Store)",
      productionIds: ["ZZ/BOOTBARN"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Actives & Closeout Only", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Buchheit",
      productionIds: ["ZZ/MIDSPROD", "12/5735471010"], 
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
      ],
    },
    {
      name: "Cavenders",
      productionIds: ["ZZ/CAVENDERS"],
      links: [{ name: "TWX | Cleo - 810 Invoices", url: "#" }],
    },
    {
      name: "Cintas",
      productionIds: [], 
      links: [],
    },
    {
      name: "Coastal Farm & Ranch",
      productionIds: ["ZZ/MIDSPROD", "12/5419673450"], 
      links: [{ name: "TWX | Cleo - 810 Invoices", url: "#" }],
    },
    {
      name: "D&B Supply",
      productionIds: ["ZZ/MIDSPROD", "ZZ/DBS00001"], 
      links: [{ name: "TWX | Cleo - 810 Invoices", url: "#" }],
    },
    {
      name: "Daryl Flood Logistics (Next Point Logistics)",
      links: [
        { name: "TWX | Cleo - 940 Warehouse Shipping Order", url: "#" },
        { name: "TWX | Celigo - 943 Shipment to DFl", url: "#" },
      ],
    },
    {
      name: "Deal Rise (Power Play)",
      productionIds: ["ZZ/DEALRISE"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Dillard's (Stores & Dropship)",
      productionIds: ["08/6112390050"],
      links: [], 
    },
    {
      name: "Elliott's Boots",
      productionIds: ["ZZ/ELLIOTTSBOOTS"],
      links: [], 
    },
    {
      name: "Home of Economy",
      productionIds: ["ZZ/MIDSPROD", "ZZ/ECON0001"],
      links: [], 
    },
    {
      name: "Houser Shoes (Dropship)",
      productionIds: ["01/062560917"],
      links: [], 
    },
    {
      name: "Lowe's",
      productionIds: ["12/7047581000CH"],
      links: [
        { name: "TWX | Cleo - 846 Inventory Feed - Lowe's", url: "#" },
      ],
    },
    {
      name: "Mid - States",
      productionIds: ["ZZ/MIDSPROD"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
      ],
    },
    {
      name: "Murdoch's",
      productionIds: ["ZZ/MIDSPROD", "ZZ/MURDOCHSRANCH11"], 
      links: [{ name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Nordstrom (Dropship)",
      productionIds: ["ZZ/DSCONORD"],
      links: [
        { name: "TWX | 846 Inventory Feed - Actives Only", url: "#" },
        { name: "TWX | 846 Inventory Feed - Close Outs Zeroed", url: "#" },
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Nordstrom (Dropship)",
      productionIds: ["ZZ/DSCONORD"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | 846 Inventory Feed - Active Only", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Runnings",
      productionIds: ["ZZ/RUNN0001"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
      ],
    },
    {
      name: "Rural King Supply",
      productionIds: ["ZZ:RKYORK"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
      ],
    },
    {
      name: "Scheels",
      productionIds: ["ZZ/SPSSCHEELSSPTS"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Scheels", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Shoe Carnival",
      productionIds: ["08/6149570000"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Shoe Sensation",
      productionIds: ["ZZ/SHOESENSATION"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Shoe Sensation", url: "#" },
        { name: "TWX | Cleo - 855 PO Acknowledgements", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Shop One Country",
      productionIds: ["ZZ/DUOPLANE"],
      links: [], 
    },
    {
      name: "SmartPak (Inactive)",
      productionIds: ["ZZ/DSCOSMARTPAK"],
      inactive: true,
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Actives Only", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Super Shoes",
      productionIds: ["ZZ/SPSSUPERSHOES"],
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
    {
      name: "The Buckle",
      productionIds: ["08/6127770000"],
      links: [
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Tractor Supply (Dropship)",
      productionIds: ["08/6120930010"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | 846 Inventory Feed Active and Closeout Zero", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Tractor Supply (Store)",
      productionIds: ["08/6120930014"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Zappos",
      productionIds: ["ZZ/ZAPPOSKY"],
      links: [
        { name: "TWX | TrueCommerce 810 Invoice", url: "#" },
        { name: "TWX | TrueCommerce 856 ASNs", url: "#" },
      ],
    },
    {
      name: "Zulily (Inactive)",
      productionIds: ["ZZ/ZVDXPROD"],
      inactive: true,
      links: [
        { name: "TWX | Cleo - 810 Invoices", url: "#" },
        { name: "TWX | Cleo - 846 Inventory Feed - Zulily", url: "#" },
        { name: "TWX | Cleo - 856 ASNs", url: "#" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold border-b border-gray-300 pb-3 mb-6 text-gray-900">
        Trading Partners
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-all 
                       duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 
                       ${partner.inactive ? "border-red-500" : ""}`}
          >
            {/* Partner Name */}
            <h2 className={`text-xl font-semibold mb-3 ${partner.inactive ? "text-red-600" : "text-gray-900"}`}>
              {partner.name}
            </h2>

            {/* Production IDs */}
            {(partner.productionIds ?? []).length > 0 ? (
              (partner.productionIds ?? []).map((id, idIndex) => (
                <p key={idIndex} className="text-gray-700 font-semibold mb-1">
                  Production ID: <span className="text-black">{id}</span>
                </p>
              ))
            ) : (
              <p className="text-gray-500 italic">No Production ID</p>
            )}

            {/* Links */}
            <ul className="mt-3 space-y-2">
              {partner.links?.length ? (
                partner.links.map((link, linkIndex) => (
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
                ))
              ) : (
                <p className="text-gray-500 italic">No links available</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPartners;