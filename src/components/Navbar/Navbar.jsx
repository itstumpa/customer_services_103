import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // React component to render icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";       // Import the plus icon



const Navbar = () => {
  return (
    <div className="  bg-white">
      <div className='navbar max-w-[1235px] mx-auto '>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changeing</a></li>
            <li><a>Blog</a></li>
            <li><a>Downoad</a></li>
            <li><a>Contact</a></li>
            <button className=" ml-2 btn text-white bg-gradient-to-r from-[#624aff] to-[#8e89c1]  flex items-center gap-2 ">  <FontAwesomeIcon icon={faPlus} /> New Ticket</button>
      
    </ul>
  </div>
  </div>
</div>
  );
};

export default Navbar;