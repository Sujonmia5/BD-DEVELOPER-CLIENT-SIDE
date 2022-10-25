import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Course = () => {
    const data = useLoaderData()
    console.log(data);
    const { name, price, picture, details, Instructor, category_id, rating } = data
    return (
        <div className="px-4 shadow-lg w-auto py-10 rounded-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="overflow-hidden md:flex transition-shadow duration-300 bg-white rounded shadow-sm">
                <Link to='/'>
                    <img
                        src={picture}
                        className="object-cover md:w-[340px] md:h-[370px]"
                        alt=""
                    />
                </Link>
                <div className="p-5 border border-t-0 border-r-0 md:w-[70%]">
                    <p
                        aria-label="Category"
                        title="Film It!"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        {name}
                    </p>
                    <p className="mb-2 hidden md:block text-gray-700">
                        {details}
                    </p>
                    <div className='flex flex-col-reverse md:flex-row mx-auto justify-around md:mt-5'>
                        <div className='flex content-center'>
                            <img className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" src={Instructor.img} alt="" />
                            <div className='ml-3'>
                                <p className='font-medium'>Author Name</p>
                                <p> {Instructor.name}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-3 md:mt-0'>
                            <p className='text-blue-700 font-medium mr-11'>Price: {price}</p>
                            <p className='text-blue-700 inline-flex relative'>Rating: {rating}<FaStar className='text-yellow-500 absolute right-[-18px] top-1' /></p>
                        </div>
                    </div>
                    <div className='flex justify-center md:mt-10'>
                        <Link to={`/course/details/${category_id}`} className="px-8 block py-3 font-bold text-1xl rounded-full dark:bg-gray-400 hover:bg-gray-300 font-bold dark:text-gray-900">Course Details</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Course;