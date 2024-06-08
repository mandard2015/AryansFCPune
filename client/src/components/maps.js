import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IoLocationOutline } from 'react-icons/io5';

const containerStyle = {
    width: '100%',
    height: '250px',
};

const TrainingCenter = ({ name, lat, lng, schedule }) => {
    return (
        <div className='md:w-1/3 mx-6 my-3'>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap mapContainerStyle={containerStyle} center={{ lat, lng }} zoom={15}>
                    <Marker position={{ lat, lng }} />
                </GoogleMap>
            </LoadScript>
            <div className='mt-4'>
                <h3 className='flex font-semibold items-center'><IoLocationOutline className='mr-2' />{name}</h3>
                {schedule.map((item, index) => (
                    <h3 key={index} className='font-semibold'>{item}</h3>
                ))}
            </div>
        </div>
    );
};

export default TrainingCenter;
