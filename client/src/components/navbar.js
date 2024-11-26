import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaFutbol } from "react-icons/fa";

const Navbar = () => {
    const scrollToContact = () => {
        scroll.scrollToBottom({ duration: 500 });
    };

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (scrnclick) => {
            if (menuRef.current && !menuRef.current.contains(scrnclick.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50" ref={menuRef}>
            <div className="container mx-auto px-2 sm:px-8">
                <div className="flex justify-between items-center h-[5.6rem] py-3">
                    <div className='flex items-center'>
                        <a><img src='/Aryanslogo512.webp' alt='AryansFC logo' className='h-14 w-14 m-0 p-0' /></a>
                        <Link to="/" className="text-lg sm:text-xl font-bold gradient-text ml-1">Aryans Sports and Social Foundation</Link>
                    </div>
                    <div className="hidden text-center text-lg font-bold gradient-text md:flex space-x-4">
                        <Link to="/" className="hover:text-gray-800 "><FaFutbol className="inline-block mr-1" />Home</Link>
                        <Link to="/about" className="hover:text-gray-800"><FaFutbol className="inline-block mr-1" />About Us</Link>
                        <Link to="/team" className="hover:text-gray-800"><FaFutbol className="inline-block mr-1" />Our Team</Link>
                        <Link to="/event" className="hover:text-gray-800"><FaFutbol className="inline-block mr-1" />Events</Link>
                        <ScrollLink to="contact" smooth duration={500} className="hover:text-gray-800 cursor-pointer"
                            onClick={scrollToContact}><FaFutbol className="inline-block mr-1" />Contact Us</ScrollLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="gradient-text hover:text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6 text-red-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <Link to="/" className="font-semibold block px-4 py-1 gradient-text hover:text-gray-800" onClick={closeMenu}><FaFutbol className="inline-block mr-1" />Home</Link>
                        <Link to="/about" className="font-semibold block px-4 py-1 gradient-text hover:text-gray-800" onClick={closeMenu}><FaFutbol className="inline-block mr-1" />About</Link>
                        <Link to="/team" className="font-semibold block px-4 py-1 gradient-text hover:text-gray-800" onClick={closeMenu}><FaFutbol className="inline-block mr-1" />Our Team</Link>
                        <Link to="/event" className="font-semibold block px-4 py-1 gradient-text hover:text-gray-800" onClick={closeMenu}><FaFutbol className="inline-block mr-1" />Events</Link>
                        <ScrollLink to="contact" smooth duration={500} className="font-semibold block px-4 py-1 gradient-text hover:text-gray-800" onClick={closeMenu}><FaFutbol className="inline-block mr-1" />Contact</ScrollLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;