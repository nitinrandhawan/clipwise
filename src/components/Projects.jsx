import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
const [viewAllCards,setviewAllCards]=useState(false)
const showMoreCards=()=>{
setviewAllCards(true)
}
const showLessCards=()=>{
  setviewAllCards(false)
}
useEffect(() => {
  AOS.init({
    duration: 1500,
    once:false,
    offset:100,
    
  });
}, []);
  return (
    <div className="h-auto ">
      <div className="pb-16  py-12 pt-16 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl   font-bold text-[#215365] ">All product</h1>
        <hr className="w-20 opacity-30 bg-gray-400 h-1 text-center" />
      </div>
      <div className="flex gap-3 max-sm:flex-col">
        <div className="flex items-center justify-center gap-2 pl-16 mb-10 max-sm:flex-col">
          <label htmlFor="products" className="text-gray-400 font-bold">
            Filter:{" "}
          </label>

          <select id="products" className="font-bold text-center text-[#215365] ">
            <option value="">All Products</option>
            <option value="volvo">Opal Moonstone Ring</option>
            <option value="saab">Rose Quartz Phone Grip</option>
            <option value="opel">Sapphire Gemstone Necklace</option>
            <option value="audi">Emerald Glow Earrings</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-2 pl-16 mb-10">
          <label htmlFor="products" className="text-gray-400 font-bold">
            Sort:{" "}
          </label>

          <select id="products" className="font-bold text-[#215365] ">
            <option value="">Best Selling</option>
            <option value="volvo">10% off</option>
            <option value="saab">20% off</option>
            <option value="opel">30% off</option>
            <option value="audi">40% off</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-4  lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 px-14 place-items-center max-sm:scale-75 " data-aos="fade-down">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    {
      viewAllCards ? (
      <>
      <Cards/>
      <Cards/>
      <Cards/>
      </>

      ) : ""
    }
      </div>
      {
        !viewAllCards ? <div className="flex items-center justify-center py-[3.5rem]  w-full ">
        <button
      
        onClick={showMoreCards}
        className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border-2 border-blue-500 rounded-xl shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          View All
        </span>
        <span className="relative invisible">View All</span>
      </button>
        </div> : 
        <div className="flex items-center justify-center py-[3.5rem]  w-full ">
        <button
      
      onClick={showLessCards}
      className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-blue-700 transition duration-300 ease-out border-2 border-blue-500 rounded-xl shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        Show Less
      </span>
      <span className="relative invisible">Show Less</span>
    </button>
    </div>
      }
      
    
    </div>
  );
}

export default Projects;
