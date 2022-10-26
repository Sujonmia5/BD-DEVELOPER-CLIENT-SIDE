import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ course }) => {
    // console.log(course);
    const { name, price, rating, category_id
        , picture } = course
    return (
        <div className="max-w-xs rounded-md shadow-lg dark:bg-slate-400 dark:text-gray-900">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-start">{name}</h2>
                    <div className='flex justify-between'>
                        <p className="dark:text-gray-900 font-medium">Price: {price}</p>
                        <p className='font-medium'>Rating: {rating}</p>
                    </div>
                </div>
                <Link to={`/course/details/${category_id}`} className="flex items-center justify-center w-full p-3 font-medium text-xl tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500">Details More</Link>
            </div>
        </div>
    );
};

export default Cart;