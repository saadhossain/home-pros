import React from 'react';
import AboutUsleft from '../../assests/aboutUs.webp';
import AboutUsRight from '../../assests/aboutUs2nd.webp';
const AboutUsSection = () => {
    return (
        <div className='w-10/12 mx-auto my-5 flex gap-5'>
            <div className='w-2/5 hidden md:block'>
                <img src={AboutUsleft} alt=""/>
            </div>
            <div className='w-11/12 md:w-3/5'>
                <p className='font-semibold text-lg text-hpro2nd'>ABOUT US</p>
                <h2 className='text-3xl md:text-5xl font-bold text-hpro'>Home Pros A Real Estate Company</h2>
                <p className='my-5'>Home Pros delivers superior resident experiences by maintaining a high standard of customer service, meticulous attention to detail, and creative in-building programming.</p>
                <img src={AboutUsRight} alt=''className='w-full'/>
            </div>
        </div>
    );
};

export default AboutUsSection;