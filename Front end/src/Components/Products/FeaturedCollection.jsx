import React from "react";
import featured from "../../assets/featured.webp"
import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  return (
    <section className="container mt-4 mb-4 mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
      {/* left content */}
      <div className="lg:w-1/2 p-8 text-center lg:text-left">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Comfort And Style
        </h2>
        <h2 className="text-4xl lg:text-5xl font-boldmn-4">
          Apparel Made For Everyday Life
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          explicabo aperiam in quam deserunt eligendi veniam similique assumenda
          architecto ad!
        </p>
        <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:gray-800">Shop Now</Link>

      </div>

      {/* right content */}

      <div className="lg:w-1/2">
        <img src={featured } alt="featured" className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl" />
      </div>

     
    </section>
  );
};

export default FeaturedCollection;
