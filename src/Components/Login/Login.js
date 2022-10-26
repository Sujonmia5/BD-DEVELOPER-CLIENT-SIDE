import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FaGoogle, FaGithub, FaRegTimesCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';

const Login = () => {
  const { loginUser, forgetPassword, googleRegister, gitHubRegister } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [emailReset, setEmailReset] = useState()
  // const [error, setError] = useState('')
  const Navigate = useNavigate()

  const loginHandle = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire('Login Successful', '', 'success')
        Navigate('/home')
      })
      .catch(error => {
        Swal.fire(`${error.message}`, ``, `error`)
      })
  }
  const googleHandle = () => {
    googleRegister()
      .then(result => {
        const user = result.user
        console.log(user);
        Swal.fire('Login Successful', '', 'success')
        Navigate('/home')
      })
      .catch(error => {
        Swal.fire(`${error.message}`, ``, `error`)
      })
  }
  const gitHubHandle = () => {
    gitHubRegister()
      .then(result => {
        const user = result.user
        console.log(user);
        Swal.fire('Login Successful', '', 'success')
        Navigate('/home')
      })
      .catch(error => {
        Swal.fire(`${error.message}`, ``, `error`)
      })
  }
  const resetEmail = (e) => [
    setEmailReset(e.target.value)
  ]
  console.log(emailReset);
  const resetPassword = () => {
    forgetPassword(emailReset)
      .then(() => {
        Swal.fire('Check your mailbox', '', 'question')
      })
      .catch((error) => {
        Swal.fire(`${error.message}`, ``, `error`)
      })
    setShowModal(false)
  }
  return (
    <>
      <Navbar />
      <div className='flex justify-center relative h-[90vh]'>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 my-auto dark:bg-gray-400 dark:text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login Account</h1>
            <p className="text-sm dark:text-gray-400">Log in to access your account</p>
          </div>
          <form onSubmit={loginHandle} className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor='email' className="block mb-2 text-sm text-left">Email address</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor='password' className="text-sm">Password</label>
                  <Link onClick={() => setShowModal(true)} className="text-xs hover:underline dark:text-gray-900">Forgot password?</Link>
                </div>
                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
                <div>
                  <button type="submit" className="w-full mt-4 px-8 py-3 font-semibold rounded-md dark:bg-indigo-500 hover:bg-indigo-600 dark:text-gray-100">Login</button>
                </div>
              </div>
            </div>
          </form>
          <div>
            <div className='mt-5 mb-3 flex justify-center'>
              <button onClick={googleHandle} className=' rounded-md'> <FaGoogle className='w-10 h-6 hover:text-blue-600 font-bold' /></button>
              <button onClick={gitHubHandle} className='rounded-md'> <FaGithub className='w-10 h-7 hover:text-blue-600 font-bold' /></button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-900">Don't have an account yet?
              <a rel="noopener noreferrer" href="/register" className="hover:underline dark:text-indigo-800"> Create Account</a>.
            </p>
          </div>
        </div>
        <>
          {
            showModal ? <div className={`flex absolute top-[35%] flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-600 dark:text-gray-100`}>
              <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-indigo-400">
                  <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
                  <rect width="32" height="136" x="240" y="112"></rect>
                  <rect width="32" height="32" x="240" y="280"></rect>
                </svg><span>Reset Your Password</span>
                <button onClick={() => { setShowModal(false) }} className='ml-20'><FaRegTimesCircle className=' h-8 w-8' /></button>
              </h2>
              <div>
                <label htmlFor='email' className="block mb-2 text-sm text-left">Email address</label>
                <input onBlur={resetEmail} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900" />
              </div>
              <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                <button onClick={resetPassword} className="px-6 py-2 rounded-sm shadow-sm dark:bg-indigo-400 dark:text-gray-900">Reset your password</button>
              </div>
            </div> : null
          }
        </>
      </div>

    </>
  );
};

export default Login;