import React from 'react';
import {AiOutlineLine } from 'react-icons/ai';
import person1 from '../../assests/testimonials/1.png';
import person2 from '../../assests/testimonials/2.png';
import person3 from '../../assests/testimonials/3.png';
import person4 from '../../assests/testimonials/4.png';
import person5 from '../../assests/testimonials/5.png';


const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto relative'>
            <div className="carousel carousel-center p-4 space-x-4 rounded-box">
                {/* Testimonial Items 1 */}
                <div className="carousel-item w-11/12 md:w-1/4 flex-col bg-gray-100 p-5 rounded-lg shadow-lg" id='item1'>
                    <p>
                        Home Pros is an outstanding agent to work with. They are skilled listener and negotiator, with very in-depth knowledge of the local markets. My husband and I listed two properties with them at the same time and while they sold one within a week.
                    </p>
                    <div className='flex gap-2 items-center my-5'>
                        <img src={person1} alt='' className='w-20' />
                        <h2 className='text-lg font-bold'>Abagael Long</h2>
                    </div>
                </div>
                {/* Testimonial Items 2 */}
                <div className="carousel-item w-11/12 md:w-1/4 flex-col bg-gray-100 p-5 rounded-lg shadow-lg" id='item2'>
                    <p>
                    We recently purchased a condominium in New Jersey with Home Pros working as our buyer's agent. We were searching for a perfect place to live. From start to finish David ushered us through the process in a very thorough and gracious manner.
                    </p>
                    <div className='flex gap-2 items-center my-5'>
                        <img src={person2} alt='' className='w-20' />
                        <h2 className='text-lg font-bold'>Robert Morrill</h2>
                    </div>
                </div>
                {/* Testimonial Items 3 */}
                <div className="carousel-item w-11/12 md:w-1/4 flex-col bg-gray-100 p-5 rounded-lg shadow-lg" id='item3'>
                    <p>
                        My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. Home Pros and their skilled team helped make that dream a reality.The sale went smoothly.
                    </p>
                    <div className='flex gap-2 items-center my-5'>
                        <img src={person3} alt='' className='w-20' />
                        <h2 className='text-lg font-bold'>Shawn Baldwin</h2>
                    </div>
                </div>
                {/* Testimonial Items 4 */}
                <div className="carousel-item w-11/12 md:w-1/4 flex-col bg-gray-100 p-5 rounded-lg shadow-lg" id='item4'>
                    <p>
                        I recently sold a house with Home Pros and while this can be a very stressful process, I felt 110% confident by partnering with Them. They was candid, provided great feedback, helped explain clearly all details and managed the actual sale negotiation.
                    </p>
                    <div className='flex gap-2 items-center my-5'>
                        <img src={person4} alt='' className='w-20' />
                        <h2 className='text-lg font-bold'>Hanna Chen</h2>
                    </div>
                </div>
                {/* Testimonial Items 5 */}
                <div className="carousel-item w-11/12 md:w-1/4 flex-col bg-gray-100 p-5 rounded-lg shadow-lg" id='item5'>
                    <p>
                        I would highly recommend Home Pros. They gave us many helpful suggestions on how to update our home. We followed many of his ideas and our home looked amazing. Home Pros is very professional and did a very in depth market analysis.
                    </p>
                    <div className='flex gap-2 items-center my-5'>
                        <img src={person5} alt='' className='w-20' />
                        <h2 className='text-lg font-bold'>Robert Morrill</h2>
                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-2 mb-5">
                <a href="#item1" ><AiOutlineLine className='text-hpro2nd'></AiOutlineLine></a>
                <a href="#item2"><AiOutlineLine className='text-hpro2nd'></AiOutlineLine></a>
                <a href="#item3"><AiOutlineLine className='text-hpro2nd'></AiOutlineLine></a>
                <a href="#item4"><AiOutlineLine className='text-hpro2nd'></AiOutlineLine></a>
                <a href="#item5"><AiOutlineLine className='text-hpro2nd'></AiOutlineLine></a>
            </div>
        </div>
    );
};

export default Testimonials;