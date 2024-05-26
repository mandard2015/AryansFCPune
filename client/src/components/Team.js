import React from 'react';
import AppNavbar from './navbar';
import Footer from './footer';
import WhatsAppIcon from './whatsappIcon';

const Team = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AppNavbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="container mt-4 mx-auto px-4">
                    <h1 className="text-3xl text-gray-600 font-bold mt-8">Our Team</h1>
                    <p className="mt-4">Meet our dedicated team members who make everything possible.</p>
                </div>
            </main>
            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default Team;
