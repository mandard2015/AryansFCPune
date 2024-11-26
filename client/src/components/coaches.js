import React from 'react';

const Coaches = () => {
    return (
        <div className="flex flex-col mt-4">
            {/* <AppNavbar /> */}
            <main className="flex-grow container mx-auto sm:px-4 pb-8">
                <div className='mx-1 sm:mx-8 md:mx-24'>
                    {/* <h3 className="gradient-text text-3xl font-bold mb-2 text-center mt-8">Coaches</h3> */}
                    <div className='mt-6 '>
                        <h2 className="gradient-text text-3xl font-bold mb-4 text-left mx-4">Introduction from the Head Coach </h2>
                        <div className='flex flex-col md:flex-row my-6'>
                            <div className='sm:w-1/3 md:w-1/4 order-1 rounded-lg text-center mx-4' style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                                <img className="w-auto h-[200px] rounded-2xl mx-auto my-2"
                                    src='/images/Dastagir.webp' alt='.' />
                                <h3 className="text-xl font-semibold">Dastagir Diksangi</h3>
                                <p className="text-gray-600">Head Coach</p>
                            </div>
                            <div className='flex-1 order-2 md:mr-16 md:ml-4 pt-6 sm:font-semibold'>
                                <p className="text-left mx-2">Welcome to Aryans, the coaching philosophy at Aryans Sports and Social Foundation is to create a positive learning environment, while coaching within the technical
                                syllabus relative to the age and ability of the players.<br />Historically our Academy has produced players for Aryans
                                    first team and beyond. The Academy prides itself on developing both young footballers both on and off the pitch.<br />The Academy will play an
                                    attractive possession-based game consistent throughout all age groups. The players will always be at the Centre of everything we do,
                                    our focus will be to help everyone achieve their full potential.</p>
                                <p className="text-right mx-4 sm:mr-8 md:mx-0 my-2">Good luck and best wishes for the season.<br />~Dastagir
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:mx-4" >
                        {/* Team member cards */}
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo1.jpg" alt="Coach 1" className="w-11/12 h-32 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 1</h3>
                            <p className="text-gray-600">Position 1</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo2.jpg" alt="Coach 2" className="w-11/12 h-24 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 2</h3>
                            <p className="text-gray-600">Position 2</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo3.jpg" alt="Coach 3" className="w-11/12 h-24 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 3</h3>
                            <p className="text-gray-600">Position 3</p>
                        </div>
                    </div>
                    <h3 className="gradient-text text-3xl font-bold mb-2 text-center mt-8">Junior Coach</h3>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:mx-4">
                        {/* Team member cards */}
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo1.jpg" alt="Coach 1" className="w-11/12 h-24 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 1</h3>
                            <p className="text-gray-600">Position 1</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo2.jpg" alt="Coach 2" className="w-11/12 h-24 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 2</h3>
                            <p className="text-gray-600">Position 2</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                            <img src="path/to/photo3.jpg" alt="Coach 3" className="w-11/12 h-24 rounded-2xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold"> Name 3</h3>
                            <p className="text-gray-600">Position 3</p>
                        </div>
                        {/* Add more team member cards as needed */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Coaches;