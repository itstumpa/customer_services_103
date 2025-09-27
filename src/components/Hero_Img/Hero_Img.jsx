import React from 'react';
import vectorImg from '../../assets/vector1.png';

const Hero_Img = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-4 mt-8 px-4 md:px-0'>
      <div className='relative w-full md:w-1/2 h-48 md:h-52 bg-gradient-to-r from-[#642FE3] via-[#8A50ED] to-[#968dff] text-white flex flex-col items-center justify-center rounded-md overflow-hidden'>
        <img className='absolute w-60 h-full object-cover z-0 top-0 left-0' src={vectorImg} alt="" />
        <img className='absolute w-60 h-full object-cover z-0 top-0 right-0 scale-x-[-1]' src={vectorImg} alt="" />
        <h1 className='relative z-10 text-lg md:text-xl'>In-progress</h1>
        <h1 className='text-3xl md:text-4xl font-bold relative z-10'>{inProgressCount}</h1>
      </div>

      <div className='relative w-full md:w-1/2 h-48 md:h-52 bg-gradient-to-l from-[#01827A] via-[#32B070] to-[#54CF68] text-white flex flex-col items-center justify-center rounded-md overflow-hidden'>
        <img className='absolute w-60 h-full object-cover z-0 top-0 left-0' src={vectorImg} alt="" />
        <img className='absolute w-60 h-full object-cover z-0 top-0 right-0 scale-x-[-1]' src={vectorImg} alt="" />
        <h1 className='relative z-10 text-lg md:text-xl'>Resolved</h1>
        <h1 className='text-3xl md:text-4xl font-bold relative z-10'>{resolvedCount}</h1>
      </div>
    </div>
  );
};

export default Hero_Img;
