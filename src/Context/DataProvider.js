import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

export const DataContext = createContext()
const DataProvider = ({children}) => {
    const properties = useLoaderData()
    return (
        <DataContext.Provider value={properties}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;