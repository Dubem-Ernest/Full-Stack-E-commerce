import React from "react";
import { Link } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => {
        return (
          <Link key={index} to={`/product/${product._id}`} className="block">
            <div className="bg-white py-12 px-2 rounded-lg">
              <div className="w-full h-84 mb-4 gap-6">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <h3 className="text-sm mb-2">{product.name}</h3>
                <p className="text-gray-500 font-medium text-sm tracking-tighter">
                 ${product.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
