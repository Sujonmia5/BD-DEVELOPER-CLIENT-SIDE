import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Components/Category/Category';
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className=" mx-[5%] grid grid-cols-4 gap-4">
                <div className="border">
                    <h1 className='text-2xl font-medium text-indigo-500'>Course Category</h1>
                    <div className="mt-1 h-px w-full dark:bg-indigo-500"></div>
                    <Category />
                </div>
                <div className="col-span-3 ...">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;