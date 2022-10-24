import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';
import AboutUsSection from './AboutUsSection';
import FeatureVideo from './FeatureVideo';
import HomeCarousel from './HomeCarousel';
import HomeProperty from './HomeProperty';
import PropertySearch from './PropertySearch';
import Testimonials from './Testimonials';
const Home = () => {
    const properties = useContext(DataContext)
    return (
        <div>
            {/* Home Carousel */}
            <HomeCarousel></HomeCarousel>
            <PropertySearch></PropertySearch>
            <h2 className='text-2xl md:text-6xl font-bold text-hpro2nd text-center my-5'>Our Top Featured Property</h2>
            <div className='w-10/12 mx-auto my-8 grid md:grid-cols-3 gap-5'>
                {
                    properties.map(property => <HomeProperty key={property.id} property={property}></HomeProperty>)
                }
            </div>
            <FeatureVideo></FeatureVideo>
            <AboutUsSection></AboutUsSection>
            <h2 className='text-2xl md:text-6xl font-bold text-hpro2nd text-center my-5'>Clients Testimonials</h2>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;