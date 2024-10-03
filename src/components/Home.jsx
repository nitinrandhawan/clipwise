import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Pagination from './Pagination'
import wavyefffect from '../Assests/Images/vector1.png'
function Home() {
 
  return (
    <div className='h-[115vh]   bg-cover bg-fixed bg-center  max-lg:h-full overflow-hidden relative' style={{ backgroundImage: `url('../src/Assests/Images/background-img.png')` }}>
  <Navbar/>
  <div className='absolute bottom-[-8px] z-0'>
    <img src={wavyefffect} alt="" className='relative bottom-0 w-screen  ' />
  </div>
  <div className="flex justify-between items-center px-16 w-full h-[calc(100vh-96px)] max-lg:flex-col max-lg:justify-around max-lg:h-full max-lg:gap-5  max-md:h-auto max-md:gap-20 z-50">
    <div className='flex flex-col gap-2 text-white animate-fadeinleft opacity-0'>
      
<span className='text-[2.6rem] relative top-5 max-sm:text-2xl'>Welcome to</span>
<h1 className='text-7xl pb-6 font-bold max-sm:text-4xl'>Pop Rock Crystal Shop!</h1>
<p className='text-[14px] w-96 pb-8 text-black max-sm:w-full'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
</p>
<div className='flex gap-5 items-center'>

    <button  className="relative inline-flex items-center justify-start   overflow-hidden  transition-all  hover:bg-[#317189] group bg-white px-10 py-4 rounded-2xl  font-bold">
<span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-[#317189] rounded-2xl"></span>
<span className="relative w-full text-left text-[#317189] transition-colors duration-200 ease-in-out group-hover:text-white">SHOP NOW</span>
</button>

  <button className='text-[#317189] text-xl'>
    about us
  </button>
</div>
    </div>
    <div>

<div className='animate-fadeinright opacity-0 z-50 relative'>
  <Pagination/>
</div>
    </div>
  </div>
  
    </div>
  )
}

export default Home