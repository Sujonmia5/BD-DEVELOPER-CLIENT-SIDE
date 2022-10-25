import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {

    return (
        <div>
            <Navbar />
            <>
                <div>
                    <Header />
                </div>
                <div className=" mx-[5%] mt-20 grid grid-cols-4 gap-4">
                    <div className="border p-10 pt-0 hidden md:block">
                        <h1 className='text-2xl font-medium text-indigo-500'>Course Category</h1>
                        <div className="mt-1 h-px w-full dark:bg-indigo-500"></div>
                        <div className='mt-8'>
                            <Category />
                        </div>
                    </div>
                    <div className="md:col-span-3 col-span-4">
                        <Outlet />
                    </div>
                </div>
            </>
            <Footer />
        </div>
    );
};

export default Layout;