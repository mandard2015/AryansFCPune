import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline } from 'react-icons/io5';
// import { Link as ScrollLink } from 'react-scroll';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Aryans FC has been a fantastic experience for my son. The coaches are professional, and the training facilities are top-notch.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        text: 'As a parent, I couldn’t be happier with the progress my child has made at Aryans FC. Highly recommended!',
    },
    {
        id: 3,
        name: 'Mike Johnson',
        text: 'The club has a great community spirit, and my daughter loves being a part of it.',
    },
];

const teams = [
    {
        id: 1,
        text: 'Aryans Open Team 2014-15',
        image: '/images/aryans201415.jpg',
    },
    {
        id: 2,
        text: 'Aryans Third Division Team 2023.',
        image: '/images/3rd div team.webp',
    },
    {
        id: 3,
        text: 'Gadget Free Hours Champion - Aryans Under 15 Team',
        image: '/images/Gadget C.webp',
    },
    {
        id: 4,
        text: 'Youth Cup Champions - Aryans Under 13 Team.',
        image: '/images/Youth u13.webp',
    },
];

const Home = () => {
    // const [activeTab, setActiveTab] = useState('club');
    // const handleTabChange = (tab) => {
    //     setActiveTab(tab);
    // };

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
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
    };

    return (
        <div>
            <section className="bg-cover bg-center h-[75vh] mt-20" style={{ backgroundImage: "url('/images/football1.jpg')" }}>
                <div className="flex items-center justify-center h-full bg-red-600 bg-opacity-40">
                    <div className="text-center text-white mx-4 sm:mx-8 md:mx-24">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to<br /> Aryans Sports and Social Foundation Pune</h1>
                        <p className="text-sm font-semibold sm:text-lg text-left mb-4 sm:mb-6">We are delighted to welcome you to our Academy. The Club has a proud tradition of developing
                            home grown footballers, many of whom have gone on to play not only in our first team but have also represented State and
                            Nation.<br />We sincerely hope that you enjoy your experience as a player within our foundation and look forward to seeing you
                            progress through our system.</p><p className="text-md sm:text-xl text-right mb-4 sm:mb-6"> ~ Best wishes & Good Luck
                                Aryans Board Members
                        </p>
                    </div>
                </div>
            </section>

            <section id='about' className="pb-8 bg-gray-100">
                <div className='bg-inherit h-[34vh] md:h-[62vh] relative' style={{ background: "linear-gradient(220deg, #ff0000, #182eba)" }}>
                    <Slider className='values-slider' {...settings1}>
                        {teams.map((team) => (
                            <div key={team.id} className='relative'>
                                <div className='relative justify-center'>
                                    <img className='h-[34vh] md:h-auto md:max-h-[62vh] w-auto md:w-[50%] mx-auto object-center'
                                        src={team.image} alt='Football Team image' />
                                    <div className="absolute bottom-0 left-[20%] w-[60%] mx-auto bg-gradient-to-r from-red-700 to-blue-900 text-center p-1">
                                        <h1 className='text-white font-serif font-semibold text-sm sm:text-lg'>{team.text}</h1>
                                    </div>
                                    {/* <h3 className="text-gray-900 font-semibold text-center">{team.name}</h3> */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="container mx-auto px-0 my-6">
                    <div className=" flex flex-col md:flex-row bg-light mx-auto rounded-xl">
                        <div className="flex-col mt-4 pt-4">
                            {/* <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2> */}
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">
                                Founded in 1996 and nestled in the vibrant city of Pune, Aryans Sports and Social Foundation is a premier institution dedicated
                                to nurturing football talent. As a proud member of the Pune District Football Association (PDFA), we are committed
                                to maintaining the highest standards of football excellence and community engagement.</p>
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">At Aryans, we believe in the power of youth development. Our
                                Academy Performance Plan is crafted to attract, develop, and retain the finest young talents in the PCMC region.
                                With top-tier coaching, state-of-the-art facilities, and a supportive environment, we ensure every player has the opportunity to excel and grow.</p>
                            <p className="text-gray-700 font-semibold md:text-xl mx-4 sm:mx-8 md:ml-24">Join us at Aryans Sports Foundation and become part of a passionate
                                football family. We are excited to accompany you on your journey and watch you thrive in our dynamic program.
                                Welcome to the next chapter of your football adventure!</p>
                            {/* AryansFCPune is a passionate football club dedicated to fostering talent and achieving excellence on the field.
                        Our mission is to provide a platform for aspiring footballers to showcase their skills and reach new heights in their careers. */}
                        </div>
                        <div className="md:flex-grow bg-white rounded-xl text-center mx-4 mt-4 md:mr-24 p-4">
                            <img className="w-5/6 rounded-3xl mx-auto mb-2"
                                // style={{ position: 'center',
                                src='/images/Aryans logo.webp' alt='Aryans FC' loading="lazy"/>
                            <h3 className='font-bold text-xl'>Aryans Sports and Social Foundation Pune</h3>
                            <p className='font-serif'>Striving for Glory.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-3 bg-gray-100">
                <div className="container mx-auto">
                    <Slider className='values-slider' {...settings1}>
                        <div>
                            <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]"
                                style={{ backgroundImage: "url('/images/mission.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <div className="absolute inset-0 top-[15%] md:top-[25%] px-4 sm:px-8 md:px-24">
                                    <h2 className="text-white text-center text-2xl md:text-4xl font-bold">Our Vision</h2>
                                    <p className="text-white text-sm sm:font-semibold sm:text-xl text-justify px-10 md:px-20">The vision of Aryans Sports Foundation is to foster
                                        a culture that challenges and inspires local talent, encouraging them to push their limits and achieve their highest potential.
                                        <br />We aim to identify and develop the best players through each stage—Foundation, Youth, and Professional Development—with the goal
                                        of producing future First Team players for Aryans Sports and Social Foundation. Our Academy will provide a supportive environment where players
                                        gain valuable life skills and experience, preparing them for success both in football and beyond.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]"
                                style={{ backgroundImage: "url('/images/trophies.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <div className="absolute inset-0 top-[15%] md:top-[25%] px-4 sm:px-8 md:px-24">
                                    <h2 className="text-white text-center mb-1 text-2xl md:text-4xl font-bold">Our Mission</h2>
                                    <p className="text-white text-sm sm:font-semibold sm:text-xl text-justify px-10 md:px-20">Our mission at Aryans Sports Foundation is to establish
                                        ourselves as the leading club in Pune for nurturing local talent, known for outstanding player development and holistic care of
                                        both players and staff.<br /> We are committed to building a supportive environment where every player can thrive, driven by our
                                        dedication to developing the next generation of home-grown players for Aryans FC’s First Team.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative bg-cover bg-center h-[50vh] md:h-[65vh]"
                                style={{ backgroundImage: "url('/images/values12.webp')", backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <div className="absolute inset-0 top-[15%] md:top-[25%] px-3 sm:px-8 md:px-24">
                                    <h2 className="text-white text-center mb-1 text-2xl md:text-4xl font-bold">Our Values</h2>
                                    <p className="text-white text-sm sm:font-semibold sm:text-xl text-justify px-9 md:px-20">Our core values of
                                        hard work, honesty, integrity and loyalty are the foundation of everything we do. We believe that these values guide not only our
                                        players but also our staff, ensuring a culture of excellence on and off the pitch.<br />By prioritizing patience,
                                        perseverance, and a commitment to continuous improvement, we strive to create an environment where every player and
                                        staff member can achieve their full potential, both as athletes and individuals.<br /> Our philosophy is simple—success is
                                        built on a foundation of strong character and unwavering dedication.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <div className="container bg-gray-200 rounded-lg min-h-52 w-11/12 my-6 mx-auto px-4 md:px-10">
                <h2 className="text-2xl font-semibold pt-6 text-center">Our Training Centers and Timings</h2>
                <div className='flex flex-col md:flex-row py-4 mx-auto gap-4'>
                    <div className='flex flex-col md:w-1/3 items-center mx-6 my-3'>
                    <img className='h-52 w-auto object-center mx-6' src='/images/Aryans logo.webp' alt='Aryans FC' loading="lazy"/>
                        <div className='mt-4 mx-4 md:mx-10'>
                            <a href='https://g.co/kgs/KnsXXpX' target="_blank" rel="noopener noreferrer"
                            className='flex font-semibold text-blue-700 items-center'><IoLocationOutline className='text-xl mr-1' />
                            Dr Babasaheb Ambedkar Play Ground
                            </a>
                            <h3 className='ml-4 font-semibold'>Sant Tukaram Nagar<br />Monday to Saturday<br />Time: 5.00 am to 7.00 am</h3>
                        </div>
                    </div>
                    <div className='flex flex-col md:w-1/3 items-center mx-6 my-3'>
                    <img className='h-52 w-auto object-center mx-6' src='/images/Aryans logo.webp' alt='Aryans FC' loading="lazy"/>
                        <div className='mt-4 mx-4 md:mx-10'>
                            <a href='https://g.co/kgs/bfAMiyG' target="_blank" rel="noopener noreferrer"
                            className='flex font-semibold text-blue-700 items-center'><IoLocationOutline className='text-xl mr-1' />
                            Hedgewar Kreeda Sankul Maidan
                            </a>
                            <h3 className='ml-4 font-semibold'>Masulkar Colony, Ajmera<br />Monday to Saturday
                            <br />Time: 7.30 pm to 9.30 pm</h3>
                        </div>
                    </div>
                    <div className='flex flex-col md:w-1/3 items-center mx-6 my-3'>
                    <img className='h-52 w-auto object-center mx-6' src='/images/Aryans logo.webp' alt='Aryans FC' loading="lazy"/>
                        {/* img 250px */}
                        <div className='mt-4 mx-4 md:mx-10'>
                            <a href='#address' target="_blank" rel="noopener noreferrer"
                            className='flex font-semibold text-blue-700 items-center'><IoLocationOutline className='text-xl mr-1' />Krushna Nagar</a>
                            <h3 className='ml-4 font-semibold'>Monday to Saturday<br />Time: 7.30 pm to 9.30 pm</h3>
                        </div>
                    </div>
                    {/* <div className='md:w-1/3 mx-6'>
                        <h3 className='flex font-semibold text-blue-700 items-center'><IoLocationOutline className='w-2 mr-2' />Hawkers Ground</h3>
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
                        Dastagir Sir – 9657650293<br />Pravin Sir - 8796601792
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
