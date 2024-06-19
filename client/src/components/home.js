import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrainingCenter from './maps';
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

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <div>
            <section className="bg-cover bg-center h-[75vh] mt-20 text-white" style={{ backgroundImage: "url('/images/football1.webp')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center mx-4 sm:mx-8 md:mx-24">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to Aryans FC Pune</h1>
                        <p className="text-sm font-semibold sm:text-lg text-left mb-4 sm:mb-6">We are delighted to welcome you to our Academy. The Club has a proud tradition of developing
                            home grown footballers, many of whom have gone on to play not only in our first team but have also represented State and
                            Nation.<br />We sincerely hope that you enjoy your experience as a player within our Academy and look forward to seeing you
                            progress through our system.</p><p className="text-md sm:text-xl text-right mb-4 sm:mb-6"> ~ Best wishes & Good Luck
                                Aryans Board Members
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-0 my-0">
                    <div className=" flex flex-col md:flex-row my-1 bg-light mx-auto rounded-xl">
                        <div className="flex-col mt-4">
                            {/* <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2> */}
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">
                                Founded in [Year] and nestled in the vibrant city of Pune, Aryans Football Club is a premier institution dedicated
                                to nurturing football talent. As a proud member of the Pune District Football Association (PDFA), we are committed
                                to maintaining the highest standards of football excellence and community engagement.</p>
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">At Aryans FC, we believe in the power of youth development. Our
                                Academy Performance Plan is crafted to attract, develop, and retain the finest young talents in the PCMC region.
                                With top-tier coaching, state-of-the-art facilities, and a supportive environment, we ensure every player has the opportunity to excel and grow.</p>
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">Join us at Aryans Football Club and become part of a passionate
                                football family. We are excited to accompany you on your journey and watch you thrive in our dynamic program.
                                Welcome to the next chapter of your football adventure!</p>
                            {/* AryansFCPune is a passionate football club dedicated to fostering talent and achieving excellence on the field.
                        Our mission is to provide a platform for aspiring footballers to showcase their skills and reach new heights in their careers. */}
                        </div>
                        <div className="md:flex-grow text-center mx-1 sm:mx-4 md:mr-24 p-4">
                            <img className="w-5/6 rounded-3xl mx-auto mb-4"
                                // style={{ position: 'center',
                                src='/images/Aryans logo.webp' alt='Aryans FC' />
                            <h4 className='font-bold'>Aryans FC Pune</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-gray-100">
                <div className="container mx-auto">
                    <Slider className='values-slider' {...settings1}>
                        <div>
                        <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]" style={{ backgroundImage: "url('/images/3rd div team.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <div className="absolute inset-0 top-[28%] px-4 sm:px-8 md:px-24">
                                <h2 className="text-white text-center mb-2 text-3xl md:text-5xl font-bold">Our Values</h2>
                                <p className="text-white text-sm font-semibold sm:text-xl px-10 md:px-14">We aim to provide you with quality coaching and education support services in order to provide an excellent 
                                    all-round experience throughout your time in the Academy. <br />The core values of Aryans Football Club are hard work, 
                                    honesty, integrity and loyalty. </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]" style={{ backgroundImage: "url('/images/3rd div team.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <div className="absolute inset-0 top-[28%] px-4 sm:px-8 md:px-24">
                                <h2 className="text-white text-center text-3xl md:text-4xl font-bold">Our Vision</h2>
                            </div>
                        </div></div>
                        <div>
                        <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]" style={{ backgroundImage: "url('/images/3rd div team.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <div className="absolute inset-0 top-[28%] px-4 sm:px-8 md:px-24">
                                <h2 className="text-white text-center text-3xl md:text-4xl font-bold">Our Mission</h2>
                            </div>
                        </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <div className="container bg-gray-200 rounded-lg min-h-52 w-11/12 my-6 mx-auto px-4 md:px-10">
                <h2 className="text-2xl font-semibold pt-6 text-center">Our Training Centers and Timings</h2>
                <div className='flex flex-col md:flex-row py-4 mx-auto gap-4'>
                    <TrainingCenter
                        name='Hawkers Ground'
                        lat={18.5204}
                        lng={73.8567}
                        schedule={['Monday to Saturday', 'Time: 5.00 am to 7.00 am']}
                    />
                    <TrainingCenter
                        name='Telco Ground'
                        lat={18.5304}
                        lng={73.8567}
                        schedule={['Monday to Saturday', 'Time: 7.30 pm to 9.30 pm']}
                    />
                    <TrainingCenter
                        name='Krishna Nagar'
                        lat={18.5404}
                        lng={73.8567}
                        schedule={['Monday to Saturday', 'Time: 7.30 pm to 9.30 pm']}
                    />
                    {/* <div className='md:w-1/3 mx-6'>
                        <h3 className='flex font-semibold items-center'><IoLocationOutline className='mr-2' />Hawkers Ground</h3>
                        <h3 className='font-semibold'></h3>
                        <h3 className='font-semibold'>Monday to Saturday</h3>
                        <h3 className='font-semibold'>Time: 5.00 am to 7.00 am</h3>
                    </div> */}
                </div>
            </div>

            <section className="bg-cover bg-center w-[100%] py-16" style={{ backgroundImage: "url('/images/footballpitch.webp')" }}>
                <div className="container mx-auto my-4 px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(215, 215, 215, 0.86)' }}>For Admission and Enquiry Contact</h2>
                    <h3 className="text-stone-800 text-2xl font-bold text-center pb-8" style={{ textShadow: '2px 2px 4px rgba(215, 215, 215, 0.86)' }}>
                        Dastagir – 9657650293<br />Pravin - 8796601792
                    </h3>
                    {/* Add content about your team here */}
                </div>
            </section>

            <div className="container bg-gray-200 rounded-lg min-h-52 w-4/5 my-6 pb-5 mx-auto px-10">
                <h2 className="text-2xl py-4 text-center">Reviews</h2>
                <Slider className='w-[100%]' {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6">
                            <h4 className="text-gray-700 text-center mb-4">{testimonial.text}</h4>
                            <h3 className="text-gray-900 font-semibold text-center">{testimonial.name}</h3>
                        </div>
                    ))}
                </Slider>
                {/* Add reviews content here */}
            </div>
        </div>
    );
};

export default Home;
