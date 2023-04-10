import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div className='bg-indigo-50'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;