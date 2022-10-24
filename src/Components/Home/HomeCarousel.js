import React from 'react';
import hero2 from '../../assests/hero-1.jpg';
import hero1 from '../../assests/hero-2.jpg';
import hero3 from '../../assests/hero-3.jpg';
import hero4 from '../../assests/hero-4.jpg';

const HomeCarousel = () => {
  return (
    <div>
      <div className="carousel w-full md:max-h-screen min-h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero1} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          {/* Carousel Content */}
          <div className='w-10/12 md:w-8/12 text-center absolute top-[20%] left-[6%] md:top-[20%] md:left-[20%]'>
            <h1 className='text-3xl md:text-8xl font-bold text-white mb-2 md:my-5'>Your Property Is Our Priority</h1>
            <p className='text-md md:text-lg font-semibold text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='bg-hpro2nd py-3 px-5 rounded-lg text-white font-semibold my-5'>Learn More</button>
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={hero2} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          {/* Carousel Content */}
          <div className='w-10/12 md:w-8/12 text-center absolute top-[20%] left-[6%] md:top-[20%] md:left-[20%]'>
            <h1 className='text-3xl md:text-8xl font-bold text-white mb-2 md:my-5'>Let Your Home Be Unique & Stylist</h1>
            <p className='text-lg font-semibold text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='bg-hpro2nd py-3 px-5 rounded-lg text-white font-semibold my-5'>Learn More</button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={hero3} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          {/* Carousel Content */}
          <div className='w-10/12 md:w-8/12 text-center absolute top-[20%] left-[6%] md:top-[20%] md:left-[20%]'>
            <h1 className='text-3xl md:text-8xl font-bold text-white mb-2 md:my-5'>Modern House Make Better Life</h1>
            <p className='text-lg font-semibold text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='bg-hpro2nd py-3 px-5 rounded-lg text-white font-semibold my-5'>Learn More</button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={hero4} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          {/* Carousel Content */}
          <div className='w-10/12 md:w-8/12 text-center absolute top-[20%] left-[6%] md:top-[20%] md:left-[20%]'>
            <h1 className='text-3xl md:text-8xl font-bold text-white mb-2 md:my-5'>Just browse away.
              It’s all here.</h1>
            <p className='text-lg font-semibold text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='bg-hpro2nd py-3 px-5 rounded-lg text-white font-semibold my-5'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;