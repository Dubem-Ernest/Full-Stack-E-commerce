import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductsGrid from "../Components/Products/ProductsGrid";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import FeatureSection from "../Components/Products/FeatureSection";
const placeholder = [
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
  {
    _id: 5,
    name: "product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=79" }],
  },
  {
    _id: 6,
    name: "product 6",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=89" }],
  },
  {
    _id: 7,
    name: "product 7",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=99" }],
  },
  {
    _id: 8,
    name: "product 8",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=100" }],
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 classNa me="text-3xl text-center mb-4 font-bold">Best sellers</h2>
      <ProductDetails />

      <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">Top Wears For Women</h2>
          <ProductsGrid products={placeholder}/>
      </div>
      
      <FeaturedCollection/>
      <FeatureSection/>
    </div>
  );
};

export default Home;
