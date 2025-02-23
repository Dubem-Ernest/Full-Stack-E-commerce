import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollBar = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startx, setStartx] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(false);
  const [canScrollRight, setcanScrollRight] = useState(true);

  const newArr = [
    {
      id: "1",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "2",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "3",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "4",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "5",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "6",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "stylish jacket",
        },
      ],
    },
    {
      id: "7",
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "stylish jacket",
        },
      ],
    },
  ];

  const updateScrollButton = () => {
    const container = scrollBar.current;

  
  };

  useEffect(() => {
    const container = scrollBar.current;
    console.dir(container);
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }

    // return () => {
    //   null;
    // };
  },[]);

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          {" "}
          Discover the latest styles off the runway,freashly added to keep your
          wardrope on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>

          <button className="p-2 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollBar}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative "
      >
        {newArr.map((product, index) => {
          return (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0].altText || p.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product.id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;
