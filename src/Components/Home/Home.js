import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';
import HomeCarousel from './HomeCarousel';
import HomeProperty from './HomeProperty';
const Home = () => {
    const properties = useContext(DataContext)
    return (
        <div>
            {/* Home Carousel */}
            <HomeCarousel></HomeCarousel>
            <div className='w-10/12 mx-auto my-8 grid md:grid-cols-3 gap-5'>
                {
                   properties.map(property => <HomeProperty key={property.id} property={property}></HomeProperty>) 
                }
            </div>
        </div>
    );
};

export default Home;