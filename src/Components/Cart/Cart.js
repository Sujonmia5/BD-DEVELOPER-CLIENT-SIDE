import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Cart = ({ course }) => {
    // console.log(course);
    const { name, price, rating, category_id
        , picture } = course
    return (
        <div className="max-w-xs rounded-md shadow-lg dark:bg-slate-400 dark:text-gray-900">
            <img src={picture} alt="" className="object-cover object-center w-72 rounded-t-md h-64 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 pt-3 space-y-5">
                <div className="space-y-1">
                    <h2 className="text-3xl mt-0 font-semibold tracking-wide text-start">{name}</h2>
                    <div className='flex justify-between'>
                        <p className="dark:text-gray-900 font-medium">Price: {price}</p>
                        <p className='font-medium relative'>Rating: {rating} <FaStar className='text-yellow-500 absolute right-[-18px] top-1' /></p>
                    </div>
                </div>
                <Link to={`/category/${category_id}`} className="flex items-center justify-center w-full p-3 font-medium text-xl tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500">Details More</Link>
            </div>
        </div>
    );
};

export default Cart;