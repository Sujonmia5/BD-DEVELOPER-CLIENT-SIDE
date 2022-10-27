import { createBrowserRouter } from "react-router-dom"
import Blog from "../Components/Blog/Blog"
import Course from "../Components/Course/Course"
import CourseCart from "../Components/CourseCart/CourseCart"
import CourseDetails from "../Components/CourseDetails/CourseDetails"
import Error from "../Components/Error/Error"
import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import Pdf from "../Components/Pdf/Pdf"
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
                loader: () => fetch('https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/allCourse')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/allCourse')
            },
            {
                path: '/course',
                element: <CourseCart />,
                loader: () => fetch('https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/allCourse')
            },
            {
                path: '/category/:id', element: <Course />,
                loader: ({ params }) => fetch(`https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/details/:id',
                element: <PrivetRoute><CourseDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/blog', element: <Blog />
    },
    {
        path: '/course/download/pdf/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-hksyjnu4u-sujonmia5.vercel.app/category/${params.id}`),
        element: <PrivetRoute> <Pdf /></PrivetRoute>
    },
    {
        path: '/profile', element: <PrivetRoute><Profile /></PrivetRoute>
    },
    {
        path: '/register', element: <Register />
    },
    {
        path: '/login', element: <Login />
    }

])

export default routes