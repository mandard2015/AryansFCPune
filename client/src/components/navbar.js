import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React from "react";
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    const scrollToContact = () => {
        scroll.scrollToBottom({ duration: 500 });
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <Link to="/" className="text-xl font-bold text-gray-800">AryansFCPune</Link>
                    <button className="block md:hidden focus:outline-none">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="font-semibold text-gray-800 hover:text-gray-600">Home</Link>
                        <Link to="/about" className="font-semibold text-gray-800 hover:text-gray-600">About Us</Link>
                        <Link to="/team" className="font-semibold text-gray-800 hover:text-gray-600">Our Team</Link>
                        <Link to="/reviews" className="font-semibold text-gray-800 hover:text-gray-600">Reviews</Link>
                        <ScrollLink to="contact" smooth duration={500} className="font-semibold text-gray-800 hover:text-gray-600 cursor-pointer" 
                        onClick={scrollToContact}>Contact Us</ScrollLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppNavbar;