import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-[1235px] mx-auto px-4 md:px-8 flex justify-between items-center h-16">

        <a className="text-xl font-bold">CS — Ticket System</a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changeing</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <button className="btn text-white bg-gradient-to-r from-[#642FE3] to-[#968dff] flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> New Ticket
          </button>
        </ul>

        {/* Mobile  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
          <li><a className="block">Home</a></li>
          <li><a className="block">FAQ</a></li>
          <li><a className="block">Changeing</a></li>
          <li><a className="block">Blog</a></li>
          <li><a className="block">Download</a></li>
          <li><a className="block">Contact</a></li>
          <button className="w-full btn text-white bg-gradient-to-r from-[#642FE3] to-[#968dff] flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPlus} /> New Ticket
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
