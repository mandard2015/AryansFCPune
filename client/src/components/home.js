import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link as ScrollLink } from 'react-scroll';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Aryans FC has been a fantastic experience for my son. The coaches are professional, and the training facilities are top-notch.',
        image: 'path/to/image1.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        text: 'As a parent, I couldn’t be happier with the progress my child has made at Aryans FC. Highly recommended!',
        image: 'path/to/image2.jpg',
    },
    {
        id: 3,
        name: 'Mike Johnson',
        text: 'The club has a great community spirit, and my daughter loves being a part of it.',
        image: 'path/to/image3.jpg',
    },
];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div>
            <section className="bg-cover bg-center h-screen mt-16 text-white" style={{ backgroundImage: "url('/images/football1.webp')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center mx-1">
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
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 my-0">
                    <div className=" flex flex-col md:flex-row my-2 bg-light w-[95%] mx-auto rounded-xl">
                        <div className="flex-col mt-4">
                            {/* <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2> */}
                            <p className="text-gray-700 font-bold text-lg md:text-xl px-6">
                                Founded in [Year] and nestled in the vibrant city of Pune, Aryans Football Club is a premier institution dedicated
                                to nurturing football talent. As a proud member of the Pune District Football Association (PDFA), we are committed
                                to maintaining the highest standards of football excellence and community engagement.</p>
                            <p className="text-gray-700 font-bold text-lg md:text-xl px-6">At Aryans FC, we believe in the power of youth development. Our
                                Academy Performance Plan is crafted to attract, develop, and retain the finest young talents in the PCMC region.
                                With top-tier coaching, state-of-the-art facilities, and a supportive environment, we ensure every player has the opportunity to excel and grow.</p>
                            <p className="text-gray-700 font-bold text-lg md:text-xl px-6">Join us at Aryans Football Club and become part of a passionate
                                football family. We are excited to accompany you on your journey and watch you thrive in our dynamic program.
                                Welcome to the next chapter of your football adventure!</p>
                            {/* AryansFCPune is a passionate football club dedicated to fostering talent and achieving excellence on the field.
                        Our mission is to provide a platform for aspiring footballers to showcase their skills and reach new heights in their careers. */}
                        </div>
                        <div className="md:flex-grow text-center p-4">
                            <img className="mx-auto w-5/6 rounded-3xl mb-4"
                                // style={{ position: 'center',
                                src='/images/Aryans logo.webp' alt='Aryans FC' />
                            <h4 className='font-bold'>Aryans FC Pune</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Sections */}
            <section className="bg-cover bg-center w-[100%] py-16" style={{ backgroundImage: "url('/images/footballpitch.webp')" }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text text-stone-900 font-bold mb-4 text-center">For Admission and Enquiry Contact</h2>
                    <h3 className="text-stone-800 text-2xl font-bold text-center pb-8">
                        9657650293
                    </h3>
                    {/* Add content about your team here */}
                </div>
            </section>

            <div className="container bg-gray-100 rounded-lg min-h-52 w-4/5 my-6 mx-auto px-10">
                <h2 className="text-2xl py-4 text-center">Reviews</h2>
                <Slider className='w-[100%]' {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-700 text-center mb-4">{testimonial.text}</p>
                            <p className="text-gray-900 font-semibold text-center">{testimonial.name}</p>
                        </div>
                    ))}
                </Slider>
                {/* Add reviews content here */}
            </div>
        </div>
    );
};

export default Home;
