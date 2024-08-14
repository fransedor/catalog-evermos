import { useRouter } from "next/router";
import { useState } from "react";

// components/SearchBar.js
const SearchBar = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1, search: searchValue },
    });
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          // If the user presses the "Enter" key on the keyboard
          if (e.key === "Enter") {
            // Cancel the default action, if needed
            e.preventDefault();
            handleSearch();
          }
        }}
        className="w-full px-4 py-2 border-none outline-none"
      />
      <button
        type="submit"
        className="bg-gray-800 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.65 16.65a8 8 0 111.4-1.4l4.35 4.35z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
