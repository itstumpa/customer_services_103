import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React component to render icons
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className=' bg-black h-auto mt-16 px-8 pt-20 '>
      <div className='max-w-[1200px] mx-auto flex  justify-between text-white' >
<div>
      <h1 className='font-bold text-2xl mb-2'>CS — Ticket System</h1>
      <p className='w-[350px] text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div>
      <h1 className='font-semibold text-xl mb-2'>Company</h1>
      <div className='text-[#777777] spacey-y-8'>

      <p>About Us</p>
      <p>Our Mission</p>
      <p>Contact Saled</p>
      </div>
</div>
<div>
      <h1 className='font-semibold text-xl mb-2'>Services</h1>
      <div className='text-[#777777] spacey-y-8'>

      <p>Products & Services</p>
      <p>Customer Stories</p>
      <p>Download Apps</p>
      </div>
</div>
<div>
      <h1 className='font-semibold text-xl mb-2'>Information</h1>
      <div className='text-[#777777] space-y-1'>

      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <p>Join Us</p>
      </div>
</div>
<div>
      <h1 className='font-semibold text-xl mb-2'>Social links</h1>
      <div className='text-[#777777] space-y-1'>

      <p><FontAwesomeIcon icon={faCircleXmark} /> @CS — Ticket System</p>
      <p><FontAwesomeIcon icon={faLinkedin} /> @CS — Ticket System</p>
      <p><FontAwesomeIcon icon={faFacebook} /> @CS — Ticket System</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> support@cst.com</p>
      </div>
</div>
      </div>
<div className='text-white text-center h-[60px] border-t-2 flex items-center justify-center border-[#777777] w-[1200px] mx-auto mt-12'>
      <p className='text-sm'>© 2025 CS — Ticket System. All rights reserved.</p></div>
    </div>
  )
}

export default Footer
