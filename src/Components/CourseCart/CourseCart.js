import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const CourseCart = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-indigo-500'>Available Web Developing Course</h1>
                <div className="mt-1 h-px w-full dark:bg-indigo-500"></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mb-10 justify-center gap-3'>
                {
                    course.map(c => <Cart key={c.category_id} course={c}></Cart>)
                }
            </div>
        </div>
    );
};

export default CourseCart;