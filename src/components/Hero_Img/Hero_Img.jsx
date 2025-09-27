import React from 'react'
import vectorImg from '../../assets/vector1.png'; // ✅ import the image

const Hero_Img = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex items-center gap-4 mt-22'>
      <div className='h-[200px] bg-gradient-to-r from-[#642FE3] via-[#8A50ED] to-[#968dff] text-white items-center flex flex-col justify-center text-center rounded-md text-2xl gap-2 w-1/2 relative'>
      <img className='absolute  w-[240px] h-full object-cover z-0 top-0 left-0' src={vectorImg} alt="" />
      <img className='absolute  w-[240px] h-full object-cover z-0 top-0 right-0 scale-x-[-1]' src={vectorImg} alt="" />
            <h1 className='relative z-10'>In-progress</h1>
            <h1 className='text-4xl font-bold relative z-10'>0</h1>
      </div>
      
    <div className='h-[200px] bg-gradient-to-l from-[#01827A] via-[#32B070] to-[#54CF68] text-white items-center flex flex-col justify-center text-center rounded-md text-2xl gap-2 w-1/2 relative'>
    <img className='absolute  w-[240px] h-full object-cover z-0 top-0 left-0' src={vectorImg} alt="" />
      <img className='absolute  w-[240px] h-full object-cover z-0 top-0 right-0 scale-x-[-1]' src={vectorImg} alt="" />
            <h1 className='relative z-10'>Resolved</h1>
            <h1 className='text-4xl font-bold relative z-10'>0</h1>
      </div>
      
    </div>
  )
}

export default Hero_Img

