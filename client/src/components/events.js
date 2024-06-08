import React, { useState } from 'react';
import Modal from 'react-modal';

const eventsData = [
    {
        id: 1,
        date: '2024-05-11',
        title: 'Farewell to our guest from Russia ',
        description: 'A farewell party to our guest Evan.',
        images: ['/images/Farewell.webp', '/images/Farewell1.webp','/images/Farewell3.webp','/images/Farewell2.webp','/images/Farewell4.webp'],
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
        images: ['/images/seminar1.webp', '/images/seminar2.webp','/images/seminar5.webp','/images/seminar3.webp','/images/seminar4.webp','/images/seminar6.webp'],
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
        <div className="container mx-auto px-4 py-8 mt-[80px]">
            <h1 className="gradient-text text-3xl font-bold mb-4 text-center">Our Events</h1>
            <p className="text-left text-lg mx-4 sm:mx-8 md:mx-24">At Aryans Football Club, we believe in the power of community and participation. 
            Throughout the season, we organize a variety of exciting events designed to engage and inspire every member of our club. 
            From competitive matches and skill-building workshops to community outreach programs and fun-filled family days, there 
            is something for everyone.</p><p className="text-left text-lg mx-4 sm:mx-8 md:mx-24 mb-4">We encourage all players, coaches, parents, and 
            supporters to get involved and make the most of these opportunities. Our events not only enhance your football 
            skills but also foster teamwork, sportsmanship, and a strong sense of belonging. Join us and be a part of the 
            vibrant Aryans FC community, where every event is a step towards growth and camaraderie.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 sm:mx-8 md:mx-24">
                {eventsData.map((event) => (
                    <div key={event.id} className="bg-white shadow-2xl rounded-lg p-4 cursor-pointer" onClick={() => openModal(event)}>
                        <img src={event.images[0]} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-2">
                            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal w-11/12 md:w-4/5 max-h-full overflow-y-auto mx-auto mt-10 rounded-lg" 
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 mt-16 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                        <p className="text-gray-600">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                        <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto md:mx-5">
                            {selectedEvent.images.map((image, index) => (
                                <img key={index} src={image} alt={`${selectedEvent.title} ${index + 1}`} className="mx-auto my-auto w-11/12 max-h-[264px] rounded-lg" />
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
