import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products,exclusive events, and online
            offers.
          </p>
          <p className="font-medium text-gray-600 mb-6">
            Sign up and get 10% off on your first order
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Suscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4"> Shop</h3>
          <ul className="space-y-2 text-gray-600 flex flex-col">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Wear{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Wear{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Wear{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Wear{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
