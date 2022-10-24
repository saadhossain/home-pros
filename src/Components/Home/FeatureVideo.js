import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import './feature.css';
const FeatureVideo = () => {
    return (
        <div className='feature-video'>
            <div className='flex min-h-screen items-center justify-center'>
                <div>
                    <h1 className='text-4xl md:text-8xl font-bold text-white text-center'>Find Modern House</h1>
                    <p className='text-md md:text-xl font-semibold text-white w-2/4 text-center mx-auto my-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <FaPlayCircle className='h-10 w-10 md:h-20 md:w-20 mx-auto text-hpro2nd'></FaPlayCircle>
                </div>
            </div>
        </div>
    );
};

export default FeatureVideo;