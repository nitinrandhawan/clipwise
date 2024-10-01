import React, { useEffect } from "react";
import image from "../Assests/Images/image.png";
import eliipse from '../Assests/Images/ellipse.png'
import vector2 from '../Assests/Images/vector2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Price() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once:false,
      
    });
  }, []);
  return (
    <div className="h-[110vh]  bg-gradient-to-tr from-[#36d1f4] from-35% via-blue-200 to-blue-400 relative to-80%   overflow-hidden ">
        <div>
            <img src={vector2} alt="" className="w-[97rem] absolute -top-[147px] 2xl:w-[220rem]"/>
        </div>
      <div className="flex justify-end items-center  w-full  max-2xl:flex-col max-2xl:gap-32 max-sm:justify-center">
        <div className="flex flex-col gap-2 text-white  items-end z-50 max-sm:items-center">
          <span className="text-[2.8rem] relative top-2 text-[#31546D] max-md:text-4xl max-sm:text-2xl">
            BEST PRICE
          </span>
          <h1 className="text-7xl pb-6 font-bold text-[#31546D] max-md:text-5xl max-sm:text-3xl">
            Agate Phone Grip
          </h1>
          <div className="flex gap-3 items-center">
            <span className=" text-[1.8rem] text-[#41A0B7] line-through max-md:text-3xl">44.50$</span>
            <span className="text-[#E35B3E] text-7xl font-bold max-md:text-5xl max-sm:text-3xl">19.50$</span>
          </div>
          <p className="text-[16px] w-[26rem] pb-8 text-[#31546D] text-end max-md:text-[12px] max-sm:w-[80%]">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <div className="flex gap-5 items-center ">
            <button className=" items-center justify-start   overflow-hidden  transition-all  hover:bg-[#51b8e7]  bg-[#75CCEB] px-10 py-4 rounded-2xl  font-bold max-md:text-sm ">
              BUY NOW
            </button>
          </div>
        </div>
       <div className="flex justify-center items-center  ml-14 w-ful relative max-md:scale-75 max-sm:scale-50">
  <div className="bg-white absolute rounded-full w-[35rem] h-[35rem] shadow-around2 flex items-center justify-center z-50 right-[30px]" data-aos="zoom-in-down"  data-aos-offset="450">
    <div className="bg-white rounded-full w-[22rem] h-[22rem] flex items-center flex-col justify-evenly absolute overflow-hidden shadow-md z-50   ">
      <img
        src={image}
        alt=""
        className="object-cover rounded-full max-w-[18rem] max-h-[18rem] mr-2"
      />
    </div>
  </div>
  <img src={eliipse} alt="" className="z-30 rotate-50 top-[89px] left-0 w-[42rem] relative"/>
</div>

      </div>
    </div>
  );
}

export default Price;
