import React, { useState } from 'react';

const playerCategories = [
    {
        category: 'Aryans Sports A (Division I)',
        players: [
            { id: 1, name: 'Mangal Pandey', jerseyNumber: 2, photo: '/players/Mangal Pandey.webp' },
            { id: 2, name: 'Sharan Anirudha Ghodake', jerseyNumber: 7, photo: '/players/Sharan Ghodake.webp' },
            { id: 3, name: 'Gopikrishnan Ganesh Naidu', jerseyNumber: 8, photo: '/players/Gopi Naidu.webp' },
            { id: 4, name: 'Jay Kunjeer', jerseyNumber: 9, photo: '/players/Jay Kunjeer.webp' },
            { id: 5, name: 'Ashutosh Rajesh Yadav', jerseyNumber: 10, photo: '/players/Ashutosh Yadav.webp' },
            { id: 6, name: 'Sushil Pawar', jerseyNumber: 11, photo: '/players/Sushil Pawar.webp' },
            { id: 7, name: 'Karan Sampatrao Deshmukh', jerseyNumber: 14, photo: '/players/Karan Deshmukh.webp' },
            { id: 8, name: 'Nupur Manoj Kotrange', jerseyNumber: 15, photo: '/players/Nupur Kotrange.webp' },
            { id: 9, name: 'Yogesh Palve', jerseyNumber: 17, photo: '/players/Yogesh Palve.webp' },
            { id: 10, name: 'Mohan Kide Bhandari', jerseyNumber: 18, photo: '/players/Mohan Bhandari.webp' },
            { id: 11, name: 'Gaurav Moon', jerseyNumber: 21, photo: '/players/Gaurav Moon.webp' },
            { id: 12, name: 'Atharva Anirudha Ghodke', jerseyNumber: 26, photo: '/players/Atharva Ghodke.webp' },
            { id: 13, name: 'Harsh Sanjiv Zerikunte', jerseyNumber: 27, photo: '/players/Harsh Zerikunte.webp' },
            { id: 14, name: 'Venkatesh Srinivas Reddy', jerseyNumber: 28, photo: '/players/Venkatesh Reddy.webp' },
            { id: 15, name: 'Vikas Ravi Pratap Singh', jerseyNumber: 44, photo: '/players/Vikas Singh.webp' },
            { id: 16, name: 'Aniket Chandrabhan Mandlik', jerseyNumber: 69, photo: '/players/Aniket Mandlik.webp' },
            { id: 17, name: 'Amol Korade', jerseyNumber: 77, photo: '/players/Amol Korade.webp' },
            { id: 18, name: 'Ninad Nandkumar Talekar', jerseyNumber: 95, photo: '/players/Ninad Talekar.webp' }
        ],
    },
    {
        category: 'Aryans Sports B (Division III)',
        players: [
            { id: 1, name: 'Atharva Amol Moghe', jerseyNumber: 1, photo: '/players/Atharva Moghe.webp' },
            { id: 2, name: 'Viraj Atul Pawar', jerseyNumber: 6, photo: '/players/Viraj Pawar.webp' },
            { id: 3, name: 'Ankit Rajkumar Tiwari', jerseyNumber: 9, photo: '/players/Ankit Tiwari.webp' },
            { id: 4, name: 'Yash Muthukrishnan Pillay', jerseyNumber: 12, photo: '/players/Yash Pillay.webp' },
            { id: 5, name: 'Sunny Jadhav', jerseyNumber: 13, photo: '/players/Sunny Jadhav.webp' },
            { id: 6, name: 'Affan Diksangi', jerseyNumber: 22, photo: '/players/Affan Diksangi.webp' },
            { id: 7, name: 'Atharva Manoj Patil', jerseyNumber: 25, photo: '/players/Atharva Patil.webp' },
            { id: 8, name: 'Pratik Uttarkar', jerseyNumber: 29, photo: '/players/Pratik Uttarkar.webp' },
            { id: 9, name: 'Shekhar Sandeep Wankhede', jerseyNumber: 69, photo: '/players/Shekhar Wankhede.webp' },
            { id: 10, name: 'Aayushmaan Shaw', jerseyNumber: 93, photo: '/players/Aayushmaan Shaw.webp' }
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 17)',
        players: [
            { id: 4, name: 'Arav Manoj Patil', jerseyNumber: 19, photo: '/players/Arav Patil.webp' },
            { id: 5, name: 'Aryan Pradeep Tarate', jerseyNumber: 11, photo: '/players/Aryan Tarate.webp' },
            // { id: 6, name: 'Player', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 17)',
        players: [
            // { id: 4, name: 'Player Four', jerseyNumber: 8, photo: '/players/player4.webp' },
            // { id: 5, name: 'Player Five', jerseyNumber: 6, photo: '/players/player5.webp' },
            // { id: 6, name: 'Player Six', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 15)',
        players: [
            { id: 1, name: 'Soham Suresh Adate', jerseyNumber: 22, photo: '/players/Soham Adate.webp' },
            { id: 2, name: 'Arush Rajesh Bodade', jerseyNumber: 17, photo: '/players/Arush Bodade.webp' },
            { id: 3, name: 'Soham Chandrakant Chougule', jerseyNumber: 46, photo: '/players/Soham Chougule.webp' },
            { id: 4, name: 'Vaibhav Tripurari Singh', jerseyNumber: 60, photo: '/players/Vaibhav Singh.webp' },
            { id: 5, name: 'Kunal Mali', jerseyNumber: 48, photo: '/players/Kunal Mali.webp' }
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 15)',
        players: [
            { id: 4, name: 'Aniruddha Umesh Wadje', jerseyNumber: 28, photo: '/players/Aniruddha Wadje.webp' },
            { id: 5, name: 'Neel Pankaj Ozarkar', jerseyNumber: 8, photo: '/players/Neel Ozarkar.webp' },
            // { id: 6, name: 'Player', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 13)',
        players: [
            { id: 4, name: 'Ayan Diksangi', jerseyNumber: 8, photo: '/players/Ayan Diksangi.webp' },
            { id: 5, name: 'Sharvik Sandeep Agarwal', jerseyNumber: 44, photo: '/players/Sharvik Agarwal.webp' },
            { id: 6, name: 'Sanchit Sampat Gudekar', jerseyNumber: 1, photo: '/players/Sanchit Gudekar.webp' },
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 13)',
        players: [
            { id: 1, name: 'Tejas Balaji Dagade', jerseyNumber: 36, photo: '/players/Tejas Dagade.webp' },
            { id: 2, name: 'Tejas Tanaji Kale', jerseyNumber: 1, photo: '/players/Tejas Kale.webp' },
            { id: 3, name: 'Gautam Shah', jerseyNumber: 37, photo: '/players/Gautam Shah.webp' },
            { id: 4, name: 'Krishna Swapnil Rayate', jerseyNumber: 52, photo: '/players/Krishna Rayate.webp' },
            { id: 5, name: 'Samarth Avinash Kalekar', jerseyNumber: 42, photo: '/players/Samarth Kalekar.webp' },
            { id: 6, name: 'Arjun Rameshwar Vibhute', jerseyNumber: 43, photo: '/players/Arjun Vibhute.webp' },
            { id: 7, name: 'Gurudaksh Harjit Singh Barda', jerseyNumber: 20, photo: '/players/Gurudaksh Barda.webp' },
            { id: 8, name: 'Jinay Kamlesh Bedmutha', jerseyNumber: 59, photo: '/players/Jinay Bedmutha.webp' },
            { id: 9, name: 'Darsh Kalpesh Bedmutha', jerseyNumber: 66, photo: '/players/Darsh Bedmutha.webp' }
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 11)',
        players: [
            // { id: 4, name: 'Player Four', jerseyNumber: 8, photo: '/players/player4.webp' },
            // { id: 5, name: 'Player Five', jerseyNumber: 6, photo: '/players/player5.webp' },
            // { id: 6, name: 'Player Six', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 11)',
        players: [
            { id: 1, name: 'Smit Marathe', jerseyNumber: 88, photo: '/players/Smit Marathe.webp' },
            { id: 2, name: 'Rehansh Devendra Ramteke', jerseyNumber: 79, photo: '/players/Rehansh Ramteke.webp' },
            { id: 3, name: 'Kaustubh Dinkar Shinde', jerseyNumber: 76, photo: '/players/Kaustubh Shinde.webp' },
            { id: 4, name: 'Mayuresh Arjun Devale', jerseyNumber: 61, photo: '/players/Mayuresh Devale.webp' },
            { id: 5, name: 'Shorya Shekhawat', jerseyNumber: 54, photo: '/players/Shorya Shekhawat.webp' },
            { id: 6, name: 'Harsh Sujyot Chaudhari', jerseyNumber: 82, photo: '/players/Harsh Chaudhari.webp' },
            { id: 7, name: 'Samar Singh Uthad', jerseyNumber: 41, photo: '/players/Samar Uthad.webp' },
            { id: 8, name: 'Arnav Anil Mohite', jerseyNumber: 81, photo: '/players/Arnav Mohite.webp' }
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 9)',
        players: [
            // { id: 4, name: 'Player Four', jerseyNumber: 8, photo: '/players/player4.webp' },
            // { id: 5, name: 'Player Five', jerseyNumber: 6, photo: '/players/player5.webp' },
            // { id: 6, name: 'Player Six', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 9)',
        players: [
            { id: 4, name: 'Vighnesh Vishal Kirtikar', jerseyNumber: 91, photo: '/players/Vighnesh Kirtikar.webp' },
            // { id: 5, name: 'Rehansh Devendra Ramteke', jerseyNumber: 6, photo: '/players/Rehansh Ramteke.webp' },
            // { id: 6, name: 'Player Six', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Ajmera (Under 7)',
        players: [
            // { id: 4, name: 'Player Four', jerseyNumber: 8, photo: '/players/player4.webp' },
            // { id: 5, name: 'Player Five', jerseyNumber: 6, photo: '/players/player5.webp' },
            // { id: 6, name: 'Player Six', jerseyNumber: 7, photo: '/players/player6.webp' },
        ],
    },
    {
        category: 'Aryans Sports Krushna Nagar (Under 7)',
        players: [
            { id: 1, name: 'Shounak Sunil Mamulwar', jerseyNumber: 3, photo: '/players/Shounak Mamulwar.webp' },
            { id: 2, name: 'Shivam Vinod Gunjal', jerseyNumber: 92, photo: '/players/Shivam Gunjal.webp' },
            { id: 3, name: 'Rudra Paresh Yeola', jerseyNumber: 94, photo: '/players/Rudra Yeola.webp' },
            { id: 4, name: 'Darsh Ashish Kotecha', jerseyNumber: 93, photo: '/players/Darsh Kotecha.webp' },
            { id: 5, name: 'Reyansh Vishwajit Chaudhari', jerseyNumber: 29, photo: '/players/Reyansh Chaudhari.webp' },
            { id: 6, name: 'Annapurna Laxman Paratnale', jerseyNumber: 97, photo: '/players/Annapurna Paratnale.webp' },
            { id: 7, name: 'Shaunak Sunil Mamulwar', jerseyNumber: 32, photo: '/players/Shaunak Mamulwar.webp' }
        ],
    },
    // Add more categories as needed
];

const Players = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <div className="container mx-auto py-2">
            {/* <h2 className="text-2xl text-center gradient-text font-semibold mb-6">Our Players</h2> */}
            {playerCategories.map((category) => (
                <div
                    className="m-3 md:mx-12 pt-1 text-center" style={{ background: "linear-gradient(90deg, #ff0000, #182eba)" }}
                    key={category.category}
                >
                    <h3
                        className="text-xl text-white font-semibold pb-1.5 cursor-pointer"
                        onClick={() => toggleCategory(category.category)}
                    >
                        {category.category}
                    </h3>
                    {expandedCategory === category.category && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-4 py-3 px-2">
                            {category.players.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex flex-row gap-4 lg:gap-8 bg-white rounded-md shadow-xl text-center"
                                >
                                    <img
                                        src={player.photo}
                                        alt={"photo"}
                                        loading="lazy"
                                        className="w-auto h-20 object-cover rounded-md"
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <h5 className="font-semibold text-[1rem]">{player.name}</h5>
                                        <div className='border border-grey flex items-center justify-center h-10 w-10 rounded-md'>
                                            <h1 className="font-semibold text-2xl text-center text-black">{player.jerseyNumber}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="bg-white rounded-lg mt-8 mx-auto p-4 text-center w-11/12" style={{ boxShadow: '2px 2px 8px 2px rgba(0, 0, 0, 0.1)' }}>
                <img src="/images/3rd div team.webp" alt="3rd Division Team" className="w-auto max-h-96 rounded-2xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold">3rd Division Team</h3>
            </div>
        </div>
    );
};

export default Players;