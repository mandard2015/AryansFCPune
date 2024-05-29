import React from 'react';
import AppNavbar from './navbar';
import Footer from './footer';
import WhatsAppIcon from './whatsappIcon';

const Team = () => {
    return (
        <div className="flex flex-col min-h-screen mt-16">
            {/* <AppNavbar /> */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="gradient-text text-3xl font-bold mb-2 text-center mt-8">Our Team</h1>
                <p className="text-xl text-center">Meet our dedicated team members who make everything possible.</p>
                <h3 className="gradient-text text-3xl font-bold mb-2 text-center mt-8">Coaches</h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Team member cards */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img src="path/to/photo1.jpg" alt="Coach 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold"> Name 1</h3>
                        <p className="text-gray-600">Position 1</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img src="path/to/photo2.jpg" alt="Coach 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold"> Name 2</h3>
                        <p className="text-gray-600">Position 2</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img src="path/to/photo3.jpg" alt="Coach 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold"> Name 3</h3>
                        <p className="text-gray-600">Position 3</p>
                    </div>
                    {/* Add more team member cards as needed */}
                </div>

            </main>
            {/* <Footer />
            <WhatsAppIcon /> */}
        </div>
    );
};

export default Team;
