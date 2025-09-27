import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='bg-black text-white mt-16 px-4 md:px-8 pt-20'>
      <div className='max-w-[1200px] mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-between'>

        <div className='flex-1 min-w-[250px]'>
          <h1 className='font-bold text-2xl mb-2'>CS — Ticket System</h1>
          <p className='text-[#777777]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className='flex-1 min-w-[150px]'>
          <h1 className='font-semibold text-xl mb-2'>Company</h1>
          <div className='text-[#777777] space-y-2'>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Sales</p>
          </div>
        </div>

        <div className='flex-1 min-w-[150px]'>
          <h1 className='font-semibold text-xl mb-2'>Services</h1>
          <div className='text-[#777777] space-y-2'>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>

        <div className='flex-1 min-w-[150px]'>
          <h1 className='font-semibold text-xl mb-2'>Information</h1>
          <div className='text-[#777777] space-y-2'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
        </div>

        <div className='flex-1 min-w-[150px]'>
          <h1 className='font-semibold text-xl mb-2'>Social links</h1>
          <div className='text-[#777777] space-y-2'>
            <p><FontAwesomeIcon icon={faCircleXmark} className='mr-2' /> @CS — Ticket System</p>
            <p><FontAwesomeIcon icon={faLinkedin} className='mr-2' /> @CS — Ticket System</p>
            <p><FontAwesomeIcon icon={faFacebook} className='mr-2' /> @CS — Ticket System</p>
            <p><FontAwesomeIcon icon={faEnvelope} className='mr-2' /> support@cst.com</p>
          </div>
        </div>

      </div>

      <div className='text-center text-white mt-12 border-t border-[#777777] py-4'>
        <p className='text-sm'>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
