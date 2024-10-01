import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import image from '../Assests/Images/image.png'
import image2 from '../Assests/Images/image2.png'
import image3 from '../Assests/Images/image3.png'
import image4 from '../Assests/Images/image4.png'

const Pagination = () => {
  const cardData = [
    { id: 1, title: "Crystal Agate Phone Grip", image: image, price: "$18.99" },
    { id: 2, title: "Crystal Quartz Bracelet", image: image2, price: "$24.99" },
    { id: 3, title: "Opal Moonstone Ring", image:image3 , price: "$9.49" },
    { id: 4, title: "Sapphire Gemstone Necklace", image: image4, price: "$17.29" },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Tracks current page
  const totalPages = cardData.length;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentCard = cardData[currentPage - 1];

  return (


    <>
<div className="flex flex-col items-center">
  <div className='bg-white rounded-[3rem] w-[31rem] h-[31rem] flex items-center flex-col justify-evenly relative overflow-hidden shadow-around hover:scale-95 duration-500 max-md:w-[27rem] max-md:h-[27rem] max-md:scale-90 max-sm:w-[23rem] max-sm:h-[23rem] max-sm:scale-75'>
    <div className='bg-[#8A93E5] px-6 py-[0.6rem] text-white top-[89px] left-0 absolute rounded-r-md'>
      New lot
    </div>
    <img src={currentCard.image} alt="" className='object-cover rounded-full w-[20rem] h-[20rem] max-md:w-[18rem] max-md:h-[18rem] max-sm:w-[15rem] max-sm:h-[15rem]' />
    <hr className='h-[2px] w-40 bg-gray-500 opacity-20' />
    <p className='text-xl text-gray-400 max-md:text-base -mt-[29px]'>
      {currentCard.title} <span className='text-[#317189] font-bold max-md:text-base'>- {currentCard.price}</span>
    </p>
  </div>

  <div className="flex items-center justify-center gap-5 my-8">
    <button
      onClick={handlePrevious}
      className={`p-3 rounded-lg ${
        currentPage === 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#8992e3] cursor-pointer"
      } text-white`}
      disabled={currentPage === 1}
    >
      <FaArrowAltCircleLeft className="text-xl max-md:text-sm" />
    </button>

    <div className="flex gap-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentPage === index + 1 ? "bg-[#8992e3]" : "bg-purple-200"
          }`}
        ></div>
      ))}
    </div>

    <button
      onClick={handleNext}
      className={`p-3 rounded-lg ${
        currentPage === totalPages
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#8992e3] cursor-pointer"
      } text-white`}
      disabled={currentPage === totalPages}
    >
      <FaArrowAltCircleRight className="text-xl max-md:text-sm" />
    </button>
  </div>
</div>


    
    </>

  );
};

export default Pagination;



