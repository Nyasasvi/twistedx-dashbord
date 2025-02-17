import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  const navigate = useNavigate();

  // List of pages for search suggestions
  const pages = [
    { name: "Analytics", path: "/analytics" },
    { name: "Development", path: "/development" },
    { name: "Documentation", path: "/documentation" },
    { name: "IT Tools", path: "/it-tools" },
    { name: "Schedules", path: "/schedules" },
    { name: "Trading Partners", path: "/trading-partners" },
  ];

  // Function to filter search results based on the first word
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();
    setSearchTerm(query);

    if (query.length > 0) {
      const filtered = pages.filter((page) =>
        page.name.toLowerCase().startsWith(query.toLowerCase()) // First-word match
      );

      if (filtered.length === 0) {
        // If no first-word match, show results containing the term
        const relatedResults = pages.filter((page) =>
          page.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(relatedResults.map((page) => page.name));
      } else {
        setFilteredResults(filtered.map((page) => page.name));
      }
    } else {
      setFilteredResults([]);
    }
  };

  // Handle suggestion click to navigate
  const handleSuggestionClick = (pageName: string) => {
    const page = pages.find((p) => p.name === pageName);
    if (page) {
      navigate(page.path);
      setSearchTerm(""); // Clear search input
      setFilteredResults([]); // Hide dropdown
    }
  };

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between relative">
      <div className="text-xl font-bold"></div>
      <div className="flex items-center relative">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search pages..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Search Button */}
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Search
        </div>

        {/* Search Suggestions Dropdown (Fixed visibility and positioning) */}
        {filteredResults.length > 0 && (
          <ul className="absolute top-full mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-md z-50">
            {filteredResults.map((result, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(result)}
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
