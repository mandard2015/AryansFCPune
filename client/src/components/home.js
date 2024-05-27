import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('path/to/your/image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to AryansFCPune</h1>
            <p className="text-lg mb-6">Join us in our journey to greatness!</p>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-gray-700 text-center mb-8">
            AryansFCPune is a passionate football club dedicated to fostering talent and achieving excellence on the field.
            Our mission is to provide a platform for aspiring footballers to showcase their skills and reach new heights in their careers.
          </p>
        </div>
      </section>

      {/* Additional Sections */}
      <section id="product" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-gray-700 text-center mb-8">
            Meet the amazing team behind AryansFCPune.
          </p>
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
