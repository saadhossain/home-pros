import React from 'react';
import { FaBath, FaBed, FaSwimmingPool } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { SiHomeassistantcommunitystore } from 'react-icons/si';

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
                    <div className='flex justify-between items-center'>
                        <a href='callto:019289382'><button className='bg-hpro2nd text-white py-2 px-3 rounded font-bold'>Call for Qoute</button></a>
                        <label htmlFor="qoute-modal" className='bg-hpro text-white py-2 px-3 rounded font-bold cursor-pointer'>Send Email</label>
                    </div>
                </div>
            </div>

            {/* Modal starts here */}
            <input type="checkbox" id="qoute-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-hprohf text-white">
                    <div className="flex flex-col max-w-md p-2 rounded-md">
                        <form novalidate="" action="" className="space-y-5 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1">
                                <div>
                                    <label for="fullname" className="block mb-2 text-md">Full Name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-md">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label for="message" className="text-md">Your Message</label>
                                    </div>
                                    <textarea rows={3} name="message" id="message" placeholder="Leave Your message here..." className="w-full px-3 py-2 border rounded-md" />
                                </div>
                            </div>
                            <div className='mt-1'>
                                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-hpro2nd">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="qoute-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProperty;