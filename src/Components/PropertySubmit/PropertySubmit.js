import React from 'react';

const PropertySubmit = () => {
    return (
        <div className='w-11/12 md:w-9/12 mx-auto my-10'>
            <form className='bg-hprohf text-white p-6 rounded-md'>
                <h1 className='text-2xl md:text-3xl font-bold text-center mb-5'>Submit Your Property</h1>
                {/* Basic Information area */}
                <h3 className='text-xl font-bold my-5'>Basic Information</h3>
                {/* Basic information First Row */}
                <div className='md:flex gap-5 w-full'>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="ptitle">Property Title</label>
                        <input type="text" name="ptitle" id="ptitle" placeholder='Enter Property Title' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pstatus">Property Status</label>
                        <select name="pstatus" id='pstatus' className='p-2 rounded-md text-hprohf'>
                            <option value='rent'>Rent</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pType">Property Status</label>
                        <select name="pType" id='pType' className='p-2 rounded-md text-hprohf'>
                            <option value='residential'>Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="independent">Independent House</option>
                        </select>
                    </div>
                </div>
                {/* Basic Information Second Row */}
                <div className='md:flex gap-5 w-full'>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pSubType">Property Sub Type</label>
                        <select name="pSubType" id='pSubType' className='p-2 rounded-md text-hprohf'>
                            <option value='rent'>Apartment</option>
                            <option value="sell">Room</option>
                            <option value="sell">Duplex</option>
                            <option value="sell">Building</option>
                            <option value="sell">Plot</option>
                            <option value="sell">Office</option>
                            <option value="sell">Shop</option>
                            <option value="sell">Warehouse</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pPrice">Property Price</label>
                        <input type="digit" name="pPrice" id="pPrice" placeholder='Enter Property Price' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="priceSQFT">Price SQFT (Optional)</label>
                        <input type="digit" name="priceSQFT" id="priceSQFT" placeholder='Price per SQFT' className='p-2 rounded-md text-hprohf' />
                    </div>
                </div>
                {/* Basic Information Third Row */}
                <div className='md:flex gap-5 w-full'>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pLength">Property Length/Area</label>
                        <input type="digit" name="pLength" id="pLength" placeholder='Propety Total length/Area' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pRoom">Room in Total</label>
                        <input type="number" name="pRoom" id="pRoom" placeholder='Total Rooms' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pBathRoom">Bath Room in Total</label>
                        <input type="number" name="pBathRoom" id="pBathRoom" placeholder='Total Bath Rooms' className='p-2 rounded-md text-hprohf' />
                    </div>
                </div>
                {/* Localtion Information */}
                <h3 className='text-xl font-bold my-5'>Location Information</h3>
                <div className='md:flex gap-5 w-full'>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pCity">Property City</label>
                        <select name="pCity" id="pCity" className='p-2 rounded-md text-hprohf'>
                            <option value="dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Khulna">Khula</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Cumilla">Cumilla</option>
                            <option value="Mymensignh">Mymensignh</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pArea">Propety Area</label>
                        <input type="text" name="pArea" id="pArea" placeholder='Enter Property Area' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="pAddress">Property Address</label>
                        <input type="text" name="pAddress" id="pAddress" placeholder='Enter Property Full Address' className='p-2 rounded-md text-hprohf' />
                    </div>
                </div>
                <h3 className='text-xl font-bold my-5'>Detailed Information</h3>
                <label htmlFor="pDetails"></label>
                <textarea name="pDetails" id="pDetails" rows="5" className='w-full p-2 rounded-md text-hprohf' placeholder='Enter Detailed information About Your Property'></textarea>
                {/* Property Feature area */}
                <h3 className='text-xl font-bold my-5'>Property Features</h3>
                <div className='md:flex gap-5 w-full'>
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-2 justify-between'>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="parking" id="parking" value='parking'/>
                            <label htmlFor="parking">Free Parking</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="ac" id="ac" value='ac'/>
                            <label htmlFor="ac">Air Condition</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="pool" id="pool" value='pool'/>
                            <label htmlFor="pool">Swimming Pool</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="balcony" id="balcony" value='balcony'/>
                            <label htmlFor="balcony">Balcony/Terrace</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="cleaning" id="cleaning" value='cleaning'/>
                            <label htmlFor="cleaning">Cleaning Service</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="internet" id="internet" value='internet'/>
                            <label htmlFor="internet">Internert/WiFi</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="laundry" id="laundry" value='laundry'/>
                            <label htmlFor="laundry">Laundry Room</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="siting" id="siting" value='siting'/>
                            <label htmlFor="siting">Places to Seat</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="windowcover" id="windowcover" value='windowcover'/>
                            <label htmlFor="windowcover">Window Covering</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="serventroom" id="serventroom" value='serventroom'/>
                            <label htmlFor="serventroom">Servent Room</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="serventbath" id="serventbath" value='serventbath'/>
                            <label htmlFor="serventbath">Servent Bathroom</label>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="firealerm" id="firealerm" value='firealerm'/>
                            <label htmlFor="firealerm">Fire Alerm</label>
                        </span>
                    </div>
                </div>
                 {/* Localtion Information */}
                 <h3 className='text-xl font-bold my-5'>Contact Details</h3>
                <div className='md:flex gap-5 w-full'>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="name">Name</label>
                        <input type="name" name="name" id="name" placeholder='Enter Your Name' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" placeholder='Enter Email Address' className='p-2 rounded-md text-hprohf' />
                    </div>
                    <div className='flex flex-col gap-2 w-11/12 md:w-2/6'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='Enter Phone Number' className='p-2 rounded-md text-hprohf' />
                    </div>
                </div>
                {/* Localtion Information */}
                <h3 className='text-xl font-bold my-5'>Upload Propety Images</h3>
                <label htmlFor="images">Upload Multiple Image of your Property</label>
                <input type="file" name="images" id="images" multiple/>
                <button className='bg-hpro2nd text-white font-semibold py-2 px-3 rounded-md block my-10'>Submit Property</button>
            </form>
        </div>
    );
};

export default PropertySubmit;