import { createBrowserRouter } from "react-router-dom"
import Course from "../Components/Course/Course"
import CourseCart from "../Components/CourseCart/CourseCart"
import CourseDetails from "../Components/CourseDetails/CourseDetails"
import Error from "../Components/Error/Error"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import Profile from "../Components/Profile/Profile"
import Register from "../Components/Register/Register"
import Layout from "../Layout/Layout"
import PrivetRoute from "./PrivetRoute/PrivetRoute"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/course',
                element: <CourseCart />,
                loader: () => fetch('http://localhost:5000/allCourse')
            },
            {
                path: '/category/:id', element: <Course />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course/details/:id',
                element: <PrivetRoute><CourseDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/profile', element: <PrivetRoute><Profile /></PrivetRoute>
    },
    {
        path: '/register', element: <Register />
    },
    {
        path: '/login', element: <Login />
    },
])

export default routes