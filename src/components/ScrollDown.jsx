import React from 'react'
import scrollDown from '../Assests/Images/scroll-down.png'

function ScrollDown() {
  return (
    <div className='w-full h-auto pb-5 flex items-center justify-center mt-[-43px]  max-lg:-mt-0 bg-white'>
   <div className='bg-white'>
    <img src={scrollDown} alt="" className='relative bottom-0 w-[9.5rem] max-md:w-[8rem] text-center' />
    </div>
    </div>
  )
}

export default ScrollDown