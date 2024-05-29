import React, { useState } from 'react';
import Modal from 'react-modal';

const eventsData = [
    {
        id: 1,
        date: '2024-05-11',
        title: 'Farewell to our guest from Russia ',
        description: 'A farewell party to our guest Evan.',
        images: ['/images/Farewell.webp', '/images/Farewell.webp'],
    }, {
        id: 2,
        date: '2024-04-14',
        title: 'Maidaan: Movie',
        description: 'A day out to watch a movie with Aryans Family',
        images: ['/images/Maidaan2.webp', '/images/Maidaan1.webp', '/images/Maidaan3.webp'],
    },
    {
        id: 3,
        date: '2024-03-29',
        title: 'Sportz Seminar',
        description: 'Session by: Owners, Technical Staff, Nutritionist, Physio and Founder members',
        images: ['path/to/image2.jpg', '/images/Farewell.webp'],
    },
    {
        id: 4,
        date: '2024-03-23',
        title: 'Ram Vishwakarma Memorial Trophy',
        description: 'A match held in memory of ....... Ram Vishwakarma.',
        images: ['path/to/image3.jpg', '/images/Farewell.webp'],
    },
    {
        id: 5,
        date: '2024-03-29',
        title: 'Jersey Launch',
        description: 'Lauch of our new jersey',
        images: ['path/to/image2.jpg', '/images/Farewell.webp'],
    },

    // Add more events as needed
];

const Events = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openModal = (event) => {
        setSelectedEvent(event);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setModalIsOpen(false);
    };

    return (
        <div className="container mx-auto px-8 py-8 mt-[80px]">
            <h1 className="gradient-text text-3xl font-bold mb-4 text-center">Our Events</h1>
            <p className="text-left text-lg mx-12">At Aryans Football Club, we believe in the power of community and participation. 
            Throughout the season, we organize a variety of exciting events designed to engage and inspire every member of our club. 
            From competitive matches and skill-building workshops to community outreach programs and fun-filled family days, there 
            is something for everyone.</p><p className="text-left text-lg mx-12 mb-4">We encourage all players, coaches, parents, and 
            supporters to get involved and make the most of these opportunities. Our events not only enhance your football 
            skills but also foster teamwork, sportsmanship, and a strong sense of belonging. Join us and be a part of the 
            vibrant Aryans FC community, where every event is a step towards growth and camaraderie.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventsData.map((event) => (
                    <div key={event.id} className="bg-white shadow-xl rounded-lg p-6 cursor-pointer" onClick={() => openModal(event)}>
                        <img src={event.images[0]} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-600 mb-4">{new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
                    <div className="bg-white p-6 mt-16 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                        <p className="text-gray-600 mb-4">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                        <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedEvent.images.map((image, index) => (
                                <img key={index} src={image} alt={`${selectedEvent.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                            ))}
                        </div>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Events;
