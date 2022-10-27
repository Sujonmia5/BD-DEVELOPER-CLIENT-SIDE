import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';
import Swal from 'sweetalert2';


const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { details, category_id, name, price, rating, animation, Instructor } = courseDetails
    const [condition, setCondition] = useState(false)
    const [download, setDownload] = useState(false)

    const checkOut = () => {
        Swal.fire('Congratulations Checkout successful', 'You can now Download pdf File', 'success')
        setDownload(true)
    }

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
                        <div className='flex flex-col justify-start mt-5 mb-5'>
                            <div className="flex items-center">
                                <input type="checkbox" onClick={() => setCondition(!condition)} name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-indigo-400 focus:dark:border-indigo-400 focus:ring-2 accent-indigo-400" />
                                <label htmlFor="remember" className="text-sm dark:text-gray-900">Terms and conditions</label>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row lg:flex-row justify-around  mt-5'>
                            <button onClick={checkOut} className={`${condition ? 'self-start items-center mb-3 px-8 py-2 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500' : 'self-start items-center mb-3 px-8 py-2 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-500 btn-disabled'}`}>Check Out Now</button>
                            <Link to={`/course/download/pdf/${category_id}`} className={`${download ? "self-start flex flex-row-reverse items-center px-8 py-2 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500" : "hidden"}`}>
                                <FaDownload className='ml-2' />
                                Download Pdf</Link>
                        </div>
                    </div>
                    <div className=' flex items-center'>
                        <img className='lg:w-96 rounded-lg' src={animation} alt="" />
                    </div>
                </div>
            </section >
        </div >
    );
};

export default CourseDetails;