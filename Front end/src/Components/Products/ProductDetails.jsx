import React from "react";

const products = {
  name: "Classic Oxford Button-Down Shirt",
  description:
    "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
  price: 39.99,
  discountPrice: 34.99,
  countInStock: 20,
  sku: "OX-SH-001",
  category: "Top Wear",
  brand: "Urban Threads",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Red", "Blue", "Yellow"],
  collections: "Business Casual",
  material: "Cotton",
  gender: "Men",
  images: [
    {
      url: "https://picsum.photos/500/500?random=39",
      altText: "Classic Oxford Button-Down Shirt Front View",
    },
    {
      url: "https://picsum.photos/500/500?random=40",
      altText: "Classic Oxford Button-Down Shirt Back View",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex space-y-4 flex-col mr-6">
            {products.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className="w-20 h-20  object-cover rounded-lg cursor-pointer"
                />
              );
            })}
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={products.images[0]?.url}
                alt={products.images[0]?.alt}
                className="h-auto w-full rounded"
              />
            </div>
          </div>

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {products.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className="w-20 h-20  object-cover rounded-lg cursor-pointer"
                />
              );
            })}
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl text-gray-600 font-semibold mb-2">
              {products.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {products.price && products.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
