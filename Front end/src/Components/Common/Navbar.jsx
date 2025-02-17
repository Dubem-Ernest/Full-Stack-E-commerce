import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hamOpen, setHamOpen] = useState(false);

  function toggleCartDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  function hamburgerHandler() {
    setHamOpen(!hamOpen);
  }

  return (
    <>
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

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 text-xs bg-primary text-white rounded-full px-1 py-0.5">
              0
            </span>
          </button>

          <div className="overflow-hidden ">
            <SearchBar />
          </div>

          <button onClick={hamburgerHandler} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      <div
        className={`fixed top-0 left-0 w-3/4 sm:1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          hamOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={hamburgerHandler}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to="#" onClick={hamburgerHandler} className="block text-gray-600 hover:text-black">Men</Link>
            <Link to="#" onClick={hamburgerHandler} className="block text-gray-600 hover:text-black">Women</Link>
            <Link to="#" onClick={hamburgerHandler} className="block text-gray-600 hover:text-black">Top Wear</Link>
            <Link to="#" onClick={hamburgerHandler} className="block text-gray-600 hover:text-black">Bottom Wear</Link>
          </nav>
          </div>
      </div>
    </>
  );
};

export default Navbar;
