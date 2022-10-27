import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const [error, setError] = useState('')
    const { createUser, logOut, updateName, verifyMail, googleRegister, gitHubRegister } = useContext(AuthContext)
    // console.log(user);
    const Navigate = useNavigate()

    const registerHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                updateName(name, photoUrl)
                    .then(() => { })
                    .catch(() => { })
                verifyMail()
                    .then(() => { })
                    .catch(() => { })
                Swal.fire('Account create Successful', 'Check your email and verify', "success")
                // console.log(user);
                form.reset()
                logOut()
                Navigate('/login')
            })
            .catch(error => {
                Swal.fire(`${error.message}`, ``, `error`)
            })

    }

    const googleHandle = () => {
        googleRegister()
            .then(result => {
                const user = result.user;
                Swal.fire('Account create Successful', '', "success")
                Navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const gitHubHandle = () => {
        gitHubRegister()
            .then(result => {
                const user = result.user;
                Swal.fire('Account create Successful', '', "success")
                Navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
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
                                <label htmlFor="photoUrl" className="block mb-2 text-sm text-left">Photo Url</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="https://encrypted-tbn0.gstatic.com/images?" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
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
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-indigo-500 hover:bg-indigo-600 dark:text-gray-100">Create account</button>
                        </div>
                    </form>
                    <div>
                        <div className='mt-5 mb-3 flex justify-center'>
                            <button onClick={googleHandle} className=' rounded-md'> <FaGoogle className='w-10 h-6 hover:text-blue-600 font-bold' /></button>
                            <button onClick={gitHubHandle} className='rounded-md'> <FaGithub className='w-10 h-7 hover:text-blue-600 font-bold' /></button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-900">Already have an account yet?
                            <a rel="noopener noreferrer" href="/login" className="hover:underline dark:text-indigo-800"> Login</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;