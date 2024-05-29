import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen mt-16 text-white" style={{ backgroundImage: "url('/images/football1.webp')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Welcome to Aryans FC Pune</h1>
                        <p className="text-lg text-left mx-12 mb-6 ">We are delighted to welcome you to our Academy. The Club has a proud tradition of developing
                            home grown footballers, many of whom have gone on to play not only in our first team but have also represented State and
                            Nation.<br />We sincerely hope that you enjoy your experience as a player within our Academy and look forward to seeing you
                            progress through our system</p><p className="text-xl text-right mx-12 mb-6"> ~ Best wishes & Good Luck
                            Aryans Board Members
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2> */}
                    <p className="text-gray-700 font-bold text-xl text-left">
                    Founded in [Year] and nestled in the vibrant city of Pune, Aryans Football Club is a premier institution dedicated 
                    to nurturing football talent. As a proud member of the Pune District Football Association (PDFA), we are committed 
                    to maintaining the highest standards of football excellence and community engagement.</p>
                    <p className="text-gray-700 font-bold text-xl text-left ">At Aryans FC, we believe in the power of youth development. Our 
                    Academy Performance Plan is crafted to attract, develop, and retain the finest young talents in the PCMC region. 
                    With top-tier coaching, state-of-the-art facilities, and a supportive environment, we ensure every player has the opportunity to excel and grow.</p>
                    <p className="text-gray-700 font-bold text-xl text-left ">Join us at Aryans Football Club and become part of a passionate 
                    football family. We are excited to accompany you on your journey and watch you thrive in our dynamic program. 
                    Welcome to the next chapter of your football adventure!</p>
                    {/* AryansFCPune is a passionate football club dedicated to fostering talent and achieving excellence on the field.
                        Our mission is to provide a platform for aspiring footballers to showcase their skills and reach new heights in their careers. */}
                </div>
            </section>

            {/* Additional Sections */}
            <section id="product" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">For Admission and Enquiry Contact</h2>
                    <h3 className="text-gray-700 text-2xl font-bold text-center">
                    9657650293
                    </h3>
                    {/* Add content about your team here */}
                </div>
            </section>

            <section id="reviews" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Reviews</h2>
                    <p className="text-gray-700 text-center mb-8">
                        Hear from our fans and players about their experiences with AryansFCPune.
                    </p>
                    {/* Add reviews content here */}
                </div>
            </section>
        </div>
    );
};

export default Home;
