import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const PropertySearch = () => {
    return (
        <div className='my-5'>
            <h2 className='mx-auto py-2 md:py-4 bg-hpro2nd text-white text-2xl font-bold text-center w-11/12 md:w-[400px]'>Search for a Property</h2>
            <div className='w-11/12 md:w-9/12 mx-auto shadow-lg md:flex justify-between'>
                <div className='pb-5 pt-1 px-4 md:flex gap-5 items-center'>
                    <div>
                        <label for="keyword" className="block mb-2 text-xl font-bold">Enter Keyword</label>
                        <div className='relative'>
                            <input type="text" name="keyword" id="keyword" placeholder="Enter keyword" className="w-full px-3 py-2 border rounded-md pl-6" />
                            <FaSearch className='absolute top-3 left-1'></FaSearch>
                        </div>
                    </div>
                    <div>
                        <label for="property-type" className="block mb-2 text-xl font-bold">Property Type</label>
                        <select name='property-type' id='property-type' className="w-full px-3 py-2 border rounded-md">
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Land">Land</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                    </div>
                    <div>
                        <label for="location" className="block mb-2 text-xl font-bold">Location</label>
                        <div className='relative'>
                            <input type="text" name="location" id="location" placeholder="Search Location" className="w-full px-3 py-2 border rounded-md pl-6" />
                            <FaMapMarkerAlt className='absolute top-3 left-1'></FaMapMarkerAlt>
                        </div>
                    </div>
                    <div>
                        <label for="price" className="block mb-2 text-xl font-bold">Price Limit</label>
                        <select name='price' id='price' className="w-full px-3 py-2 border rounded-md">
                            <option value="$100">$100</option>
                            <option value="$1000">$1,000</option>
                            <option value="$10000">$10,000</option>
                            <option value="$50000">$50,000</option>
                            <option value="$100000">$100,000</option>
                            <option value="$150000">$150,000</option>
                            <option value="$200000">$200,000</option>
                            <option value="$250000">$250,000</option>
                            <option value="$300000">$300,000</option>
                        </select>
                    </div>
                </div>
                <button className='w-full md:w-[200px] bg-hpro2nd text-white font-bold text-xl md:text-2xl py-3 md:py-6 md:px-12'>Search</button>
            </div>
        </div>
    );
};

export default PropertySearch;