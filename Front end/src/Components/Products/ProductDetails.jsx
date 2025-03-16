import React from "react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import ProductsGrid from "./ProductsGrid";

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

const similarProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=39" }],
  },
  {
    _id: 2,
    name: "product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=49" }],
  },
  {
    _id: 3,
    name: "product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=59" }],
  },
  {
    _id: 4,
    name: "product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=69" }],
  },
];

const ProductDetails = () => {
  const [productImg, setproductImg] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [selectedSize, setselectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  useEffect(() => {
    if (products.images.length > 1) {
      setproductImg(products.images[0].url);
      console.log(productImg);
    }

    // return () => {
    //   second
    // }
  }, [products.images]);

  function handleQuantityChange(value) {
    if (value === "inc") {
      setQuantity((prev) => prev + 1);
    }
    if ((value == "dec") & (quantity != 0)) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleAddToCart() {
    if (!selectedSize || !selectedColor) {
      toast.error("Select a size and a prefered color");
      return;
    }
    setbuttonDisabled(true);

    setTimeout(() => {
      toast.success("Item added to cart", {
        duration: 1000,
      });
      setbuttonDisabled(false);
    }, 500);
  }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex space-y-4 flex-col mr-6">
            {products.images.map((image, index) => {
              return (
                <img
                  onClick={() => setproductImg(image.url)}
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
                src={productImg}
                alt={products.images[0]?.alt}
                className="h-auto w-full rounded"
              />
            </div>
          </div>

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {products.images.map((image, index) => {
              return (
                <img
                  onClick={() => setproductImg(image.url)}
                  key={index}
                  src={productImg}
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

            <p className="text-xl text-gray-500 mb-2">
              ${products.discountPrice}
            </p>

            <p className="text-gray-600 mb-4">{products.description}</p>

            <div className="flex gap-2 mt-2">
              {products.colors.map((color) => (
                <button
                  onClick={() => setselectedColor(color)}
                  key={color}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color
                      ? "border-4 border-black"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color.toLocaleLowerCase(),
                    filter: "brightness(0.5)",
                  }}
                ></button>
              ))}
            </div>

            <div className="mb-4">
              <p className="text-gray-700"> Size:</p>
              <div className="flex gap-2 mt-2">
                {products.sizes.map((size) => (
                  <button
                    onClick={() => setselectedSize(size)}
                    key={size}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("inc")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("dec")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
              </div>
            </div>
            <button
              disabled={buttonDisabled}
              onClick={handleAddToCart}
              className={`text-white bg-black py-2 px-6 w-full mb-4 ${
                buttonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : " hover:bg-gray-900"
              }`}
            >
              {buttonDisabled ? "Adding...." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{products.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl text-center font-medium mb-4">
            {" "}
            You May Also Like
          </h2>
          <ProductsGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
