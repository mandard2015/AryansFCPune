import React, { useState } from 'react';
import Coaches from './coaches';
import Players from './players';

const Team = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionClick = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    return (
        <div className="min-h-[80vh] mt-24 bg-white pt-6 px-1 sm:px-6">
            <h1 className="gradient-text text-3xl font-bold mb-2 text-center">Our Team</h1>
            <p className="text-xl text-center mb-4">Meet our dedicated team members who make everything possible.</p>
            <Menu activeSection={activeSection} onSectionClick={handleSectionClick} />
            <div className="content mt-4">
                {activeSection === 1 && <Coaches />}
                {activeSection === 2 && <Players />}
            </div>
        </div>
    );
};

const Menu = ({ activeSection, onSectionClick }) => {
    return (
        <div className="flex justify-around my-6">
            <button
                className={`text-2xl font-semibold w-1/2 py-2 hover:scale-105 hover:shadow-md relative ${activeSection === 1 ? 'bg-gradient-to-r from-red-700 to-blue-900 text-white' : 'bg-red-200 text-red-800'}`}
                onClick={() => onSectionClick(1)}
            >
                Trainers
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-red-600 transform transition-transform ${activeSection === 1 ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
            <button
                className={`text-2xl font-semibold w-1/2 py-2 hover:scale-105 hover:shadow-md relative ${activeSection === 2 ? 'bg-gradient-to-r from-red-700 to-blue-900 text-white' : 'bg-red-200 text-red-800'}`}
                onClick={() => onSectionClick(2)}
            >
                Players
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-red-600 transform transition-transform ${activeSection === 2 ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
        </div>
    );
};

export default Team;