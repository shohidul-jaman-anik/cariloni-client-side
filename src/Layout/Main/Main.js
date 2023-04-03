import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Share/Header/Header';
import Footer from '../../Components/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;