import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import { AuthContext } from '../../Context/Context';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { details, name, price, rating, animation, Instructor } = courseDetails
    const { user } = useContext(AuthContext)
    return (
        <div>
            <section className="dark:bg-gray-300 shadow-2xl rounded-lg border dark:text-gray-900">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    < div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12" >
                        <p className='relative mb-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-indigo-900">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className='absolute left-10 top-0 text-3xl font-semibold '>{name}</span>
                        </p>
                        <p className="mt-0 text-justify mb-8">{details}</p>
                        <div className='flex flex-col-reverse md:flex-row justify-between md:mb-2'>
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
                        <div className='flex justify-around mt-5'>
                            {
                                user?.uid ?
                                    <Link className="self-start flex flex-row-reverse items-center px-10 py-3 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500">
                                        <FaDownload className='ml-2' />
                                        Download Pdf</Link> :
                                    <Link to='/login' className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500">Pay Now</Link>
                            }
                        </div>
                    </div>
                    <img className='w-96' src={animation} alt="" />
                </div>
            </section >
        </div >
    );
};

export default CourseDetails;