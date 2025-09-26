import React from 'react'

const Hero_Img = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex items-center gap-4 mt-22'>
      <div className='h-[200px] bg-gradient-to-r from-[#8447ff] to-[#b5aff5] text-white items-center flex flex-col justify-center text-center rounded-md text-2xl gap-2 w-1/2 relative'>
      <img className='absolute w-full h-full object-cover z-0 top-0 left-0' src="../../assets/vector1.png" alt="" />
            <h1 className='relative z-10'>In-progress</h1>
            <h1 className='text-4xl font-bold relative z-10'>0</h1>
      </div>
      
    <div className='h-[200px] bg-gradient-to-l from-[#005b14] to-[#b6e6bf] text-white items-center flex flex-col justify-center text-center rounded-md text-2xl gap-2 w-1/2'>
            <h1>Resolved</h1>
            <h1 className='text-4xl font-bold'>0</h1>
      </div>
      
    </div>
  )
}

export default Hero_Img

