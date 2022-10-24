import React from 'react';
import {FiHome} from 'react-icons/fi'
import {FaBath, FaBed, FaSwimmingPool} from 'react-icons/fa'
import {SiHomeassistantcommunitystore} from 'react-icons/si'

const HomeProperty = ({ property }) => {
    const { name, image, location, feature, price } = property;
    return (
        <div>
            <div className="flex flex-col bg-white shadow-lg rounded-lg">
                <img src={image} alt="" className="object-cover w-full h-[220px] rounded-t-lg duration-500 ease-in-out opacity-80 hover:opacity-100 cursor-pointer" />
                <div className="p-5">
                    <h2 className="mb-2 text-xl font-semibold text-hpro2nd">{name}</h2>
                    <p className='flex items-center gap-2'><FiHome className='h-4 w-4 text-hpro'></FiHome> {location}</p>
                    <div className='flex justify-between my-3'>
                        <span className='flex items-center gap-2'>
                            <FaBed></FaBed>
                            {feature.bed}
                            <p>Bed</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <FaBath></FaBath>
                            {feature.bath}
                            <p>Bath</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <FaSwimmingPool></FaSwimmingPool>
                            {feature.pool}
                            <p>Pool</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            <SiHomeassistantcommunitystore></SiHomeassistantcommunitystore>
                            {feature.area}
                            <p>Sqf</p>
                        </span>
                    </div>
                    <h2 className="mb-1 text-xl font-semibold text-hpro">Price : ${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default HomeProperty;