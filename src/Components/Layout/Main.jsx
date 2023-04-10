import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Home from '../Home/Home';
import JobCategories from '../JobCategories/JobCategories';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Home></Home>
            
        </div>
        
    );
};

export default Main;