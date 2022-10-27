import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';
import HomeProperty from '../Home/HomeProperty';

const Properties = () => {
    const properties = useContext(DataContext);
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5'>
            <h1 className='text-2xl md:text-4xl font-bold text-hpro2nd my-5 text-center'>New Listed Properties</h1>
            <div className='grid md:grid-cols-3 gap-2 md:gap-8'>
                {
                    properties.map(property => <HomeProperty key={property.value} property={property}></HomeProperty>)
                }
            </div>
        </div>
    );
};

export default Properties;