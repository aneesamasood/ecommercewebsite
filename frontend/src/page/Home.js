import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const [filter, setFilter] = useState(""); // State for filtering
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable"
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Apply the filter logic to the arrays
  const filteredHomeProductCartList = homeProductCartList.filter(
    (el) => el.category.toLowerCase() === filter.toLowerCase()
  );

  const filteredHomeProductCartListVegetables = homeProductCartListVegetables.filter(
    (el) => el.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="p-2 md:p-4 bg-black text-white"> {/* Set background color here */}
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4212/4212257.png"
              className="h-7"
              alt="Fast Delivery"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Style Reimagined, Delivered to{" "}
            <span className="text-red-600 text-">Your Door.</span>
          </h2>
          <p className="py-3 text-base ">
            Welcome to Authentic Charm, where style meets convenience. Immerse
            yourself in our carefully curated collection, seamlessly blending
            fashion-forward trends with essential items for every facet of your
            life. At Authentic Charm, we prioritize quality and innovation,
            making your shopping experience both enjoyable and effortless.
            Elevate your lifestyle with the perfect blend of authenticity and
            charm.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {filteredHomeProductCartList[0]
            ? filteredHomeProductCartList.map((el) => (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              ))
            : loadingArray.map((el, index) => (
                <HomeCard key={index + "loading"} loading={"Loading..."} />
              ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-white mb-4">
            Trending
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {filteredHomeProductCartListVegetables[0]
            ? filteredHomeProductCartListVegetables.map((el) => (
                <CardFeature
                  key={el._id + "vegetable"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              ))
            : loadingArrayFeature.map((el, index) => (
                <CardFeature
                  loading="Loading..."
                  key={index + "cartLoading"}
                />
              ))}
        </div>
      </div>

      <AllProduct heading={"Filter"} />
    </div>
  );
};

export default Home;
