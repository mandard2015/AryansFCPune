import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaFutbol } from "react-icons/fa";

const Navbar = () => {
    const scrollToContact = () => {
        scroll.scrollToBottom({ duration: 500 });
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className='flex items-center'>
                        <a><img src='/Aryanslogo512.webp' className='h-14 m-0 p-0' /></a>
                        <Link to="/" className="text-xl font-bold text-gray-800 ml-1">Aryans Football Club Pune</Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="font-semibold text-gray-800 hover:text-gray-600 "><FaFutbol className="inline-block mr-2" />Home</Link>
                        <Link to="/about" className="font-semibold text-gray-800 hover:text-gray-600"><FaFutbol className="inline-block mr-2" />About Us</Link>
                        <Link to="/team" className="font-semibold text-gray-800 hover:text-gray-600"><FaFutbol className="inline-block mr-2" />Our Team</Link>
                        <Link to="/event" className="font-semibold text-gray-800 hover:text-gray-600"><FaFutbol className="inline-block mr-2" />Events</Link>
                        <ScrollLink to="contact" smooth duration={500} className="font-semibold text-gray-800 hover:text-gray-600 cursor-pointer"
                            onClick={scrollToContact}><FaFutbol className="inline-block mr-2" />Contact Us</ScrollLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <Link to="/" className="block px-4 py-1 text-gray-800 hover:text-gray-600">Home</Link>
                        <Link to="/about" className="block px-4 py-1 text-gray-800 hover:text-gray-600">About</Link>
                        <Link to="/team" className="block px-4 py-1 text-gray-800 hover:text-gray-600">Our Team</Link>
                        <Link to="/event" className="block px-4 py-1 text-gray-800 hover:text-gray-600">Events</Link>
                        <ScrollLink to="contact" smooth duration={500} className="block px-4 py-1 text-gray-800 hover:text-gray-600">Contact</ScrollLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;