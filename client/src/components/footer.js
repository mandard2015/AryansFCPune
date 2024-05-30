import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className='flex items-center mb-6 mx-4 sm:mx-8 md:mx-12'>
                    <a><img src='/Aryanslogo512.webp' className='rounded-xl h-10 m-0 pr-0' /></a>
                    <h2 className="text-xl font-bold gradient-text ml-4">Aryans Football Club Pune</h2>
                </div>
                <div className="flex flex-wrap mx-2 justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:pl-6">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li><a href="#home" className="hover:text-white">Home</a></li>
                            <li><a href="#about" className="hover:text-white">About Us</a></li>
                            <li><a href="#team" className="hover:text-white">Our Team</a></li>
                            <li><a href="#events" className="hover:text-white">Events</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold ml-4 mb-1">Contact Us</h2>
                        <h3 className="text-xl font-bold mt-0">pimpri</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaEnvelope className="mr-2" /> info@mywebsite.com</li>
                            <li className="flex items-center"><FaPhone className="mr-2" /> 9657650293</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> Telco Ground, Ajmera 411018</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 mt-8">
                        <h3 className="text-xl font-bold">pimpri</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaEnvelope className="mr-2" /> info@mywebsite.com</li>
                            <li className="flex items-center"><FaPhone className="mr-2" /> 9657650293</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> Telco Ground, Ajmera 411018</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/aryans" className="hover:text-white"><FaFacebook size={30} /></a>
                            <a href="#twitter" className="hover:text-white"><FaTwitter size={30} /></a>
                            <a href="#instagram" className="hover:text-white"><FaInstagram size={30} /></a>
                            <a href="#whatsapp" className="hover:text-white"><FaWhatsapp size={30} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} AryansFCPune. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;