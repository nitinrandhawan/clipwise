import React, { useEffect } from 'react'

import picture from '../Assests/Images/image.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

 
function Cards({image=picture,heading="CRYSTAL AGATE PHONE GRIP",price="18.99$"}) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once:false,
      offset:100,
      
    });
  }, []);
  return (
    <div className="shadow-around py-7 px-6 flex flex-col items-center gap-4 rounded-3xl w-[21rem] m-2 mt-9 "  data-aos="fade-in">
    <img src={image} alt="" />
    <h3 className="text-xl mt-4">{heading}</h3>
    <span className="text-[#317189] font-bold text-xl -mt-4 mb-4">
      {price}
    </span>

    <a
      href="https://www.linkedin.com/in/nitin-gupta-b7a9a02a1/"
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
        BUY NOW
      </span>
      <span className="relative invisible">BUY NOW</span>
    </a>
  </div>
  )
}

export default Cards