import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import DataProvider from '../Context/DataProvider';

const Main = () => {
    return (
        <div>
            <DataProvider>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataProvider>
        </div>
    );
};

export default Main;