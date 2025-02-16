import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div>
        <Link to="/" className="text-2xl font-medium">
          DubemStore
        </Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 font-medium hover:text-black uppercase"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-700 font-medium hover:text-black uppercase"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-700 font-medium hover:text-black uppercase"
        >
          Top Wear
        </Link>
        <Link
          to="#"
          className="text-gray-700 font-medium hover:text-black uppercase"
        >
          Bottom Wear
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/profile" className=" hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700" />
        </Link>

        <button className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 text-xs bg-primary text-white rounded-full px-1 py-0.5">
            0
          </span>
        </button>

        <div className="overflow-hidden">
        <SearchBar/>
        </div>

        <button className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
