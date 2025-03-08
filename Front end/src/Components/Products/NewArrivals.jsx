import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollBar = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startx, setStartx] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(false);
  const [canscrollLeft, setcanscrollLeft] = useState(false);
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

  function handleMouseDown(e) {
    setIsDragging(true);
    setStartx(e.pageX - scrollBar.current.offsetLeft);
    setscrollLeft(scrollBar.current.scrollLeft);
  }

 

  function handleMouseUpOrLeave() {
    setIsDragging(false)
  }

  function handleMouseDown(e) {
    setIsDragging(true);
    setStartx(e.pageX - scrollBar.current.offsetLeft);
    setscrollLeft(scrollBar.current.scrollLeft)
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    const x = e.pageX - scrollBar.current.offsetLeft;
    const walk = x - startx;
    scrollBar.current.scrollLeft = scrollLeft - walk;
  }


  function scroll(dir) {
    const scrollAmt = dir == "left" ? -300 : 300;
    scrollBar.current.scrollBy({
      left: scrollAmt,
      behaviour: "smooth",
    });
  }

  const updateScrollButton = () => {
    const container = scrollBar.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setcanscrollLeft(leftScroll > 0);
      setcanScrollRight(rightScrollable);
    }
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
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          {" "}
          Discover the latest styles off the runway,freashly added to keep your
          wardrope on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            disabled={!canscrollLeft}
            onClick={() => scroll("left")}
            className={`p-2 rounded border  ${
              canscrollLeft
                ? " bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border  ${
              canScrollRight
                ? " bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollBar}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArr.map((product, index) => {
          return (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                draggable="false"
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
