import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateName, verifyMail } = useContext(AuthContext)
    // console.log(user);


    const registerHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                updateName(name)
                    .then(() => { })
                    .catch(() => { })
                verifyMail()
                    .then(() => { })
                    .catch(() => { })
                Swal.fire('Account create Successful', 'Check your email and verify', "success")
                form.reset()
                // console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })

    }

    return (
        <>
            <Navbar />
            <div className='flex justify-center h-[90vh]'>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 my-auto dark:bg-gray-400 dark:text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold">Create new account</h1>
                    </div>
                    <form onSubmit={registerHandle} className="space-y-5 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm text-left">Enter Your Full Name</label>
                                <input type="name" name="name" id="name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-left">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
                            </div>
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <div>
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-indigo-500 hover:bg-indigo-600 dark:text-gray-100">Create account</button>
                            </div>
                            <div className='mt-5 mb-3 flex justify-center'>
                                <button className=' rounded-md'> <FaGoogle className='w-10 h-6 hover:text-blue-600 font-bold' /></button>
                                <button className='rounded-md'> <FaGithub className='w-10 h-7 hover:text-blue-600 font-bold' /></button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-900">Already have an account yet?
                                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-indigo-800"> Login</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;