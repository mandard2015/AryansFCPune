import React from 'react';

const footballs = [
    {
        id: 1,
        text: 'Champions Gadget Free Hours',
        image: '/images/Gadget C.webp',
    },
    {
        id: 2,
        text: 'Our Success in an image.',
        image: '/images/trophies.webp',
    },
    {
        id: 3,
        text: 'Aryans Under 15 Team',
        image: '/images/aryansu15.webp',
    },
    {
        id: 4,
        text: 'Youth Cup Champions.',
        image: '/images/Youth u13.webp',
    },
    {
        id: 5,
        text: '1st Place at Open age Elite Turf .',
        image: '/images/Aryans 1st.webp',
    },
    {
        id: 6,
        text: '1st at Pune District Football Competition',
        image: '/images/paper1.webp',
    },
    {
        id: 7,
        text: 'SportsCity',
        image: '/images/sportscity.webp',
    },
    {
        id: 8,
        text: '1st at 3rd Division League',
        image: '/images/paper2.webp',
    },
    {
        id: 9,
        text: '1st at Sudarshan Memorial Cup',
        image: '/images/paper3-sudarshan.webp',
    },
];


const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-24 bg-pattern">
            <h2 className="gradient-text text-3xl font-bold mb-3 text-left mx-2 sm:mx-8 md:mx-24">About Aryans</h2>
            <div className='flex flex-col md:flex-row mb-6'>
                <div className='flex-1 order-2 md:order-1 md:ml-[104px] font-semibold'>
                    <p className="text-left mx-2 sm:ml-8 md:mx-0">Aryans Sports and Social Foundation, based in Pune was established in the
                        year 1996 and has gained recognition over 28 years, especially in the local football scene. The club has been actively
                        involved in promoting football in the region. Aryans initially started with the goal of nurturing young talent
                        and providing a platform for players to develop their skills and progress into professional football.<br />Aryans Sports and
                        Social Foundation has built a reputation for competing in local leagues and tournaments. They are particularly focused on grassroots
                        football, youth development, and have been part of various district and state-level competitions in Maharashtra.<br />
                        Over the years, Aryans has made strides in fostering a football culture in Pune, which is one of India's key
                        football hubs. The club's approach emphasizes building a strong local fan base and contributing to the overall
                        development of the sport in the region.</p>
                    {/* <p className="text-right mx-4 sm:ml-8 md:mx-0 mb-4">Good luck for the season ahead.<br />~Dastagir\Pravin</p> */}
                </div>
                <div className='sm:w-1/3 md:w-1/4 order-1 text-center md:order-2 mx-4 sm:mr-8 md:mr-24 mb-4 sm:px-4'>
                    <img className=' max-h-48 mx-auto object-center rounded-3xl mb-2'
                        src='/images/Aryans logo.webp' alt='Aryans logo' />
                        <h3 className='font-bold text-xl'>Aryans Sports and Social Foundation Pune</h3>
                        <p className='font-serif'>Striving for Glory.</p>
                </div>
            </div>
            <h2 className="gradient-text text-3xl font-bold mb-3 text-left mx-4 sm:mx-8 md:mx-24">What Makes Aryans Unique</h2>
            <div className='flex flex-col md:flex-row mb-6'>
                <div className='sm:w-1/3 md:w-1/4 order-1 mx-4 sm:ml-8 md:ml-24'>
                    <img className='max-h-[220px] mx-auto object-center rounded-3xl mb-2'
                        src='/images/Aryans logo.webp' alt='Aryans logo' />
                </div>
                <div className='flex-1 order-2 md:mr-24 font-semibold'>
                    <p className="text-left mx-4 sm:mr-8 md:mr-24 mb-2">
                        The Academy will educate players on different playing styles in various ways including:</p>
                    <ul className="list-disc list-inside text-left mx-4 sm:mr-8 md:mr-24 mb-6">
                        <li> Discussions between players and coaches on a team, individual and unit basis</li>
                        <li> Coaching sessions designed to develop understanding in specific tactical situations (e.g. Phase of play)</li>
                        <li> Use of video clips in performance analysis sessions/workshops (u18s only)</li>
                        <li> Watching first team games</li>
                        <li> Observation of live TV games leading to group discussion</li>
                        <li> The development of Phase specific strategies</li>
                        <li> Player and parent induction / presentations</li>
                    </ul>
                </div>
            </div>
            <h2 className="gradient-text text-3xl font-bold mb-3 text-left mx-2 sm:mx-8 md:mx-24">Message from Our Leaders</h2>
            <div className='flex flex-col md:flex-row mb-6'>
                <div className='flex-1 order-2 md:order-1 md:ml-[104px] font-semibold'>
                    <p className="text-left mx-2 sm:ml-8 md:mx-0">Our role at Aryans is to manage, with integrity, the club as a sustainable business in order to ensure
                        its long-term future. <br />The focus is to drive competitiveness and success on and off the pitch at the highest possible level.<br />The development of
                        talented home-grown players is a key element of this strategy. <br />Through the development and implementation of our Academy Performance Plan we
                        hope to attract, develop and retain the best youth players in PCMC. <br />We are sure you will enjoy the experience of being part of our Academy
                        and look forward to seeing you progress through our program.</p>
                    <p className="text-right mx-4 sm:ml-8 md:mx-0 mb-4">Good luck for the season ahead.<br />~Dastagir\Pravin
                    </p>
                </div>
                <div className='sm:w-1/3 md:w-1/4 order-1 md:order-2 mx-4 sm:mr-8 md:mr-24 mb-4'>
                    <img className='max-h-[220px] mx-auto object-center rounded-3xl mb-2'
                        src='/images/Aryans logo.webp' alt='Leaders img' />
                    <h5 className='ml-8'>..</h5>
                </div>
            </div>
            <div className='mx-2 sm:mx-4'>
                <h2 className="gradient-text text-3xl font-bold mb-3 text-center pb-2 ">Discover Aryans' Legacy</h2>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {footballs.map((football) => (
                        <div key={football.id} className="flex flex-col items-center text-center p-2">
                            <img
                                src={football.image}
                                alt={football.text}
                                loading="lazy"
                                className="w-auto h-56 object-cover rounded-lg shadow-lg mb-2"
                            />
                            <p className="text-lg font-medium text-gray-800">{football.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*             
            <p className="text-left mx-4 sm:mx-8 md:mx-24 mb-2">
                The Academy will educate players on different playing styles in various ways including:</p>
            <ul className="list-disc list-inside text-left mx-4 sm:mx-8 md:mx-24 mb-6">
                <li> Discussions between players and coaches on a team, individual and unit basis</li>
                <li> Coaching sessions designed to develop understanding in specific tactical situations (e.g. Phase of play)</li>
                <li> Use of video clips in performance analysis sessions/workshops (u18s only)</li>
                <li> Watching first team games</li>
                <li> Observation of live TV games leading to group discussion</li>
                <li> The development of Phase specific strategies</li>
                <li> Player and parent induction / presentations</li>
            </ul> */}

            <h2 className="gradient-text text-3xl font-bold mb-5 text-left mx-4 sm:mx-8 md:mx-24">Coaching</h2>
            <p className="text-left mx-4 sm:mx-8 md:mx-24 mb-6">
                The coaching philosophy at Aryans is to create a positive learning environment, while coaching within the technical
                syllabus relative to the age and ability of the players. Coaches will adopt a holistic approach whilst implementing the
                coaching program.<br />The Academy will strive to create a positive learning environment that helps develop each
                individual player across the four corners (Technically, Tactically, Physically and Psychologically/Socially).
                <br />A positive learning environment will be achieved through: Positive communication & reinforcement, building
                motivation and self-esteem, promoting values and fair play and differentiation.
            </p>
        </div>
    );
};

export default About;