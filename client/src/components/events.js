import React from 'react';

const eventsData = [
  {
    id: 1,
    date: '2024-05-11',
    title: 'Farewell to our guest from Russia ',
    description: 'A farewell party to our guest Evan.',
    imageUrl: '/images/Farewell.webp',
  },{
    id: 2,
    date: '2024-04-14',
    title: 'Maidaan: Movie',
    description: 'A day out to watch a movie with Aryans Family',
    imageUrl: '/images/Maidaan2.webp',
  },
  {
    id: 3,
    date: '2024-03-29',
    title: 'Sportz Seminar',
    description: 'Session by: Owners, Technical Staff, Nutritionist, Physio and Founder members',
    imageUrl: 'path/to/image2.jpg',
  },
  {
    id: 4,
    date: '2024-03-23',
    title: 'Ram Vishwakarma Memorial Trophy',
    description: 'A match held in memory of ....... Ram Vishwakarma.',
    imageUrl: 'path/to/image3.jpg',
  },
  {
    id: 5,
    date: '2024-03-29',
    title: 'Jersey Launch',
    description: 'Lauch of our new jersey',
    imageUrl: 'path/to/image2.jpg',
  },
  
  // Add more events as needed
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[90px]">
      <h1 className="gradient-text text-3xl font-bold mb-6 text-center">Our Events</h1>
      <p className="text-left mx-12 mb-6">At Aryans we organise various Events throughout the Season and encourage each and every entity of the club tto take part in this events</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-white shadow-xl rounded-lg p-6">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
