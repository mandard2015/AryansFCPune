import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4">
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
            {/* <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around text-center md:text-left font-semibold uppercase">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-xl mb-3">Contact Us</h4>
                        <h5 className="text-lg">Dastagir Diksangi</h5>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaPhone className="mr-2" /> 9657650293
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaPhone className="mr-2" /> 8222222222
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <FaEnvelope className="mr-2" /> aryansfcpune01@gmail.com
                        </p>
                        <p className="mb-1 flex items-center justify-center md:justify-start">
                            <IoLocationOutline className="mr-2" /> Pimpri, Pune - 411017
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl mb-3">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.facebook.com/aryans" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/laryans" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://wa.me/111111111" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="mailto:abc.@00gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                                <FaEnvelope size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-300 pt-4">
                <p>&copy; AryansFCPune 2024. All rights reserved.</p>
            </div> */}
        </footer>
    );
};

export default Footer;