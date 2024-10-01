import React, { useState } from "react";
import Logo from "../Assests/Images/logo.png";
import { IoBagHandleSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaInfinity } from "react-icons/fa6";
function Navbar() {
  const [visibleMenu, setvisibleMenu] = useState(false);
  const showMenu = () => {
    setvisibleMenu(true);
  };
  const hideMenu = () => {
    setvisibleMenu(false);
  };
  return (
    <>
      <div className="flex h-24 w-full justify-between px-12  items-center animate-fadeindown">
        <div className="  justify-center items-center flex text-white  px-6 max-md:px-2 py-2 gap-3  lg:text-2xl">
          <img src={Logo} alt="" className="w-8 max-sm:w-6 " />
          <span>Pop Rock Crystal</span>
        </div>

        <div className="text-white max-w-[40rem] flex items-center justify-end ml-48 max-lg:ml-14 max-md:ml-6 max-sm:hidden">
          <ul className="flex gap-14 max-lg:gap-8 ">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="p-4 flex justify-center items-center gap-4">
<span className="text-white bg-[#FF2B77] rounded-full px-1 py-[1px] text-sm">00</span>
          <IoBagHandleSharp className="text-2xl text-white max-md:text-xl" />
          <div className="sm:hidden" onClick={showMenu}>
            <BsList className="text-xl text-white " />
          </div>
        </div>
      </div>

      {
            !visibleMenu ? "":  <div className="bg-white w-60 absolute right-0 top-0 py-4">
            <div className="flex justify-end pr-6">
              <div
                className="w-14 flex items-center justify-center p-2"
                onClick={hideMenu}
              >
                <IoClose className="text-gray-400 text-2xl" />
              </div>
             
            </div>
            <ul>
              <li className=" border-b-[1px] px-2 py-3 text-center hover:bg-gray-100">
                Home
              </li>
              <li className=" border-b-[1px] px-2 py-3 text-center hover:bg-gray-100">
                Shop
              </li>
              <li className=" border-b-[1px] px-2 py-3 text-center hover:bg-gray-100">
                About Us
              </li>
              <li className=" border-b-[1px] px-2 py-3 text-center hover:bg-gray-100">
                Help
              </li>
            </ul>
          </div>
          }

     
    </>
  );
}

export default Navbar;
