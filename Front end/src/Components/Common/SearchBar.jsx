import React from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { HiMagnifyingGlass, HiMiniXCircle } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleSearchToggle() {
    setIsOpen(!isOpen);
  }
  function handleSearch(e){
    e.preventDefault()
    console.log(searchTerm)
    setIsOpen(false);
  }

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
            onChange={(e)=>setsearchTerm(e.target.value) }
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 placeholder:text-gray-700 rounded-lg w-full focus:outline-none"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6 text-gray-700 " />
            </button>
          </div>

          <button
            onClick={handleSearchToggle}
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            {" "}
            <HiMiniXCircle className="h-6 w-6 text-gray-700 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <IoIosSearch className="h-6 w-6 text-gray-700 cursor-pointer" />{" "}
        </button>
      )}
    </div>
  );
};

export default SearchBar;
